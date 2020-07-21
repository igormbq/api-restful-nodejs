const repository = require('../repositories/mentions-repository');


// create
exports.createMention = async (req, res) => {
  try {
    await repository.createMention({
      friend: req.body.friend,
      mention: req.body.mention
    });
    res.status(201).send({ message: 'Menção cadastrada com sucesso!' });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao cadastrar a menção.' });
  }
};

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await repository.listMentions();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: 'Falha ao carregar as menções!' });
  }
};

// update
exports.updateMention = async (req, res) => {
  try {
    await repository.updateMention(req.params.id, req.body);
    res.status(200).send({
      message: 'Menção atualizada com sucesso!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao atualizar a menção.' });
  }
};

// delete
exports.deleteMention = async (req, res) => {
  try {
    await repository.deleteMention(req.params.id);
    res.status(200).send({
      message: 'Menção removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao remover a menção.' });
  }
};