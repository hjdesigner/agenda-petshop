const path = require('path')
const mergeGraphQlSchemas = require('merge-graphql-schemas')

const arquivos = path.join(__dirname, './')

const {
    fileLoader
} = mergeGraphQlSchemas

const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados