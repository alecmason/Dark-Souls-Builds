const Build = require('../models/build')

module.exports = {
    create: createComment,
    delete: deleteComment
}

function createComment(req,res) {
	Build.findById(req.params.id, function(err, build){
		build.comments.push(req.body);
		build.save(function(err){
			res.redirect(`/builds/${build._id}`)
		})
	})
}

// function deleteComment(req, res) {
//     Build.findById(req.params._id, function(err, build) {
//         build.comments.pull({_id: req.params._id});
//         build.save(function (err) {
//             res.redirect(`/builds/${build._id}`);
//             });
//     })

// }

function deleteComment(req,res){
    Build.findOne({'comments._id': req.params.id}, function(err, build){
        const commentSubdoc = build.comments.id(req.params.id);
        commentSubdoc.remove();
        build.save(function(err){
            res.redirect(`/builds/${build._id}`);
        })
    })
}