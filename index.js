const express = require('express')
const { Movie: movieModel, Movie_language: movie_languageModel, Language: languageModel } = require('./models')

const app= express();

app.get('/test', async (req,res)=> {
    movieModel.hasMany(movie_languageModel, {
        foreignKey: 'movie_id',
        sourceKey: 'id',
        as: 'movie_languages',
    });

    movie_languageModel.belongsTo(movieModel, {
        foreignKey: 'movie_id',
        sourceKey: 'id',
        as: 'movie_languages',
    })

    //make relation 1:M farm -> animal
    languageModel.hasOne(movie_languageModel, {
        foreignKey: 'language_id',
        sourceKey: 'id',
        as: 'movie_languages',
    })

    movie_languageModel.belongsTo(languageModel, {
        foreignKey: 'language_id',
        sourceKey: 'id',
        as: 'languages',
    })

    const movie = await movieModel.findAll({
        include: [
            {
                model: movie_languageModel,
                as: 'movie_languages',
                include: [
                    {
                        model: languageModel,
                        as: 'languages',
                    },
                ],
            },
        ],
    });
    res.send({ movie })

    .catch((error) => {
        console.error(error);
      });
});


app.listen(3001, ()=> {
    'server is running on port 3001';
})