const repository = require('../repositories/deal-repository');


// create
exports.createDeal = async (req, res) => {
  try {
    await repository.createDeal({
      deal: req.body.deal,
    });
    res.status(201).send({ message: 'Success, created Deal!' });
  } catch (e) {
    res.status(500).send({ message: 'Failed to create Deal.' });
  }
};

// list
exports.listDeal = async (req, res) => {
  try {
    const data = await repository.listDeal();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: 'Failed to list Deals!' });
  }
};

// update
exports.updateDeal = async (req, res) => {
  try {
    await repository.updateDeal(req.params.id, req.body);
    res.status(200).send({
      message: 'Success, updated Deal!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Failed to update Deal.' });
  }
};

// delete
exports.deleteDeal = async (req, res) => {
  try {
    await repository.deleteDeal(req.params.id);
    res.status(200).send({
      message: 'Success, removed Deal!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Failed to remove Deal.' });
  }
};