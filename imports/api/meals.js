import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Meals = new Mongo.Collection('meals');

Meteor.methods({
  'meals.insert'(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    Meals.insert({
      text,
      createdAt: new Date,
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    })
  },

  'meals.remove'(mealId) {
    check(mealId, String);

    const meal = Meals.findOne(mealId);

    if (!this.userId || meal.owner !== this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    Meals.remove(mealId);
  },

  'meals.setChecked'(mealId, isChecked) {
    check(mealId, String);
    check(isChecked, Boolean);

    const meal = Meals.findOne(mealId);

    if (meal.isPrivate && meal.owner !== this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    Meals.update(mealId, {
      $set: {
        isChecked
      }
    });
  },

  'meals.setPrivate'(mealId, isPrivate) {
    check(mealId, String);
    check(isPrivate, Boolean);

    const meal = Meals.findOne(mealId);

    if (!this.userId || meal.owner !== this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    Meals.update(mealId, {
      $set: {
        isPrivate
      }
    })
  }
});

if (Meteor.isServer) {
  Meteor.publish('meals', function() {
    return Meals.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId }
      ]
    });
  })
}
