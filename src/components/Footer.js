import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="https://raythx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>
        </div>
        <a
          href="https://github.com/raythx98"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.facebook.com/raythx98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/raythx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
