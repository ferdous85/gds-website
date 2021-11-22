const router = require('express').Router()
const {createHeroBg, getHeroBg, updateHeroBg, deleteHeroBg, createFeatureArea, getFeatureArea, updateFeatureArea, deleteFeatureArea, createPricingArea, getPricingArea, updatePricingArea, deletePricingArea, getHeroBgDetail, getPricingDetail, getFeatureDetail} = require('../controllers/homePageCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Hero area
router.route('/herobg/new').post(isAuthenticatedUser, authorizedRoles("admin"), createHeroBg)
router.route('/herobg').get(getHeroBg)
router.route('/herobg/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getHeroBgDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updateHeroBg).delete(isAuthenticatedUser,authorizedRoles("supadmin"),deleteHeroBg)

// Feature area
router.route('/feature/new').post(isAuthenticatedUser,authorizedRoles("admin"),createFeatureArea)
router.route('/feature').get(getFeatureArea)
router.route('/feature/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getFeatureDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updateFeatureArea).delete(authorizedRoles("admin"),deleteFeatureArea)

// Pricing area
router.route('/pricing/new').post(isAuthenticatedUser,authorizedRoles("admin"),createPricingArea)
router.route('/pricing').get(getPricingArea)
router.route('/pricing/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getPricingDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updatePricingArea).delete(isAuthenticatedUser, authorizedRoles("supadmin"),deletePricingArea)

module.exports = router