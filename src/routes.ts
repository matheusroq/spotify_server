import { Router } from 'express';
import { AuthorizationController } from './controllers/AuthorizationController';

const router = Router();

const auhtorizationController = new AuthorizationController();

router.post('/auth', auhtorizationController.getAccess);

export { router };
