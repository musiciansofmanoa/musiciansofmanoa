import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Sessions } from '../../api/session/session';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class EventsAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    /* eslint-disable-next-line */
    if (confirm('Click OK to confirm the delete'))  {
      Sessions.remove(this.props.session._id, this.deleteCallback);
    }
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  render() {
    return (
    <Table.Row>
          <Table.Cell>{this.props.session.timeStart}</Table.Cell>
          <Table.Cell>{this.props.session.timeEnd}</Table.Cell>
          <Table.Cell>{this.props.session.purpose}</Table.Cell>
          <Table.Cell>{this.props.session.location}</Table.Cell>
          <Table.Cell>{this.props.session.date}</Table.Cell>
          <Table.Cell>{this.props.session.user}</Table.Cell>
      <Table.Cell> <Button basic onClick={this.onClick}>Decline</Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
EventsAdmin.propTypes = {
  session: PropTypes.object.isRequired,
};

export default withRouter(EventsAdmin);
