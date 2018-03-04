import React from "react";
import g from "glamorous";
import { rhythm } from "../utils/typography";

export default ({data}) => (
  <div>
     <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
       Amazing Pandas Eating Things
     </g.H1>
     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
     {data.allMarkdownRemark.edges.map(({ node }) => (
       <div key={node.id}>
         <g.H3 marginBottom={rhythm(1 / 4)}>
           {node.frontmatter.title}{" "}
           <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
         </g.H3>
         <p>{node.excerpt}</p>
       </div>
     ))}
   </div>
);

// allMarkdownRemark is pulled from
//      gatsby-source-filesystem
// and is filtered by
//      gatsby-transformer-remark

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
