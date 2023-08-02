const express = require("express")

const router = express.Router()

router.get("/test", function (req, res) {
    res.send("hello world")
})
router.post("/test1", function (req, res) {
    res.send("hello world")
})
router.put("/test2", function (req, res) {
    res.send("hello world")
})
router.patch("/test3", function (req, res) {
    res.send("hello world")
})
router.delete("/test4", function (req, res) {
    res.send("hello world")
})
module.exports = router;