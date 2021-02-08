const mongoose = require('mongoose');

const WriterModel = require('../../database/Models/WriterModel');

const createWriter = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    let data = req.body;
    data.createdAt = Date.now();
    data.createdBy = req.idUser;
    const Writer = await WriterModel.create({ ...data });

    await res.send(Writer);
  }
};

module.exports = createWriter;
