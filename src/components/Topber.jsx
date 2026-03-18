import React from "react";
import Section from "./Section";
import Container from "./Container";

const Topber = () => {
  return (
    <header className="tracking-wide relative z-50 bg-[#F3F6FB] py-3">
      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#192335]">
              Summer Sale: Save up to 40% on select items. Limited-time offer!
            </p>
            <div className="flex items-center justify-center gap-5">
              <p className="text-[#192335]">phone (629) 555-0129</p>
              <p className="text-[#192335]">phone (629) 555-0129</p>
            </div>
          </div>
        </Container>
      </Section>
    </header>
  );
};

export default Topber;
