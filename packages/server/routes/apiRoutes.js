const router = require('express').Router();
const postRoutes = require('./postRoutes')
const authRoutes = require('./authRoutes')

router.use('/post', postRoutes)

router.use('/admin', authRoutes);

module.exports = router;
