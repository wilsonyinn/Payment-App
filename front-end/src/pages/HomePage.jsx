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
      <h2 className={styles.teamTitle}>Meet the Developers</h2>
      <div className={styles.teamSection}>
        <TeamCard
          name="Tolby Lam"
          description="Computer Science Student"
          img="../assets/tolby-lam.jpeg"
        />
        <TeamCard
          name="Wilson Yin"
          description="Software Engineer"
          img="../assets/wilson-yin.jpg"
        />
      </div>
    </div>
  );
};

export default HomePage;
