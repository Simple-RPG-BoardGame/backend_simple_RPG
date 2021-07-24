const server = require("./api/server");

const PORT = process.env.PORT || 6060;

server.listen(PORT, () => {
    console.log(`Listening for RPG Game on Port ${PORT}...`)
})