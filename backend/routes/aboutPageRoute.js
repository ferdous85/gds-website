const { createAboutHero, getAboutHero, updateAboutHeroArea, deleteAboutHeroArea } = require('../controllers/aboutPageCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')

const router = require('express').Router()

//about hero area
router.route('/about/new').post(isAuthenticatedUser, authorizedRoles("admin"), createAboutHero)
router.route('/about').get(getAboutHero)
router.route('/about/:id').put(isAuthenticatedUser, authorizedRoles("admin"), updateAboutHeroArea).delete(isAuthenticatedUser, authorizedRoles("admin"), deleteAboutHeroArea)


module.exports = router