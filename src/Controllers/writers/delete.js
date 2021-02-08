const mongoose = require('mongoose');

const WriterModel = require('../../database/Models/WriterModel');

const deleteWriter = async (req, res) => {
  if (req.userType !== 'admin') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;
    const Writer = await Promise.all(
      await WriterModel.findByIdAndUpdate(
        req.params.id,
        {
          status: 'inactive',
          updatedBy: req.idUser,
          updatedAt: Date.now(),
        },
        { new: true }
      )
    );
    await res.send(Writer);
  }
};

module.exports = deleteWriter;
