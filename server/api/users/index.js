import {AsyncRouter} from 'express-async-router';
import { register } from './controller';

const usersRouter = AsyncRouter();

usersRouter.post('/', register);

export default usersRouter;
