import React from "react";
import klazs from "../../lib";
import styles from './styles.scss'

//const styles = {
// textPrimary: "textPrimary_sdkhgfjkhsdgfsdf"
//};

const Hello = props => {
  const { children } = props;
  const myKlazs = klazs(styles, props);
  
  // myKlazs = {
  //  textPrimary: "textPrimary_sdkhgfjkhsdgfsdf textImportant" 
  //}

  return <h2 className={myKlazs.textPrimary}> {children}</h2>;
};

export default Hello;
