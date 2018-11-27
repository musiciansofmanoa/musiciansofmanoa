import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
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
                <Table.HeaderCell>Taste</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Sessions Attended</Table.HeaderCell>
                <Table.HeaderCell>Skill</Table.HeaderCell>
                <Table.HeaderCell>Instruments</Table.HeaderCell>
                <Table.HeaderCell>Played With</Table.HeaderCell>
                <Table.HeaderCell>Goals</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.profiles.map((profile) => <ProfileItemAdmin key={profile._id} profile={profile} />)}
            </Table.Body>
          </Table>

          <Header as="h2" textAlign="center">Requested Events</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Time Start</Table.HeaderCell>
                <Table.HeaderCell>Time End</Table.HeaderCell>
                <Table.HeaderCell>Purpose</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Who Requested</Table.HeaderCell>
                <Table.HeaderCell>Approve</Table.HeaderCell>
                <Table.HeaderCell>Decline</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              a
            </Table.Body>
          </Table>
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
  const subscription = Meteor.subscribe('ProfilesAdmin');
  return {
    profiles: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfileAdmin);
