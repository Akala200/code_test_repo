
import { Router } from 'express';
import testController from '../controllers/testController';

const router = Router();

const {
  testRequest
} = testController;

router.get('/request', testRequest);


export default router;
