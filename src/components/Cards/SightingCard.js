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
import AppModal from '../AppModal';

import deerIcon from '../../assets/images/nounDeerIcon.png';
import branchIcon from '../../assets/images/nounBranchIcon.png';
import mushroomIcon from '../../assets/images/nounMushroomIcon.png';

class SightingCard extends Component {
  render() {
    const { sighting, removeSighting } = this.props;
    const showTypeIcon = () => {
      let icon = '';
      if (sighting.type === 'Fauna') {
        icon = <img className="sighting-icon" alt="Deer by priyanka from the Noun Project" src={deerIcon}/>;
      } else if (sighting.type === 'Flora') {
        icon = <img className="sighting-icon" alt="Branch by tezar tantular from the Noun Project" src={branchIcon}/>;
      } else if (sighting.type === 'Fungi') {
        icon = <img className="sighting-icon" alt="Mushroom by tezar tantular from the Noun Project" src={mushroomIcon}/>;
      }
      return icon;
    };
    return (
      <div>
        <Card className="sighting-card">
          <CardImg
            className="sighting-card-image"
            top
            width="100%"
            src={sighting.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">
              {sighting.name}
            </CardTitle>
            <CardText className="card-location">{sighting.location} · {sighting.biome} · {sighting.type}</CardText>
            <div className="d-flex justify-content-around">
              <Button className="card-button card-button-success">
                <Link
                  to={`/sightings/${sighting.firebaseKey}`}
                  className="card-button-text"
                >
                  <i class="fas fa-eye"></i>
                </Link>
              </Button>
              {showTypeIcon()}
              <AppModal
                color="danger"
                className="delete-modal d-flex"
                title={'Delete Sighting'}
                buttonLabel={<i class="fas fa-times-circle"></i>}
              >
                <p className="delete-text">
                  Are you sure you want to delete this sighting?
                </p>
                <Button
                  className="card-button btn-danger"
                  id={sighting.firebaseKey}
                  onClick={(e) => removeSighting(e)}
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

export default SightingCard;
