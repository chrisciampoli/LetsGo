import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import {MealsCollection} from "../Model/MealsCollection";

Meteor.publish('meals', function publishMeals() {
    return MealsCollection.find();
});