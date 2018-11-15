import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown, Rating, Container, Header, Loader, Card, Icon, Image } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const instrumentOptions = [
      {key: 'guitar', value: 'Guitar', text: "Guitar"},
      {key: 'trumpet', value: 'Trumpet', text: "Trumpet"},
      {key: 'piano', value: 'Piano', text: "Piano"},
      {key: 'recorder', value: 'Recorder', text: "Recorder"},
    ];

    const tasteOptions = [
      {key: 'guitar', value: 'Rock', text: "Rock"},
      {key: 'trumpet', value: 'Rap', text: "Rap"},
      {key: 'piano', value: 'Metal', text: "Metal"},
      {key: 'recorder', value: 'R&B', text: "R&B"},
      {key: 'recorder', value: 'KPop', text: "KPop"},
      {key: 'recorder', value: 'JPop', text: "JPop"},
    ];

    return (
        <Container>
          <Header as="h2" textAlign="center">Manoa Musicians</Header>
          <Dropdown style={{marginBottom: 16 }} placeholder='Filter by Instrument' fluid multiple search selection options={instrumentOptions} />
          <Dropdown style={{marginBottom: 16 }} placeholder='Filter by Taste' fluid multiple search selection options={tasteOptions} />
          <Card.Group centered>
            {this.props.profiles.map((profile, index) =>
              <Card>
                <Image size='medium' src={"https://randomuser.me/api/portraits/men/" + (index+27) + ".jpg"} />
                <Card.Content>
                  <Card.Header>{profile.instruments}</Card.Header>
                  <Card.Meta>
                    {profile.name}
                  </Card.Meta>
                  <Card.Description>
                    Likes {profile.taste}, wants to {profile.goals}.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='calendar' /> {profile.sessionsAttended} attended
                    <Rating style={{float: "right"}} icon='star' defaultRating={profile.rating/2} maxRating={5} />
                  </a>
                </Card.Content>
              </Card>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Browse.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profile');
  return {
    profiles: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Browse);
