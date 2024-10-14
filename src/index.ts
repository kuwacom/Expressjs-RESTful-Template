import logger from "@/utils/logger";
import env from "@/configs/env";
import app from "@/app";

app.listen(Number(env.PORT), env.HOST as string, () => {
    logger.info(`Server is running on: http://${env.HOST}:${env.PORT}`);
});

