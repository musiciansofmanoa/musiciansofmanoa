import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ProfileItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.profile.email}</Table.Cell>
          <Table.Cell>{this.props.profile.name}</Table.Cell>
          <Table.Cell>{this.props.profile.taste}</Table.Cell>
          <Table.Cell>{this.props.profile.rating}</Table.Cell>
          <Table.Cell>{this.props.profile.sessionsAttended}</Table.Cell>
          <Table.Cell>{this.props.profile.skill}</Table.Cell>
          <Table.Cell>{this.props.profile.instruments}</Table.Cell>
          <Table.Cell>{this.props.profile.playedWith}</Table.Cell>
          <Table.Cell>{this.props.profile.goals}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileItemAdmin.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItemAdmin;
