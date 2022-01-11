const Build = require('../models/build');

module.exports = {
    index,
    new: newBuild,
    create,
    show,
    // delete: deleteComment
}

function index(req, res, next) {
    Build.find({}, function (err, builds) {
        res.render('builds/', {
            title: 'Builds',
            builds
        })
    })
}

function newBuild(req, res) {
    res.render('builds/new', {
        title: 'New Build'
    })
}

function create(req, res) {
    console.log(req.body, '<-- req.body')

    // let b = req.body;
    // for (let key in b) {
    //     b.melee
    // }

    const build = new Build(req.body);
    build.user = req.user._id;
    build.save(function (err) {
        // if (err) return render('builds/new');
        console.log(build, '<-- build')

        res.redirect(`/builds`) // <- for now, send to list of all builds
        // res.redirect(`/builds/${build._id}`); // <- send to the details page of the newly created build
    })
}

function show(req,res){
	Build.findById(req.params.id, function(err, build) {
        res.render(('builds/show'), {
            title: 'Build Details', 
            build
        })
    })
}