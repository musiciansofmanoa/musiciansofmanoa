import React from 'react';
import { Table, Button, Input, Dropdown, Rating, Icon } from 'semantic-ui-react';
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
    const tasteOptions = [
      {key: "rock", value: "rock", text: "Rock"},
      {key: "metal", value: "metal", text: "Metal"},
      {key: "rap", value: "rap", text: "Rap"},
      {key: "edm", value: "edm", text: "EDM"},
      {key: "classical", value: "classical", text: "Classical"},
      {key: "k-pop", value: "K-pop", text: "K-Pop"}
    ];

    const skillOptions = [
      {key: "new", value: "new", text: "new"},
      {key: "amatuer", value: "amateur", text: "amateur"},
      {key: "experienced", value: "experienced", text: "experienced"},
      {key: "professional", value: "professional", text: "professional"},
    ];

    const instrumentOptions = [
      {key: "guitar", value: "guitar", text: "Guitar"},
      {key: "trumpet", value: "trumpet", text: "trumpet"},
      {key: "clarinet", value: "clarinet", text: "clarinet"},
      {key: "recorder", value: "recorder", text: "recorder"},
    ];

    const playedWithOptions = _.chain(this.props.profiles)
      .filter(p => p._id !== this.props.profile._id)
      .map(p => ({key: p._id, value: p.name, text: p.name}))
      .value();

    console.log(playedWithOptions);

    return (
    <Table.Row>
          <Table.Cell><Input defaultValue={this.props.profile.email} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {email: d.value}})}/></Table.Cell>
          <Table.Cell><Input defaultValue={this.props.profile.name} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {name: d.value}})}/></Table.Cell>
          <Table.Cell><Dropdown defaultValue={this.props.profile.taste} fluid search selection multiple options={tasteOptions} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {taste: d.value}})}/></Table.Cell>
          <Table.Cell><Rating icon='star' maxRating={5} defaultRating={this.props.profile.rating} onRate={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {rating: d.rating}})}/></Table.Cell>
          <Table.Cell>
            <Input value={this.props.profile.sessionsAttended}></Input>
            <Button.Group icon>
              <Button onClick={() => Profiles.update({_id: this.props.profile._id}, {$inc: {sessionsAttended: 1}})}><Icon name='plus' /></Button>
              <Button onClick={() => Profiles.update({_id: this.props.profile._id}, {$inc: {sessionsAttended: -1}})}><Icon name='minus' /></Button>
            </Button.Group>
          </Table.Cell>
          <Table.Cell><Dropdown defaultValue={this.props.profile.skill} fluid search selection options={skillOptions} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {skill: d.value}})}/></Table.Cell>
          <Table.Cell><Dropdown defaultValue={this.props.profile.instruments} fluid search selection multiple options={instrumentOptions} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {instruments: d.value}})}/></Table.Cell>
          <Table.Cell><Dropdown defaultValue={this.props.profile.playedWith} fluid search selection multiple options={playedWithOptions} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {playedWith: d.value}})}/></Table.Cell>
          <Table.Cell><Input defaultValue={this.props.profile.goals} onChange={(e, d) => Profiles.update({_id: this.props.profile._id}, {$set: {goals: d.value}})}/></Table.Cell>
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
