db.resumoProdutos.insertMany([
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocuments({}),
  },
]);

db.resumoProdutos.find({}, { _id: false, franquia: true, totalProdutos: true });
