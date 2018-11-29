import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    const menuStyle1 = { backgroundColor: '#024731', fontfamily: 'Khula', color: '#FFFFFF' };
    return (
        <footer>
          <div style={menuStyle1}>
            <hr/>
            <Grid container columns={3}>
              <Grid.Column>Main Menu
                <hr/>
                <List>
                  <List.Item>Users</List.Item>
                  <List.Item>Musical Tastes</List.Item>
                  <List.Item>Musical Capabilities</List.Item>
                  <List.Item>Musical Goals</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>Location
                <hr/>
                <List>
                  <List.Item>Department of Information and Computer Sciences</List.Item>
                  <List.Item>University of Hawaii</List.Item>
                  <List.Item>Honolulu, HI 96822</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>Contact
                <hr/>
                <List>
                  <List.Item>808-531-1888</List.Item>
                  <List.Item>cmoore@hawaii.edu</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </div>
        </footer>

    const menuStyle2 = { backgroundColor: '#024731', fontfamily: 'Khula' };
    return (
        <Menu style={menuStyle2} attached="top" borderless inverted>
          <Menu.Item>
            {this.props.currentUser ? (
                [<Menu.Item as={NavLink} activeClassName="active" exact to="/" key='main menu'>Main Menu</Menu.Item>]
            ) : ''}
          </Menu.Item>
          <Menu.Item position="right">
            {this.props.currentUser ? (
                [<Menu.Item as={NavLink} activeClassName="active" exact to="/browse" key='users'>Users</Menu.Item>]
            ) : ''}
          </Menu.Item>
          <Menu.Item position="right">
            <Dropdown text="Location" pointing="top right">
              <Dropdown.Menu>
                <Dropdown.Item text="Department of Information and Computer Sciences
                University of Hawaii
                Honolulu, HI 96822"/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item position="right">
            <Dropdown text="Contact" pointing="top right">
              <Dropdown.Menu>
                <Dropdown.Item text="Phone: 808-531-1888
                Email: cmoore@hawaii.edu"/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
Footer.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(FooterContainer);
