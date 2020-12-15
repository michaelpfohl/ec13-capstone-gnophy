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
        typeIcons.push(<button>Fauna</button>);
      }
      if (sightings.filter((sighting) => sighting.type === 'Flora').length) {
        typeIcons.push(<button>Flora</button>);
      }
      if (sightings.filter((sighting) => sighting.type === 'Fungi').length) {
        typeIcons.push(<button>Fungi</button>);
      }
      return typeIcons;
    };

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
            {showTypeIcons()}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default OutingCard;
