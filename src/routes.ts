import { Router } from 'express';
import { AuthorizationController } from './controllers/AuthorizationController';
import { SearchController } from './controllers/SearchController';

const router = Router();
router.get('/', (req, res) => res.redirect('/login'));
//controllers
const auhtorizationController = new AuthorizationController();
const searchController = new SearchController();

router.get('/login', auhtorizationController.login);
router.post('/auth', auhtorizationController.getAccess);

// search
router.get('/search', searchController.getSearch);

export { router };
