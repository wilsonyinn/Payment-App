import React from "react";
import Home from "../components/Home";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
import TeamCard from "../components/TeamCard";
import styles from "../styles.module.css";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <div className={styles.teamSection}>
        <h1 className={styles.teamTitle}>Meet the Developers</h1>
        <div className={styles.teamCards}>
          <TeamCard
            name="Tolby Lam"
            img="../assets/tolby-lam.jpeg"
          />
          <TeamCard
            name="Wilson Yin"
            img="../assets/wilson-yin.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
