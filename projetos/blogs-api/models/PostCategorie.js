module.exports = (sequelize) => {
  const PostCategorie = sequelize.define('PostCategorie', {}, {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategorie.associate = (models) => {
    models.Categorie.belongsToMany(
      models.BlogPost, {
        foreignKey: 'categoryId', otherKey: 'postId', through: PostCategorie, as: 'posts', 
      },
    );
    models.BlogPost.belongsToMany(
      models.Categorie, { 
        foreignKey: 'postId', otherKey: 'categoryId', through: PostCategorie, as: 'categories', 
      },
    );
  };

  return PostCategorie;
};
