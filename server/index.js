const express = require('express')
const cors = require('cors')
const server = express()
const {db} = require('./util/database')
const {Base, Favorite, Extra} = require('./util/model')
const {seed} = require('./seed')
const {getOptions} = require('./controllers/drinkController')

server.use(express.json())
server.use(cors())

Base.hasMany(Favorite)
Favorite.belongsTo(Base)
Extra.hasMany(Favorite)
Favorite.belongsTo(Extra)

server.get('/api/getOptions', getOptions)

// db
// .sync()
// .then(()=>seed())

server.listen(4000, () => console.log('running on 4000 yo'))


