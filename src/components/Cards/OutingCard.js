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

class OutingCard extends Component {
  render() {
    const { outing, removeOuting } = this.props;
    return (
      <div>
        <Card className='outing-card'>
          <CardImg
            top
            width='100%'
            src={outing.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">{outing.name}</CardTitle>
            <CardText className="card-location">
                {outing.location}
            </CardText>
            <CardText className="card-biome">
                {outing.biome}
            </CardText>
            <Button className="card-button-success">
              <Link to={`/outings/${outing.firebaseKey}`} className="card-button-text">View Sightings</Link>
            </Button>
            <Button className="card-button-danger" id={outing.firebaseKey} onClick={(e) => removeOuting(e)}>Delete</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default OutingCard;
