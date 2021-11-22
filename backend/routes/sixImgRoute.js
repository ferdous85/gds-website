const router = require('express').Router()
const { createSixImg, getAllSixImg, getSingleSixImg, updateSixImg, deleteSixImg } = require('../controllers/sixImgCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/siximg/new').post(isAuthenticatedUser, authorizedRoles("admin"), createSixImg)
router.route('/siximg').get(getAllSixImg)
router.route('/siximg/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getSingleSixImg).put(isAuthenticatedUser,authorizedRoles("admin"),updateSixImg).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteSixImg)



module.exports = router