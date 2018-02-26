import * as React from "react";
import {Container} from "../components/container/container.component.js";
import styles from './index.module.css';

// this component becomes wrapper for all pages components
// children is function
export default ({children}) => (
  <Container>
    <div className={styles.header}>Content visible on every site</div>
    {children()}
    <div className={styles.footer}>footer</div>
  </Container>
)
