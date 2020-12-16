import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-container">
        <p class="footer-copyright">©2020 Michael Pfohl</p>
          <a
            href="https://github.com/michaelpfohl"
            target="_blank"
            rel="noreferrer"
            className="footer-item"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-pfohl/"
            target="_blank"
            rel="noreferrer"
            className="footer-item"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
