import React from "react";

export default ({ data }) => (
  <div>
    <h1>Some examplary content about {data.site.siteMetadata.title}</h1>
    <p>
      Some text fill in, whatever whatever
      stub just fill the empty space
    </p>
  </div>
);

// you declare query for data to be passed to component
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
