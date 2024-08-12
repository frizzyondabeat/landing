"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
      <>
          {/* <!-- ===== Features Start ===== --> */}
          <section id="about" className="py-20 lg:py-25 xl:py-30">
              <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                  {/* <!-- Section Title Start --> */}
                  <SectionHeader
                      headerInfo={{
                          title: "OUR FEATURES",
                          subtitle: "Why Choose Techsphere Properties?",
                          description: `At Techsphere Properties, we combine innovation with expertise to bring you an unmatched real estate experience. Explore the key features that set us apart and make your property search simple, smart, and successful.`,
                      }}
                  />
                  {/* <!-- Section Title End --> */}

                  <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                      {/* <!-- Features item Start --> */}

                      {featuresData.map((feature, key) => (
                          <SingleFeature feature={feature} key={key} />
                      ))}
                      {/* <!-- Features item End --> */}
                  </div>
              </div>
          </section>

          {/* <!-- ===== Features End ===== --> */}
      </>
  );
};

export default Feature;
