import React, { Component } from 'react';
import Loader from '../components/Loader';

import deerIcon from '../assets/images/nounDeerIcon.png';
import branchIcon from '../assets/images/nounBranchIcon.png';
import mushroomIcon from '../assets/images/nounMushroomIcon.png';

class About extends Component {
  state = { loading: true };

  componentDidMount() {
    this.setLoading();
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="d-flex justify-content-center">
            <div className="about-container">
              <h1 className="about-header">About Gnophy</h1>
              <div className="d-flex justify-content-center">
                <p className="about-tagline">
                  Named for the ancient Greek “Gnosis” (personal knowledge) and
                  “Physis” (nature), Gnophy is an app built to encourage kids to
                  learn about the nature around them via experience.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-around info-container">
                  <div className="info-card">
                    <h2 className="about-subheader">Outings</h2>
                    <p className="about-sub-p">
                      Kids can embark on "outings" where they are able to
                      organize their sightings.
                    </p>
                  </div>
                  <div className="info-card">
                    <h2 className="about-subheader">Sightings</h2>
                    <p className="about-sub-p">
                      On each outing a kid can catalogue numerous sightings for
                      the flora, fauna, and fungi that they encounter.
                    </p>
                  </div>
                  <div className="info-card">
                    <h2 className="about-subheader">Leveling</h2>
                    <p className="about-sub-p">
                      For each sighting that is added, a kid is awarded 10
                      experience and for each 100 experience a level is awarded.
                    </p>
                  </div>
                  <div className="info-card">
                    <h2 className="about-subheader">Achievements</h2>
                    <p className="about-sub-p">
                      Throughout the course of adding sightings and gaining
                      experience, new achievements can be unlocked and viewed on
                      the profile page.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="terms-header">Terms</h2>
              <p className="about-sub-p">
                Throughout the application, there are some terms used that a kid
                may be unfamiliar with. As such, we wanted to provide some
                definitions here:
              </p>
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-around terms-container">
                  <div className="term-card">
                    <img
                      className="term-icon"
                      alt="Deer by priyanka from the Noun Project"
                      src={deerIcon}
                    />
                    <h1>Fauna</h1>
                    <p>
                      The animals of a particular region, habitat, or geological
                      period.
                    </p>
                    <p>Example: Deer, Fish, Birds</p>
                  </div>
                  <div className="term-card">
                    <img
                      className="term-icon"
                      alt="Branch by tezar tantular from the Noun Project"
                      src={branchIcon}
                    />
                    <h1>Flora</h1>
                    <p>
                      The plants of a particular region, habitat, or geological
                      period.
                    </p>
                    <p>Example: Trees, Flowers, Vines</p>
                  </div>
                  <div className="term-card">
                    <img
                      className="term-icon"
                      alt="Mushroom by tezar tantular from the Noun Project"
                      src={mushroomIcon}
                    />
                    <h1>Fungi</h1>
                    <p>
                      Any of a group of spore-producing organisms feeding on
                      organic matter.
                    </p>
                    <p>Example: Mushrooms, Molds, Toadstools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default About;
