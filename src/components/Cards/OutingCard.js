import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import sightingsData from '../../helpers/data/sightingsData';
import AppModal from '../AppModal';

import deerIcon from '../../assets/images/nounDeerIcon.png';
import branchIcon from '../../assets/images/nounBranchIcon.png';
import mushroomIcon from '../../assets/images/nounMushroomIcon.png';

class OutingCard extends Component {
  state = {
    sightings: [],
  }

  componentDidMount() {
    const { outing } = this.props;
    sightingsData.getOutingSightings(outing.firebaseKey).then((response) => {
      this.setState({ sightings: response });
    });
  }

  render() {
    const { outing, removeOuting } = this.props;
    const { sightings } = this.state;
    const showTypeIcons = () => {
      const typeIcons = [];
      if (sightings.filter((sighting) => sighting.type === 'Fauna').length) {
        typeIcons.push(<img className="type-icon" alt="Deer by priyanka from the Noun Project" src={deerIcon}/>);
      }
      if (sightings.filter((sighting) => sighting.type === 'Flora').length) {
        typeIcons.push(<img className="type-icon" alt="Branch by tezar tantular from the Noun Project" src={branchIcon}/>);
      }
      if (sightings.filter((sighting) => sighting.type === 'Fungi').length) {
        typeIcons.push(<img className="type-icon" alt="Mushroom by tezar tantular from the Noun Project" src={mushroomIcon}/>);
      }
      return typeIcons;
    };

    return (
      <div>
        <Card className="outing-card">
          <div className="outing-image-container">
            <div className="icon-container">
              {showTypeIcons()}
            </div>
            <CardImg
              className="outing-image"
              top
              width="100%"
              src={outing.imageUrl}
              alt="Card image cap"
            />
          </div>
          <CardBody>
            <CardTitle tag="h5" className="card-title">
              {outing.name}
            </CardTitle>
            <CardText className="card-location">{outing.location} · {outing.biome}</CardText>
            <div className="d-flex justify-content-around outing-button-container">
              <Button className="card-button card-button-success">
                <Link
                  to={`/outings/${outing.firebaseKey}`}
                  className="card-button-text"
                >
                  <i class="fas fa-eye"></i>
                </Link>
              </Button>
              <AppModal
                color='danger'
                className="d-flex"
                title={'Delete Outing'}
                buttonLabel={<i class="fas fa-times-circle card-button-text"></i>}
              >
                <p className="delete-text">
                  Are you sure you want to delete this outing and all of its
                  sightings?
                </p>
                <Button
                  className="card-button btn-danger"
                  id={outing.firebaseKey}
                  onClick={(e) => removeOuting(e)}
                >
                  Yes, Delete
                </Button>
              </AppModal>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default OutingCard;
