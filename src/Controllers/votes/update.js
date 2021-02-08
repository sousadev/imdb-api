const mongoose = require('mongoose');

const VoteModel = require('../../database/Models/VoteModel');

const updateVote = async (req, res) => {
  if (req.userType !== 'consumer') {
    await res.status(401).json({ message: 'not authorized.' });
  } else {
    const data = req.body;

    const compare = await Vote.find(req.params.id).where({
      createdBy: req.idUser,
    });

    if (compare) {
      const Vote = await VoteModel.findByIdAndUpdate(
        req.params.id,
        {
          ...data,
          updatedBy: req.idUser,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      return await res.send(Vote);
    } else {
      return res
        .status(401)
        .send({ message: 'User not authorized to edit this vote.' });
    }
  }
};

module.exports = updateVote;
