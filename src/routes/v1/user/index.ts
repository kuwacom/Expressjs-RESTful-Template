import { Router } from 'express';
import { createUser, getUserById, getUsers } from './user.controller';

const userRouter = Router();

// ユーザー登録エンドポイント
userRouter.post('/', createUser);

// ユーザー取得エンドポイント
userRouter.get('/', getUsers);

// 指定したユーザーIDの取得エンドポイント
userRouter.get('/:id', getUserById);

export default userRouter;
