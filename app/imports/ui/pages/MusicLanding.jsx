import React from 'react';
import {Icon, Header, Segment, Grid, Image} from 'semantic-ui-react';

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
                    <div className="readable">
                    <Icon inverted color='grey' name='address card outline' circular/>
                      <Header.Content>
                    Create a Profile
                      </Header.Content>
                    <Header.Subheader id="naniTF">Express who you are, and what you can bring to a band.</Header.Subheader>
                    </div>
                  </Header>

                  <div className="ui divider"/>

                  <Segment id="seg">
                    <Image src="/images/tempsnip.png" id="borders" size='medium' centered />
                    <br></br>
                    <p>
                      Create a profile and join the community of musicians around the University of Hawaii at Manoa. By creating a profile, you gain recognition as you search for a band.
                    </p>
                    <p>
                      After creating a profile, you may login and plan "Jam Sessions" with other users!
                    </p>
                  </Segment>

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
                      <div className="readable">
                      <Icon inverted color='grey' name='users' circular/>
                        <Header.Content>
                      Make Connections
                        </Header.Content>
                      <Header.Subheader id="naniTF">Network with other users to create or play amazing music.</Header.Subheader>
                      </div>
                    </Header>

                    <div className="ui divider"/>

                    <Segment id="seg">
                      <Image src="/images/band.jpg" id="borders" size='medium' centered />
                      <br></br>
                      <p>
                        Using your profile you can connect with other musically talented individuals. This can be a great way to feed your musical passion with like minded individuals.
                      </p>
                      <p>
                        Meet others who also attend your school, and create a band while making life long friends.
                      </p>
                    </Segment>

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
                      <div className="readable">
                      <Icon size='huge' inverted color='grey' name='pen square' circular/>
                        <Header.Content>
                      Leave a Review
                        </Header.Content>
                      <Header.Subheader id="naniTF">
                        Let us know how your experience went!
                      </Header.Subheader>
                      </div>
                    </Header>

                    <div className="ui divider"/>

                    <Segment id="seg">
                      <Image src="/images/uh.png" id="borders" size='medium' centered />
                      <p>
                        Without your reviews, we cannot improve your experience. By leaving a review, we can immediately fix problems before they bug you for eternity. Constructive criticism is wanted.
                      </p>
                      <p>
                        Let us know if you met someone who makes you feel uncomfortable. Your safety is a major concern and we would like to address issues like these as quick as possible.
                      </p>
                    </Segment>

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
