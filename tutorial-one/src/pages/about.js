import * as React from 'react';
import Link from "gatsby-link";

export default () => {
  return (
    <div style={{maxWidth: '1000px', margin: 'auto'}}>
      <h1>ABOUT PAGE</h1>
      <p style={{margin: '4rem auto', maxWidth: '500px'}}>
      some text should go into here, just for show. Anything will do rly.
      Just make it fill the empty space. (Of your heart x_x).
      </p>
      <Link to="/">root</Link>
    </div>
  );
}
