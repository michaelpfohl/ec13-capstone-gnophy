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

class SightingCard extends Component {
  render() {
    const { sighting, removeSighting } = this.props;
    return (
      <div>
        <Card className="sighting-card">
          <CardImg
            top
            width="100%"
            src={sighting.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">
              {sighting.name}
            </CardTitle>
            <CardText className="card-location">{sighting.location}</CardText>
            <CardText className="card-biome">{sighting.biome}</CardText>
            <CardText className="card-type">{sighting.type}</CardText>
            <div className="d-flex justify-content-around">
              <Button className="card-button card-button-success">
                <Link
                  to={`/sightings/${sighting.firebaseKey}`}
                  className="card-button-text"
                >
                  <i class="fas fa-eye"></i>
                </Link>
              </Button>
              <AppModal
                className="delete-modal d-flex"
                title={'Delete Sighting'}
                buttonLabel={<i class="fas fa-times-circle"></i>}
              >
                <p>
                  Are you sure you want to delete this sighting?
                </p>
                <Button
                  className="card-button card-button-danger"
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
