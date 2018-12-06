import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown, Rating, Container, Header, Loader, Card, Icon, Image } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  formatInstruments(strs) {
    return strs.map(text =>
      text.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')).join(', ');
  }

  constructor(props) {
    super(props);
    this.state = { instrumentFilter: [], tasteFilter: [] };
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  filterProfiles(profiles) {
    return profiles.filter(p =>
         (this.state.instrumentFilter.length === 0 || _.intersection(this.state.instrumentFilter, p.instruments).length !== 0)
      && (this.state.tasteFilter.length === 0 || _.intersection(this.state.tasteFilter, p.taste).length !== 0)
    );
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    // TODO: accumulate options from Profiles
    const instrumentOptions = [
      {key: 'guitar', value: 'guitar', text: "Guitar"},
      {key: 'trumpet', value: 'trumpet', text: "Trumpet"},
      {key: 'piano', value: 'piano', text: "Piano"},
      {key: 'recorder', value: 'recorder', text: "Recorder"},
      {key: 'clarinet', value: 'clarinet', text: "Clarinet"},
    ];

    const tasteOptions = [
      {key: 'rock', value: 'rock', text: "Rock"},
      {key: 'rap', value: 'rap', text: "Rap"},
      {key: 'metal', value: 'metal', text: "Metal"},
      {key: 'r&b', value: 'r&b', text: "R&B"},
      {key: 'k-pop', value: 'k-pop', text: "KPop"},
      {key: 'j-pop', value: 'j-pop', text: "JPop"},
      {key: 'classical', value: 'classical', text: "Classical"},
    ];

    return (
        <Container>
          <Header as="h2" textAlign="center">Manoa Musicians</Header>
          <Dropdown style={{marginBottom: 16 }} placeholder='Filter by Instrument' fluid multiple search selection options={instrumentOptions}
            onChange={(e, d) => this.setState({ instrumentFilter: d.value })}
          />
          <Dropdown style={{marginBottom: 16 }} placeholder='Filter by Taste' fluid multiple search selection options={tasteOptions}
            onChange={(e, d) => this.setState({ tasteFilter: d.value })}
          />
          <Card.Group centered>
            {this.filterProfiles(this.props.profiles).map((profile, index) =>
              <Card>
                <Image size='medium' src={profile.imageUrl || "https://randomuser.me/api/portraits/men/" + (index+27) + ".jpg"} />
                <Card.Content>
                  <Card.Header>{this.formatInstruments(profile.instruments)}</Card.Header>
                  <Card.Meta>
                    {profile.name}
                  </Card.Meta>
                  <Card.Description>
                    Likes {this.formatInstruments(profile.taste)}, wants to {profile.goals}.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='calendar' /> {profile.sessionsAttended} attended
                    <Rating style={{float: "right"}} icon='star' defaultRating={profile.rating} maxRating={5} />
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
