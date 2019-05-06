import express from 'express';
import LastestItemController from '../controllers/lastest_item.controller';

const router = express.Router();

router.get('/lastests', LastestItemController.findAll);
router.get('/lastests/:id', LastestItemController.findOne);

export default router;