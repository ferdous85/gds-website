const router = require('express').Router()
const { createBlog, getAllBlog, getSingleBlogDetail, updateBlogContent, deleteBlog } = require('../controllers/blogController')
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth')


// Course area
router.route('/blog/new').post(isAuthenticatedUser, authorizedRoles("admin"), createBlog)
router.route('/blog').get(getAllBlog)
router.route('/blog/:id').get(isAuthenticatedUser,authorizedRoles("admin"),getSingleBlogDetail).put(isAuthenticatedUser,authorizedRoles("admin"),updateBlogContent).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteBlog)



module.exports = router