// POST to Add Task Service //
router.post('/addtask', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var taskName = req.body.taskname;
    var taskDesc = req.body.taskdesc;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "task" : userName,
        "desc" : userEmail,
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("tasklist");
        }
    });
});
