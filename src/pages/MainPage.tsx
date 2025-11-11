import { useEffect } from "react";
import Intro from "./Intro";
import WhatIsExot from "./WhatIsExot";
import Subscribe from "./Subscribe";
import Ecosystem from "./Ecosystem";
import BusinessModel from "./../pages/BusinessModel";
import Exosome from "./Exosome";
import LatestUpdates from "./LatestUpdates";
import Token from "./Token";
import Teams from "./Teams";
import Roadmap from "./Roadmap";
import Community from "./Community";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="intro">
        <Intro />
      </section>

      <section id="what-is-exot">
        <WhatIsExot />
      </section>

      <Subscribe />

      <section id="ecosystem">
        <Ecosystem />
      </section>

      <section id="business-model">
        <BusinessModel />
      </section>

      <section id="exosome">
        <Exosome />
      </section>

      <section id="latest-updates">
        <LatestUpdates />
      </section>

      <section id="token">
        <Token />
      </section>

      <section id="team">
        <Teams />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <Community />
    </>
  );
};

export default MainPage;
