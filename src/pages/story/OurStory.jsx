import React from "react";
import HeroStory from "./HeroStory";
import OurStorySection from "../career/OurStorySection";
import OurHistory from "./OurHistory";
import OurImpact from "./OurImpact";
import GetStarted from "../home/GetStarted";

const OurStory = () => {
  return (
    <div>
      <HeroStory />
      <OurStorySection />
      <OurHistory />
      <OurImpact />
      <GetStarted />
    </div>
  );
};

export default OurStory;
