const router = require('express').Router()
const { createCourse, getAllCourses, getSingleCourseDetail, deleteCourse, updateCourseContent } = require('../controllers/coursePageCtrl')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/course/new').post(isAuthenticatedUser, authorizedRoles("admin"), createCourse)
router.route('/course').get(getAllCourses)
router.route('/course/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getSingleCourseDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updateCourseContent).delete(isAuthenticatedUser,authorizedRoles("supadmin"),deleteCourse)



module.exports = router