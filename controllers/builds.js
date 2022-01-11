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
        // if key in b = 'on' then change to true
        if (b[key] === 'on') {
            b[key] = true;
        }
    }
    // make const build out of b not req.body
    const build = new Build(b);
    build.user = req.user._id;

    build.save();
    // if (err) return render('builds/new');
    // res.redirect(`/builds/${build._id}`); // <- send to the details page of the newly created build
    console.log(build, '<-- build')

    res.redirect(`/builds`) // <- for now, send to list of all builds
}

function show(req, res) {
    Build.findById(req.params.id, function (err, build) {
        res.render(('builds/show'), {
            title: 'Build Details',
            build
        })
    })
}