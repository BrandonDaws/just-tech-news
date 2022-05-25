const router = require('express').Router();
//imports the api folder that will contain all the routes
const apiRoutes = require('./api');
// sets endpoint for all the the files that will be inside of the api folder
router.use('/api', apiRoutes);
//throws error message if not valid endpoint is entered
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;

