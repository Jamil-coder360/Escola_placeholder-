import React from "react";
import Section from "./Section";
import Container from "./Container";
import Shortanalysis from "./Shortanalysis";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="flex  items-center justify-between">
          <h1 className="text-[75px] max-w-[860px] text-start text-[#192335] font-bold">
            Expand Your Horizons through{" "}
            <span className="text-blue-500">Education</span>
          </h1>
          <div className="flex flex-col items-start">
            <p className="text-[21px] font-normal  text-[#192335]  mb-8">
              Expand Your Horizons through Education
            </p>
            <button className=" text-[#192335] border-2 border-[#25C6DA] px-11 py-6 rounded-md hover:bg-gray-300 transition duration-300">
              Contact us
            </button>
          </div>
        </div>
        <div className="flex">
            <div>
                <Shortanalysis />
            </div>
            <div>
                
            </div>
            <div></div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
