import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Button } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import ProfileItemAdmin from '/imports/ui/components/ProfileItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProfileAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Profile (Admin)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Taste</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Sessions Attended</Table.HeaderCell>
                <Table.HeaderCell>Skill</Table.HeaderCell>
                <Table.HeaderCell>Instruments</Table.HeaderCell>
                <Table.HeaderCell>Played With</Table.HeaderCell>
                <Table.HeaderCell>Goals</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.profiles.map((profile, index) =>
                <ProfileItemAdmin key={index} profile={profile} profiles={this.props.profiles} />)}
            </Table.Body>
          </Table>
          <Button onClick={
            () => Profiles.insert({
              email: "new@foo.com", name: "new", skill: "new", instruments: [], goals: "new", playedWith: [], sessionsAttended: 0, rating: 0, taste: []
            })
          }>Create Profile</Button>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListProfileAdmin.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profile');
  return {
    profiles: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfileAdmin);
