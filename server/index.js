const axios = require("axios");
const server = require("./src/server");
const { conn,Country,Activity } = require('./src/db.js');
const PORT = 3001;
const saveJsonInDB = require("../server/src/midlewares/saveJsonInBD")
const dbJson=require('./api/db.json')

conn.sync({ force: true })
  .then(()=>saveJsonInDB(dbJson,Country))
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
  })
  }).catch(error => console.error(error))
