import { FaGithub } from "react-icons/fa";
import { SiDiscord, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const socialNetworks = [
    {
      url: "https://www.linkedin.com/in/KSilvaR1",
      title: "LinkedIn",
      icon: (
        <SiLinkedin className="text-blue-700 text-3xl group-hover:text-blue-500 " />
      ),
    },
    {
      url: "https://discordapp.com/users/513783255951081483",
      title: "Discord",
      icon: (
        <SiDiscord className="text-indigo-500 text-3xl group-hover:text-indigo-400" />
      ),
    },
    {
      url: "https://github.com/kardell1",
      title: "Git",
      icon: (
        <FaGithub className="text-slate-400 text-3xl group-hover:text-slate-200" />
      ),
    },
  ];
  return (
    <div className="flex  gap-6">
      {socialNetworks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group "
        >
          <span>{social.icon} </span>
        </a>
      ))}
    </div>
  );
};

export default Footer;
