import { Express, Request, Response, NextFunction } from 'express';
import logger from "@/utils/logger";

// ログミドルウェアを作成
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    logger.debug(`Incoming request: ${req.method} ${req.url}`);

    // リクエスト処理後にもログを出力
    res.on('finish', () => {
        logger.debug(`Response status: ${res.statusCode}`);
    });

    next();
};
