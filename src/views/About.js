import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
      <div className="about-container">
        <h1 className="about-header">About Gnophy</h1>
        <p className="about-tagline">Named for the ancient Greek “Gnosis” (personal knowledge) and “Physis” (nature), Gnophy is an app built to encourage kids to learn about the nature around them via experience.</p>
        <h2 className="about-subheader">Outings</h2>
        <p className="about-sub-p">Kids can embark on "outings" where they are able to organize their sightings according to the date, location, and biome and assign an image to the outing.</p>
        <h2 className="about-subheader">Sightings</h2>
        <p className="about-sub-p">On each outing a kid can catalogue numerous sightings for the flora, fauna, and fungi that they encounter.</p>
        <h2 className="about-subheader">Leveling & Achievements</h2>
        <p className="about-sub-p">For each sighting that is added, a kid is awarded 10 experience and for each 100 experience a level is awarded.</p>
        <p className="about-sub-p">Throughout the course of adding sightings and gaining experience, new achievements can be unlocked and viewed on the profile page.</p>
        <h2 className="about-subheader">Terms</h2>
        <p className="about-sub-p">Throughout the application, there are some terms used that a kid may be unfamiliar with. As such, we wanted to provide some definitions here:</p>
        <ul className="terms-list">
          <li>Flora - The plants of a particular region, habitat, or geological period.  ·  Example: Deer, Fish, Birds
</li>
          <li>Fauna - The animals of a particular region, habitat, or geological period.  ·  Example: Trees, Flowers, Vines
</li>
          <li>Fungi - Any of a group of spore-producing organisms feeding on organic matter.  ·  Example: Mushrooms, Molds, Toadstools</li>
          <li>Biome - A large naturally occurring community of flora, fauna, and fungi occupying a major habitat.  · Example: Forest, Desert, Beach</li>
        </ul>
      </div>
      </div>
    );
  }
}

export default About;
