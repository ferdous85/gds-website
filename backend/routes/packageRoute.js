const router = require('express').Router()
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')
const { createPackage, getPackage, getPackageDetails, updatePackages, deletePackage } = require('../controllers/packageCtrl')


// Pricing area
router.route('/package/new').post(isAuthenticatedUser,authorizedRoles("admin"),createPackage)
router.route('/package').get(getPackage)
router.route('/package/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getPackageDetails).put(isAuthenticatedUser,authorizedRoles("admin"),updatePackages).delete(isAuthenticatedUser, authorizedRoles("supadmin"),deletePackage)


module.exports = router