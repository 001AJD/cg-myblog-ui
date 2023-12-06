import HeroSection from "./hero-section";
import FeaturedBlogsSection from "./featured-blogs-section";
import { Fragment } from "react";

function LandingPageLayout() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedBlogsSection />
      <h1 className="center">Subscribe for newsletter : TODO</h1>
    </Fragment>
  );
}

export default LandingPageLayout;
