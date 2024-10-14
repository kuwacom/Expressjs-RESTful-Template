import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import logger from '@/utils/logger';

const prisma = new PrismaClient();

// ユーザー登録
export const createUser = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                name,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'User registration failed' });
    }
};

// ユーザー取得
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// 指定したユーザーIDの取得
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id), // IDを数値に変換
            },
        });

        if (!user) {
            res.status(404)
            .json({ error: 'User not found' });
            return;
        }

        res.json(user);
    } catch (error) {
        logger.error(error);
        res.status(500)
        .json({ error: 'Failed to fetch user' });
    }
};
