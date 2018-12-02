import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    const menuStyle = { backgroundColor: '#024731', fontfamily: 'Khula', color: '#FFFFFF' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
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
