import React from "react";
import Home from "../components/Home";
import Slider from "../components/Slider";
import Navigation from "../components/Navigation";
import TeamCard from "../components/TeamCard";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <div className="teamSection">
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
