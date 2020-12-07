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

class OutingCard extends Component {
  render() {
    const { outing, removeOuting } = this.props;
    return (
      <div>
        <Card className="outing-card">
          <CardImg
            top
            width="100%"
            src={outing.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">
              {outing.name}
            </CardTitle>
            <CardText className="card-location">{outing.location}</CardText>
            <CardText className="card-biome">{outing.biome}</CardText>
            <div className="d-flex justify-content-around">
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
                className="delete-modal d-flex"
                title={'Delete Outing'}
                buttonLabel={<i class="fas fa-times-circle"></i>}
              >
                <p>
                  Are you sure you want to delete this outing and all of its
                  sightings?
                </p>
                <Button
                  className="card-button card-button-danger"
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
