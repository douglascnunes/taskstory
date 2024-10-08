const Sequelize = require('sequelize');
const sequelize = require('../../util/db');

const Activity = require('../activity/activity.js');
const Importance = require('../activity/importance');
const Difficulty = require('../activity/difficulty');

const Challenge = require('./challenge');
const GoalInstance = require('./goalInstance.js');


const Goal = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  finalDate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  frequenceIntervalDays: {
    type: Sequelize.STRING,
    allowNull: true
  },
  frequenceWeeklyDays: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
});


Activity.hasOne(Goal, {onDelete: 'CASCADE'});
Goal.belongsTo(Activity, {allowNull: false});

Goal.belongsTo(Importance, {allowNull: false });
Importance.hasMany(Goal);

Goal.belongsTo(Difficulty, {allowNull: false });
Difficulty.hasMany(Goal);

Goal.hasMany(Challenge, {onDelete: 'CASCADE'});
Challenge.belongsTo(Goal, {allowNull: false});

Goal.hasMany(GoalInstance, {allowNull: false, onDelete: 'CASCADE'});
GoalInstance.belongsTo(Goal, {allowNull: false});


module.exports = Goal;