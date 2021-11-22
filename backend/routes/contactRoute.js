const { createContact, getAllContact, updateContactArea, deleteContactArea } = require('../controllers/contactCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

const router = require('express').Router()

//about hero area
router.route('/contact/new').post(isAuthenticatedUser, authorizedRoles("admin"), createContact)
router.route('/contact').get(getAllContact)
router.route('/contact/:id').put(isAuthenticatedUser, authorizedRoles("admin"), updateContactArea).delete(isAuthenticatedUser, authorizedRoles("admin"), deleteContactArea)


module.exports = router