import React from "react";
import HeroStudent from "./HeroStudent";
import StickyStudentHeader from "./StickyStudentHeader";
import TrustedPartners from "./TrustedPartners";
import SuccessStories from "./SuccessStories";
import Solution from "../home/Solution";
import StudyDestinationsSection from "./StudyDestinationsSection";
import StudentCommunitySection from "./StudentCommunitySection";

const Students = () => {
  return (
    <div>
      <HeroStudent />
      <StickyStudentHeader />
      <TrustedPartners />
      <SuccessStories />
      <Solution />
      <StudyDestinationsSection />
      <StudentCommunitySection />
    </div>
  );
};

export default Students;
