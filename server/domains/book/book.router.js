// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import bookController from './book.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/book/'
// GET '/book/dashboard'
router.get(['/', '/dashboard'], bookController.showDashboard);
// GET '/book/add-form'
// GET '/book/add'
router.get(['/add-form', '/add'], bookController.addForm);

// Exporto este tramo de ruta
export default router;
