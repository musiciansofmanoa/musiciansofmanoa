import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Profiles } from '../../api/profile/profile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.email})`);
  Profiles.insert(data);
}

/** Initialize the collection if empty. */
if (Profiles.find().count() === 0) {
  if (Meteor.settings.userProfiles) {
    console.log('Creating default data.');
    Meteor.settings.userProfiles.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Profile', function publish() {
  return Profiles.find({});
});
