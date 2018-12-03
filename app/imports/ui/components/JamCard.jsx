import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class JamCard extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>{this.props.jams.eventName}</Card.Header>
            <Card.Meta>{this.props.jams.user} {this.props.jams.email}</Card.Meta>
            <Card.Description>
              {this.props.jams.purpose}
              {this.props.jams.date}
              {this.props.jams.timeStart}
              {this.props.jams.timeEnd}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
JamCard.propTypes = {
  jams: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(JamCard);
