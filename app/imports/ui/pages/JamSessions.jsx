import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, card } from 'semantic-ui-react';
import { Sessions } from '/imports/api/session/session';
import JamCard from '/imports/ui/components/JamCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class JamSessions extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Jam Sessions</Header>
          <Card.Group>
            {this.props.jams.map((jam, index) => <JamCard key={index}
                        jam={jam}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
JamSessions.propTypes = {
  jams: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Sessions');
  return {
    jams: Sessions.find({}).fetch(),
    ready: subscription.ready(),
  };
})(JamSessions);
