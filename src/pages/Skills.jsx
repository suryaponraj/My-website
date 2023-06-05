import React, { useState, useEffect } from "react"
import Section from "../components/Section"
import Skill from "../components/Skill"
import Pie3D from "../components/Chart/Pie3D"
import { SiAndroidstudio, SiAngular, SiCss3, SiFirebase,  SiGit, SiGithub, SiGitlab, SiHtml5,   SiJavascript, SiJupyter, SiMongodb, SiPostgresql, SiPostman, SiPython, SiReact, SiVisualstudiocode } from "react-icons/si"
import { BsTerminalFill } from "react-icons/bs"

const Skills = () => {
  const [repoItems, setRepoItems] = useState([])
  const [dataSource, setDataSource] = useState([])

  let data = {
    skills: [
      {
        title: "C ",
        progress: "75%",
      },
      {
        title: "Java",
        progress: "75%",
      },
      {
        title: "Javascript",
        progress: "65%",
      },
      {
        title: "Python",
        progress: "45%",
      },    
      {
        title: "HTML",
        progress: "90%",
      },
      {
        title: "CSS",
        progress: "80%",
      },   {
        title: "React.js",
        progress: "90%",
      },   
    ],
   
  }

  

  

  const { skills, frameworks } = data

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ))

  

  

  const SocialIcon = ({ icon }) => {
    return (
      <div
        className="list-inline-item dev-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </div>
    )
  }

  const iconsSet1 = [
    {
      icon: <SiGit />,
    },
    {
      icon: <SiGithub />,
    },
    {
      icon: <SiGitlab />,
    },
  ]

  const iconsSet2 = [
    {
      icon: <SiPython />,
    },
    
    {
      icon: <SiJavascript />,
    },
  ]

  const iconsSet3 = [
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <SiReact />,
    },
  ]

  const iconsSet4 = [
    
    
  ]

  const iconsSet5 = [
   
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiPostgresql />,
    },
    {
      icon: <SiFirebase />,
    },
    
  ]

  const iconsSet6 = [
    {
      icon: <SiVisualstudiocode />,
    },
    {
      icon: <SiJupyter />,
    },
  
    {
      icon: <SiAndroidstudio/>,
    },
    {
      icon: <SiPostman />,
    },
    
  ]

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Programming Languages, Tools & Technologies</div>
      <div>
        {iconsSet1.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet2.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet3.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet4.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet5.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet6.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
