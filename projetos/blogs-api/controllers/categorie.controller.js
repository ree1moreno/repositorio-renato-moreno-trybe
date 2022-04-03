const { Categorie } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;

  // const alreadyExists = await Categorie.findOne({ where: { name } });  
  // if (alreadyExists) return res.status(409).json({ message: 'Categorie already registered' });
  
  const newCategorie = await Categorie.create({ name });
  
  return res.status(201).json({ id: newCategorie.id, name });
};

const findAll = async (_req, res) => {
  const categorieList = await Categorie.findAll();
  console.log(categorieList);

  return res.status(200).json(categorieList);
};

module.exports = {
  create,
  findAll,
};