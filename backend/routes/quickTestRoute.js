
const router = require('express').Router()
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

const { createQuickTest, getAllQuickTest, getQuickTestDetail, updateQuickTest, deleteQuickTest } = require('../controllers/quickTestCtrl')

router.route('/quicktest/new').post(isAuthenticatedUser,authorizedRoles("admin"),createQuickTest)
router.route('/quicktest').get(getAllQuickTest)
router.route('/quicktest/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getQuickTestDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updateQuickTest).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteQuickTest)


module.exports = router