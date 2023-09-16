
import React from "react";
import DiscordIcon from "../assets/socialicons/discord.svg";
import LinkedinIcon from "../assets/socialicons/linkedin.svg";
import GithubIcon from "../assets/socialicons/Vector1.svg";
import TwitterIcon from "../assets/socialicons/Vector.svg";

const Icons = [
  {
    id: 1,
    Icon: GithubIcon,
    name: "Github",
  },
  {
    id: 2,
    Icon: TwitterIcon,
    name: "Twitter",
  },
  {
    id: 3,
    Icon: LinkedinIcon,
    name: "Linkedin",
  },
  {
    id: 4,
    Icon: DiscordIcon,
    name: "Discord",
  },
];

const Template = ({children}) => {
  return (
    <div className="">
      <div className="grid sm:grid-cols-2 h-screen">
        <div className="z-10 py-6 relative bg-blue-500 sm:bg-transparent">
          <div className="flex flex-col justify-between items-center h-full gap-4">
            <div className="self-start text-2xl font-bold text-white font-Montserrat pl-4">
              Logo
            </div>
            <div className="text-5xl sm:text-7xl font-Montserrat font-bold text-white">
              Board.
            </div>
            <div className="flex gap-6">
              {Icons.map((icon) => (
                <div key={icon.id}>
                  <img
                    src={icon.Icon}
                    width={30}
                    height={30}
                    className="aspect-square"
                    alt={icon.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {children}
        <div className="absolute hidden sm:block min-h-full leftImage bg-no-repeat bg-cover inset-0 sm:-translate-x-1/2"></div>
      </div>
    </div>
  );
};
export default Template;
