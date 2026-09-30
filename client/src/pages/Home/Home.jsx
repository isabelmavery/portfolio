import Menu from "../../components/Menu/Menu";
import Wave from "../../assets/Wave";
import headshot from "../../assets/headshot.png";
import "./Home.css";
import CuteBullet from "../../assets/CuteBullet";
import Anchor from "../../base-components/Anchor/Anchor";

const SKILL_GROUPS = [
  {
    title: "Frameworks & Languages",
    color: "var(--pretty-purple)",
    secondaryColor: "var(--pretty-green-darker)",
    skills: [
      "React",
      "TypeScript",
      "Golang",
      "Node.js",
      "GraphQL",
      "React Native",
      "Remix",
    ],
  },
  {
    title: "Data & Cloud",
    color: "var(--pretty-green)",
    secondaryColor: "var(--pretty-purple)",
    skills: ["PostgreSQL", "NoSQL", "Firebase", "GCP", "AWS", "Terraform"],
  },
];

const CONTACT_LINKS = [
  { label: "Resume", href: "/Isabel_Avery_Resume.pdf", download: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/isabel-m-avery/" },
  { label: "Email", href: "mailto:isabelmavery@gmail.com" },
  { label: "GitHub", href: "https://github.com/isabelmavery" },
];

function Home() {
  return (
    <div className="home">
      <div className="text-content home-intro">
        <div className="home-intro-text">
          <div className="home-intro-header">
            <div className="header">Hey there</div>
            <Wave />
          </div>
          <div className="home-intro-description">
            Welcome to my personal website! My name is Isabel and I am a
            Fullstack engineer originally from the Chicago area. Explore to
            learn more about my background and try out some projects I had fun
            with.
          </div>
          <div className="home-contact-links">
            {CONTACT_LINKS.map(({ label, href, download }) => (
              <Anchor
                key={label}
                href={href}
                ariaLabel={label}
                download={download}
              >
                {label}
              </Anchor>
            ))}
          </div>
        </div>
        <div className="headshot">
          <img src={headshot} alt="Isabel Avery" />
        </div>
      </div>
      <div className="home-skills-text text-content primary-content">
        {SKILL_GROUPS.map(({ title, color, skills, secondaryColor }) => (
          <div
            key={title}
            className="skill-group"
            style={{ "--chip-color": color }}
          >
          
            <div className="skill-group-title">
              <div className="bullet-wrapper">
                <CuteBullet primaryColor={color} secondaryColor={secondaryColor}/>
              </div>
              <span>{title}</span>
            </div>
            
          <ul className="skill-chips">
              {skills.map((skill) => (
                <li key={skill} className="skill-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-content primary-content">
        <Menu />
      </div>
    </div>
  );
}

export default Home;
