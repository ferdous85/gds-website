const router = require('express').Router()
const { createFaq, getFaqDetails, updateFaq, deleteFaq, getAllFaq } = require('../controllers/faqCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/faq/new').post(isAuthenticatedUser, authorizedRoles("admin"), createFaq)
router.route('/faq').get(getAllFaq)
router.route('/faq/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getFaqDetails).put(isAuthenticatedUser,authorizedRoles("admin"),updateFaq).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteFaq)



module.exports = router