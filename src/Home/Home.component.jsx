import React from "react";
import styles from "./Home.module.styl";
import rocketImg from "../assets/spacex.jpg"

const Home = () => {
  return (
    <div className= { styles.header } >
      <img src= { rocketImg } alt="Space-rocket" />
    </div>
  );
};

export default Home;