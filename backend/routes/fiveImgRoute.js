const router = require('express').Router()
const { createFiveImg, getAllFiveImg, getSingleFiveImg, deleteFiveImg, updateFiveImg } = require('../controllers/fiveImgCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/fiveimg/new').post(isAuthenticatedUser, authorizedRoles("admin"), createFiveImg)
router.route('/fiveimg').get(getAllFiveImg)
router.route('/fiveimg/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getSingleFiveImg).put(isAuthenticatedUser,authorizedRoles("admin"),updateFiveImg).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteFiveImg)



module.exports = router