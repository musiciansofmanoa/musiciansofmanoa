import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Profiles } from '../../api/profile/profile';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ProfileItemAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    /* eslint-disable-next-line */
    if (confirm('Click OK to confirm the delete'))  {
      Profiles.remove(this.props.profile._id, this.deleteCallback);
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
          <Table.Cell>{this.props.profile.email}</Table.Cell>
          <Table.Cell>{this.props.profile.name}</Table.Cell>
          <Table.Cell>{this.props.profile.taste.join(', ')}</Table.Cell>
          <Table.Cell>{this.props.profile.rating}</Table.Cell>
          <Table.Cell>{this.props.profile.sessionsAttended}</Table.Cell>
          <Table.Cell>{this.props.profile.skill}</Table.Cell>
          <Table.Cell>{this.props.profile.instruments.join(', ')}</Table.Cell>
          <Table.Cell>{this.props.profile.playedWith}</Table.Cell>
          <Table.Cell>{this.props.profile.goals}</Table.Cell>
      <Table.Cell> <Button basic onClick={this.onClick}>Delete</Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileItemAdmin.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default withRouter(ProfileItemAdmin);
