import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import ProfileComponent from '/imports/ui/components/ProfileComponent';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  profiles = [{
    firstName: 'Admin John', lastName: 'Doe', email: 'admin@foo.com',
    image: 'https://cdn.images.dailystar.co.uk/dynamic/140/photos/641000/The-Rock-throwback-recreation-952641.jpg',
    description: 'Aloha! My name is John Doe and I am a musician living in Manoa. I play guitar and sing!',
  },
  ];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">My Profile</Header>
          <Card.Group centered>
            {this.profiles.map((profile, index) => <ProfileComponent key={profile + index} profile={profile} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
  stuff: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuff: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profile);
