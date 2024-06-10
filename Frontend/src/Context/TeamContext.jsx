import { createContext, useContext } from "react";

const teamMember = createContext();

const TeamContext = ({ children }) => {
  const team = [
    {
      empId: 1,
      name: "Rahul Tendulkar",
      designation: "Salesman",
      displayImg: "/static/people/Rahul.png",
    },
    {
      empId: 2,
      name: "Sachin Dravid",
      designation: "Photographer",
      displayImg: "/static/people/Sachin.png",
    },
    {
      empId: 3,
      name: "Sheela",
      designation: "Car Dealer",
      displayImg: "/static/people/Sheela.png",
    },
    {
      empId: 4,
      name: "Monica Suri",
      designation: "Manager",
      displayImg: "/static/people/Monica.png",
    },
    {
      empId: 5,
      name: "Shubhangi Gupta",
      designation: "CEO",
      displayImg: "/static/people/Shubhangi.png",
    },
    {
      empId: 6,
      name: "Nitish Shah",
      designation: "Mechanic",
      displayImg: "/static/people/Nitish.png",
    },
  ];
  return <teamMember.Provider value={{ team }}>{children}</teamMember.Provider>;
};

export default TeamContext;

export const useTeamState = () => {
  return useContext(teamMember);
};
