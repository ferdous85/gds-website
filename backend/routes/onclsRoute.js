const router = require('express').Router()
const {  } = require('../controllers/faqCtrl')
const { createOncls, updateOncls, deleteOncls, getFiveHourOncls, getSixHourOncls, getAllOncls, getSingleOnCls } = require('../controllers/onclsCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/oncls/new').post(isAuthenticatedUser, authorizedRoles("admin"), createOncls)
router.route('/oncls').get(getFiveHourOncls)
router.route('/onclses').get(getAllOncls)
router.route('/sixhour').get(getSixHourOncls)
router.route('/onclses/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getSingleOnCls).put(isAuthenticatedUser,authorizedRoles("admin"),updateOncls).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteOncls)



module.exports = router