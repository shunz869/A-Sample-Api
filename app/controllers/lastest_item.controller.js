import Lastest_item from '../models/lastest_item.model';

class LastestItemsController {
  
  findAll(req, res){
    Lastest_item.find()
    .then(lastest_items => {
        res.send(lastest_items);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
  };

  findOne(req, res){
    Lastest_item.findById(req.params.id)
    .then(lastest_item => {
        if(!lastest_item) {
            return res.status(404).send({
                message: "lastest not found with id " + req.params.noteId
            });            
        }
        res.send(lastest_item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
  };
};

const LastestItemController = new LastestItemsController();

export default LastestItemController;