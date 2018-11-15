import React from 'react';
import {Icon, Header, Column, Grid, Image} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class MusicLanding extends React.Component {
  render() {
    return (
        <div>
          <div className="parallax-one">
            <div className="cent-text-one">
              <div className="border-one">
              <Grid container stackable centered columns={3}>

                <Grid.Column textAlign='center'>
                  <Header as='h1' icon>
                    <Icon inverted color='grey' name='address card outline' circular/>
                  </Header>
                  <Header as='h2' inverted>Create a Profile</Header>

                </Grid.Column>
              </Grid>
              </div>
            </div>
          </div>


          <div className="parallax-two">
            <div className="cent-text-two">
              <div className="border-two">
                <Grid container stackable centered columns={3}>

                  <Grid.Column textAlign='center'>
                    <br></br>
                    <br></br>
                    <Header as='h1' icon>
                      <Icon inverted color='grey' name='users' circular/>
                    </Header>
                    <Header as='h2' inverted>Connect with Other Musicians</Header>

                  </Grid.Column>
                </Grid>
              </div>
            </div>
          </div>


          <div className="parallax-three">
            <div className="cent-text-three">
              <div className="border-three">
                <Grid container stackable centered columns={3}>

                  <Grid.Column textAlign='center'>
                    <br></br>
                    <br></br>

                    <Header as='h1' icon>
                      <Icon size='huge' inverted color='grey' name='pen square' circular/>
                    </Header>
                    <Header as='h2' inverted>Leave a Review</Header>

                  </Grid.Column>
                </Grid>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default MusicLanding;
