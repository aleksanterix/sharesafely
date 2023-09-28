const router = require("express").Router()

router.get("/test", (req, res) => {
    res.send("Hello from Node.js!");
});

module.exports = router