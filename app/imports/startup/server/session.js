import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Sessions } from '../../api/session/session.js';

/** Initialize the database with a default danta document. */
function addData(data) {
  console.log(`  Adding: ${data.eventName} (${data.user})`);
  Sessions.insert(data);
}

/** Initialize the collection if empty. */
if (Sessions.find().count() === 0) {
  if (Meteor.settings.jamSessions) {
    console.log('Creating Jam Sessions.');
    Meteor.settings.jamSessions.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Sessions', function publish() {
  return Sessions.find({});
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('SessionsAdmin', function publish() {
  return Sessions.find({});
});
