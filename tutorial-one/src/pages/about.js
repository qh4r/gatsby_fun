import * as React from 'react';
import Link from "gatsby-link";
import styles from "./about.module.css";
import {Container} from "../components/container/container.component.js";

export default () => {
  return (
    <Container>
      <h1>ABOUT PAGE</h1>
      <p style={{margin: '4rem auto', maxWidth: '500px'}}>
      some text should go into here, just for show. Anything will do rly.
      Just make it fill the empty space. (Of your heart x_x).
      </p>
      <Link className={styles.pinkLink} to="/">root</Link>
    </Container>
  );
}
