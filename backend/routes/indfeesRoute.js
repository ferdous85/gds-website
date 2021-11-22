
const router = require('express').Router()
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')
const { createIndFees, updateIndFees, deleteIndFees, getIndFeesDetails, getAllIndFees } = require('../controllers/indfeesCtrl')

router.route('/indfees/new').post(isAuthenticatedUser,authorizedRoles("admin"),createIndFees)
router.route('/indfees').get(getAllIndFees)
router.route('/indfees/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getIndFeesDetails).put(isAuthenticatedUser,authorizedRoles("admin"),updateIndFees).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteIndFees)


module.exports = router