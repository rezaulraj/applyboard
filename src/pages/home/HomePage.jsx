import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import StudyAbroad from "./StudyAbroad";
import Solution from "./Solution";
import TrustedPartners from "./Trustedpartners";
import ChannelPartners from "./ChannelPartners";
import RecruitmentSection from "./RecruitmentSection";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <StudyAbroad />
      <Solution />
      <TrustedPartners />
      <ChannelPartners />
      <RecruitmentSection />
      <FAQ/>
    </div>
  );
};

export default HomePage;
