import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Button, List } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import ProfileComponent from '/imports/ui/components/ProfileComponent';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  profiles = [{
    firstName: 'Admin John', lastName: 'Doe', email: 'admin@foo.com',
    image: 'https://cdn.images.dailystar.co.uk/dynamic/140/photos/641000/The-Rock-throwback-recreation-952641.jpg',
    description: 'Likes Classic Rock, Country, and Funk',
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
          <Card.Group>
            <Card>
            {this.profiles.map((profile, index) => <ProfileComponent key={profile + index} profile={profile} />)}
            <Card.Content extra>
              <Button>Edit</Button>
            </Card.Content>
            </Card>
          </Card.Group>
          <List>
            <List.Item>
              <List.Header>Quick Bio</List.Header>
              <List.Description>Aloha! My name is John Doe and I live in the Manoa Area. I enjoy Classic Rock the most.
                I've played with many bands and love to hold quick, laid back, jam sessions.  I grew up mostly playing
                guitar and singing.  I love to experiment with new music and try new instruments all the time.
                Feel free to reach out.
              </List.Description>
              <List.Header>Experience</List.Header>
              <List.Description>
                <List bulleted>
                  <List.Item>Played on Ellen</List.Item>
                  <List.Item>Opened for Eric Church</List.Item>
                  <List.Item>Played in 5 succesfull bands</List.Item>
                  <List.Item>Played multiple charity events during my career</List.Item>
                </List>
              </List.Description>
              <List.Header>Skills</List.Header>
              <List.Description>
                <List bulleted>
                  <List.Item>Spanish Guitar</List.Item>
                  <List.Item>Acoustic and Electric Guitar</List.Item>
                  <List.Item>Sing</List.Item>
                  <List.Item>Piano</List.Item>
                  <List.Item>Saxaphone</List.Item>
                  <List.Item>Bass</List.Item>
                  <List.Item>Bag Pipes</List.Item>
                </List>
              </List.Description>
            </List.Item>
          </List>
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
