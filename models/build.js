const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema ({
    armorWeight, weaponWeight: {
        type: String,
        enum: ['light', 'medium', 'heavy']
    }
})

const commentSchema = new mongoose.Schema ({
    text: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
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