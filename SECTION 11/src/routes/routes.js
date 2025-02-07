const express = require("express")
const  apiUser = require("../api/user")

const router = express.Router()


router.get('/',apiUser.FindAll)
router.get('/:index',apiUser.FindByIndex)
router.post('/',apiUser.Create)
router.put('/:index',apiUser.Update)
router.delete('/:index',apiUser.Delete)

module.exports = router;



