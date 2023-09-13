const server = require("./src/server");
const { conn,Country} = require('./src/db.js');
const PORT = 3001;
const saveJsonInDB = require("../server/src/midlewares/saveJsonInBD")

conn.sync({ force: false })
  .then(()=>saveJsonInDB(Country))
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
  })
  }).catch(error => console.error(error))
