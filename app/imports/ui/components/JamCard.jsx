import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Sessions } from '../../api/session/session'

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class JamCard extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.jam.eventName}</Card.Header>
            <Card.Meta>{this.props.jam.location}</Card.Meta>
            <Card.Description>
              <Icon name='music'/>
              Why: {this.props.jam.purpose}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='calendar'/>
            When: {this.props.jam.date}
          </Card.Content>
          <Card.Content extra>
            <Icon name='clock'/>
            What time: {this.props.jam.timeStart} -
            {this.props.jam.timeEnd}
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user'/>
              {this.props.jam.user} : {this.props.jam.email}
            </a>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
JamCard.propTypes = {
  jam: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(JamCard);
