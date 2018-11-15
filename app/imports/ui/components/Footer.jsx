import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { backgroundColor: '#024731', fontfamily: 'Khula', color: '#FFFFFF' };
    return (
        <footer>
          <div style={menuStyle}>
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
    );
  }
}

export default Footer;
