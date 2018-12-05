import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Sessions = new Mongo.Collection('Sessions');

/** Create a schema to constrain the structure of documents associated with this collection. */
const SessionSchema = new SimpleSchema({
  eventName: String,
  location: String,
  user: String,
  email: String,
  date: String,
  timeStart: String,
  timeEnd: String,
  purpose: {
    type: String,
    allowedValues: ['Practice', 'Just Jam', 'Performance'],
    defaultValue: 'Practice',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Sessions.attachSchema(SessionSchema);

/** Make the collection and schema available to other code. */
export { Sessions, SessionSchema };
