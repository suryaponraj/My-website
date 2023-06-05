import React from "react";
import Section from "../components/Section";
import ResumePDF from "../assets/Antony_Surya_Resume_final.pdf";
import SGCartoon from "../assets/sagnik_cartoon.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/antonysurya1612/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/suryaponraj",
      icon: <FaGithub />,
    },
    {
      href: "https://www.instagram.com/sagnikghoshcr7",
      icon: <FaInstagram />,
    },
  ];

  return (
    <Section id="about">
      <div className="row justify-content-between">
        <div className="col-md-6 order-last order-lg-first" data-aos="fade-up">
          <h1 className="mb-0">
            Antony
            <span className="text-primary" style={{ paddingLeft: "2vw" }}>
              Surya
            </span>
          </h1>
          <div className="subheading mb-3">
            <span style={{ paddingRight: "0.3vw" }}>
              Impossible is nothing!
            </span>
            <span style={{ paddingRight: "0.3vw" }}>·</span>
            <a href="mailto:suryaponraj1612@gmail.com" className="home-mail">
              suryaponraj1612@gmail.com
            </a>
          </div>
        </div>
        {/* <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Sagnik Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div> */}
      </div>

      <p className="lead mb-4">
        Innovative Frontend Developer Intern with JAVA and SQL Expertise |
        Passionate about Learning and Ready to take-up challenges. With a solid
        foundation as a Frontend Developer Intern, coupled with knowledge in SQL
        and Java, I am ready to make a lasting impact in the ever-evolving world
        of technology. I am constantly seeking opportunities to expand my skill
        set. During my internship, I actively contributed to the development of
        dynamic web applications, collaborating with cross-functional teams to
        deliver exceptional user experiences.</p>
        <p className="lead mb-4">My proficiency in HTML, CSS,
        JavaScript and React JS allowed me to bring life to designs while
        ensuring seamless functionality and responsive layouts. In addition to
        frontend expertise, my proficiency in Java and SQL enables me to
        integrate frontend components with robust backend systems. I am excited
        to embrace new technologies and frameworks, further expanding my skills
        and propelling projects to new heights. Let's connect and discuss how
        our shared passion for advancement and growth can lead to remarkable
        achievements.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  );
}
