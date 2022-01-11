const mongoose = require('mongoose');
const validator = require('validator');

const gearSchema = new mongoose.Schema ({
    armorWeight: {
        type: String,
        enum: ['light', 'medium', 'heavy']
    },
    weaponWeight: {
        type: String,
        enum: ['light', 'medium', 'heavy']
    }
})

const commentSchema = new mongoose.Schema ({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    userName: String
})

const buildSchema = new mongoose.Schema ({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    buildName: String,
    role: {
        type: String,
        enum: ['tank', 'spell caster', 'ranged']
    },
    melee: {
        type: Boolean,
        default: false,
    },
    spellCaster: {
        type: Boolean,
        default: false,
    },
    ranged: {
        type: Boolean,
        default: false

    },
    gear: gearSchema,
    definition: String,
    comments: [commentSchema]
})

module.exports = mongoose.model('Build', buildSchema)