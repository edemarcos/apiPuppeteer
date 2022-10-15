import { Router } from 'express';
import screenshotController from '../controllers/ScreenshotController';

const router = new Router();

router.get('/', screenshotController.index);

export default router;
