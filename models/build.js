const mongoose = require('mongoose');

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
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String,
    userName: String
})

const buildSchema = new mongoose.Schema ({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    buildName: String,
    role: {
        type: String,
        enum: ['tank', 'spell caster', 'ranged']
    },
    melee: Boolean,
    spellCaster: Boolean,
    ranged: Boolean,
    gear: [gearSchema],
    definition: String,
    comments: [commentSchema]
})

module.exports = mongoose.model('Build', buildSchema)