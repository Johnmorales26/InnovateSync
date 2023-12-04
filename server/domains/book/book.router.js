import { Router } from 'express';
import bookController from './book.controller';
import ValidateFactory from '../../services/validateFactory';
import bookValidator from './book.validator';

const router = new Router();

// Rutas
router.get(['/', '/dashboard'], bookController.showDashboard);
router.get(['/add-form', '/add'], bookController.addForm);
router.post(
  '/add',
  ValidateFactory({
    schema: bookValidator.bookSchema,
    getObject: bookValidator.getBook,
  }),
  bookController.addBook,
);
router.post('/searchBooks', bookController.searchBooks);
router.delete('/:id', bookController.deleteBook);

export default router;
