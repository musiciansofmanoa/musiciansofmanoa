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
                    <div className="readable">
                    <Icon inverted color='grey' name='address card outline' circular/>
                      <Header.Content id="naniTF">
                    Create a Profile
                      </Header.Content>
                    <Header.Subheader>Express who you are, and what you can bring to a band.</Header.Subheader>
                    </div>
                  </Header>

                  <div className="ui divider"/>

                  <Image
                      src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                      as='a'
                      size='medium'
                      href='http://google.com'
                      target='_blank'
                  />

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

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                        as='a'
                        size='medium'
                        href='http://google.com'
                        target='_blank'
                    />

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

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                        as='a'
                        size='medium'
                        href='http://google.com'
                        target='_blank'
                    />

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
