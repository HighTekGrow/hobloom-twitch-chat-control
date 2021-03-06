var Monster = require('./Monster');
var util = require('util');

function ShockGoblin(multiplier) {
    Monster.apply(this, arguments);
    this.name = "Shock Goblin";
    this.max_hp = 40 * multiplier;
    this.hp = this.max_hp;
    this.xp = 175;
    this.min_damage = 70;
    this.max_damage = 120;
}

util.inherits(ShockGoblin, Monster);

module.exports = ShockGoblin;