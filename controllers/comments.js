const Build = require('../models/build')

module.exports = {
    create: createComment,
    delete: deleteComment,
    edit: editComment
}

function createComment(req, res) {
    Build.findById(req.params.id, function (err, build) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        build.comments.push(req.body);
        build.save(function (err) {
            res.redirect(`/builds/${build._id}`)
        })
    })
}

function deleteComment(req, res) {
    Build.findOne({ 'comments._id': req.params.id }, function (err, build) {
        const commentSubdoc = build.comments.id(req.params.id);
        if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/builds/${build._id}`);
        commentSubdoc.remove();
        build.save(function (err) {
            res.redirect(`/builds/${build._id}`);
        })
    })
}

function editComment(req, res) {
    Build.findOne({ 'comments._id': req.params.id }, function (err, build) {
        const commentSubdoc = build.comments.id(req.params.id);
        if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/builds/${build._id}`);
        commentSubdoc.text = req.body.text;
        build.save(function (err) {
            // Redirect back to the book's show view
            res.redirect(`/builds/${build._id}`);
        });
    });

}
