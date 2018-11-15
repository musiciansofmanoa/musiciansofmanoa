import React from 'react';
import {Header, Column, Grid} from 'semantic-ui-react';

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
                  <Header as='h1' inverted>Meet Fellow Musicians</Header>

                  <Header as='h3' inverted>Create your own profile and meet other musicians.</Header>

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
                    <Header as='h1' inverted>Plan Jam Sessions</Header>
                    <Header as='h3' inverted>Plan jam sessions and find quick fill-ins for gigs.</Header>

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
                    <Header as='h1' inverted>Leave Reviews</Header>
                    <Header as='h3' inverted>Submit reviews on other profiles.</Header>

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
