import React from "react";
import HeroInstitution from "./HeroInstitution";
import StickyHeaderInstitution from "./StickyHeaderInstitution";
import TrustedPartners from "../student/TrustedPartners";
import SuccessStoriesSection from "./SuccessStoriesSection";
import ApplyBoardInsights from "./ApplyBoardInsights";
import PartnershipRequestForm from "./PartnershipRequestForm";

const Institution = () => {
  return (
    <div>
      <HeroInstitution />
      <StickyHeaderInstitution />
      <TrustedPartners />
      <SuccessStoriesSection />
      <ApplyBoardInsights />
      <PartnershipRequestForm />
    </div>
  );
};

export default Institution;
