import { Router } from 'express';
import officeController from './controllers/officeController';

const routes = Router();

routes.get('/', officeController.index);

export default routes;