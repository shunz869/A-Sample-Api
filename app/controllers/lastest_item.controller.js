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

  create(req, res){
    // Create a Note
    const lastest_item = new Lastest_item({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        img:req.body.img
    });

    // Save Note in the database
    lastest_item.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
  };

  update(req, res){
    // Find note and update it with the request body
    Lastest_item.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        img:req.body.img
    }, {new: true})
    .then(lastest_item => {
        if(!lastest_item) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
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
            message: "Error updating note with id " + req.params.noteId
        });
    });
  };

  delete(req, res){
    Lastest_item.findByIdAndRemove(req.params.id)
    .then(lastest_item => {
        if(!lastest_item) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
  };

};

const LastestItemController = new LastestItemsController();

export default LastestItemController;