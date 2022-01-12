const Build = require('../models/build');

module.exports = {
    index,
    new: newBuild,
    create,
    show,
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

    let b = req.body;
    for (let key in b) {
        if (b[key] === 'on') {
            b[key] = true;
        }
    }

    const build = new Build(b);
    build.userId = req.user._id;

    build.save();
    res.redirect(`/builds`) 
}

function show(req, res) {
    Build.findById(req.params.id, function (err, build) {
        res.render(('builds/show'), {
            title: 'Build Details',
            build
        })
    })
}