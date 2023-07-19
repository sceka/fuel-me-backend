import express from "express";

const PORT = 3001 || process.env.PORT;
const server = express();

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
