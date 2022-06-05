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
        <h2 className={styles.teamTitle}>Meet the Developers</h2>
        <div className={styles.teamCards}>
          <TeamCard
            name="Tolby Lam"
            link="https://www.linkedin.com/in/tolby-lam/"
            img="../assets/tolby-lam.jpeg"
          />
          <TeamCard
            name="Wilson Yin"
            link="https://www.linkedin.com/in/wilson-yin/"
            img="../assets/wilson-yin.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
