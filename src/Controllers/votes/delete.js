const mongoose = require('mongoose');

const VoteModel = require('../../database/Models/VoteModel');

const deleteVote = async (req, res) => {
  if (!req.headers['authorization']) {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const compare = await Vote.find(req.params.id).where({
      createdBy: req.idUser,
    });

    if (compare || req.idUser === 'admin') {
      const Vote = await VoteModel.findByIdAndUpdate(
        req.params.id,
        {
          status: 'inactive',
          updatedBy: req.idUser,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      await res.send(Vote);
    } else {
      return res
        .status(401)
        .send({ message: 'User not authorized to delete this vote.' });
    }
  }
};

module.exports = deleteVote;
