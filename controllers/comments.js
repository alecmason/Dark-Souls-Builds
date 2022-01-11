const Build = require('../models/build')

module.exports = {
    create: createComment,
    // delete: deleteComment
}

function createComment(req,res) {
    console.log(req.params.id, " req.params.id")
	console.log(req.body, " req.body aka the contents of the form")

	// Trying to add a review to a Movie
	// To find the movie first!
	Build.findById(req.params.id, function(err, build){

		// Then we need to add the review to the movie.reviews array
		build.comments.push(req.body);
		// The above is mutating a document
		// The Database (mongodb) doesn't know we mutated
		// the document
		console.log(build, " <- this is build(doc), ")
		// So have to .save() the document in order to update mongodb
		build.save(function(err){
			// redirect the user back to the show page

			res.redirect(`/builds/${build._id}`)
		})
	
	})
}
// function deleteComment(req,res){}