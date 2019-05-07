import LastestItem from '../controllers/lastest_item.controller';
import Router from 'express';

const router = Router();

router.get('/lastestsItem', LastestItem.findAll);
router.get('/lastestsItem/:id', LastestItem.findOne);
router.post('/lastestsItem', LastestItem.create);
router.put('/lastestsItem/:id', LastestItem.update);
router.delete('/lastestsItem/:id', LastestItem.delete);


export default router;