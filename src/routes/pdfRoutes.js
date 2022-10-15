import { Router } from 'express';
import pdfController from '../controllers/PdfController';

const router = new Router();

router.get('/', pdfController.index);

export default router;
