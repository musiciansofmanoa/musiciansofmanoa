import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Profiles = new Mongo.Collection('Profiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ProfileSchema = new SimpleSchema({
  email: String,
  name: String,
  taste: Array,
  'taste.$': String,
  rating: Number,
  sessionsAttended: Number,
  skill: String,
  instruments: Array,
  'instruments.$': String,
  playedWith: Array,
  'playedWith.$': String,
  goals: String,
  imageUrl: { type: String, optional: true }
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfileSchema };
