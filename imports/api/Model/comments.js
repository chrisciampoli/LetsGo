import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Comments = new Mongo.Collection('comments');

Meteor.methods({
  'comments.insert'(obj) {
    check(obj, Object);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    Comments.insert(obj);
  },

  'comments.remove'(mealId) {
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
