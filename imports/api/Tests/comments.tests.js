import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { Comments } from '../Model/comments.js';

if (Meteor.isServer) {
  describe('Comments', () => {
    describe('methods', () => {
      const userId = Random.id();
      let mealId;

      beforeEach(() => {
        Meals.remove({});

        mealId = Meals.insert({
          text: 'Test Meal',
          createdAt: new Date(),
          owner: userId,
          username: 'meteorite',
          comments: [
              new Comments({
                userId,
                comment: 'This place sucked!',
                thread: [],
                likes: 0
              })
          ]
        });
      });

      it('can delete owned meal - will also delete comments thread', () => {
        // Isolate internal method implementation.
        const deleteMeal = Meteor.server.method_handlers['meals.remove'];

        // Set up a fake method call context.
        const invocation = { userId };

        // Run the method with `this` set to the mock context.
        deleteMeal.apply(invocation, [mealId]);

        // Check its behavior.
        assert.equal(Meals.find().count(), 0);
      });
    });
  });
}