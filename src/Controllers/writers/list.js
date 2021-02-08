const mongoose = require('mongoose');

const WriterModel = require('../../database/Models/WriterModel');

const listWriter = async (req, res) => {
  if (!req.headers['authorization']) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    if (req.userType === 'admin') {
      const Writer = await WriterModel.find()
        .select(['+createdBy', '+updatedBy'])
        .populate(['movies']);
      await res.send(Writer);
    } else {
      const Writer = await WriterModel.find()
      .populate(['movies']);
      await res.send(Writer);
    }
  }
};

module.exports = listWriter;
