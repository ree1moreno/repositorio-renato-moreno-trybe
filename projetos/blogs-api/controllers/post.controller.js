const { BlogPost, User, Categorie } = require('../models');

const findAll = async (_req, res) => {
  const postList = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Categorie,
      as: 'categories',
      attributes: { exclude: [] },
    }],
  });

  return res.status(200).json(postList);
};

const findById = async (req, res) => {
  const { id } = req.params;
  console.log('teste id', id);

  const post = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });

  console.log('teste post', post);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

module.exports = {
  findAll,
  findById,
};