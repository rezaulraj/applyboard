import React from "react";
import HeroRecruitment from "./HeroRecruitment";
import StickyHeadingPartner from "./StickyHeadingPartner";
import TrustedPartners from "../home/Trustedpartners";
import TransformativeCaseStudies from "./TransformativeCaseStudies";
import RecruitmentPartnerBanner from "./RecruitmentPartnerBanner";

const RecruitmentPartner = () => {
  return (
    <div>
      <HeroRecruitment />
      <StickyHeadingPartner />
      <TrustedPartners />
      <TransformativeCaseStudies />
      <RecruitmentPartnerBanner />
    </div>
  );
};

export default RecruitmentPartner;
