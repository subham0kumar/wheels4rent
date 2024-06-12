import React from "react";
import { useTeamState } from "../Context/TeamContext";
import Banner from "../components/Util/Banner";
import ContactBanner from "../components/Util/ContactBanner";
import PersonCard from "../components/Util/PersonCard";

const OurTeam = () => {
  const { team } = useTeamState();
  const data = team.filter((member) => {
    return member.empId >= 0;
  });
  return (
    <div>
      <Banner PageTitle={"Our Team"} />
      <section className="grid lg:grid-cols-3 gap-6 lg:mx-60 my-10 mx-8 lg:my-20">
        {data.map((member, index) => (
          <PersonCard key={index} employ={member} />
        ))}
      </section>
      <ContactBanner />
    </div>
  );
};

export default OurTeam;
