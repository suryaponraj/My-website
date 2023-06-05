import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Frontend Developer Intern</h3>
          <div className="subheading mb-3">Senseforth.ai</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li> Translate design mockups  into clean, efficient, and responsive code using HTML, CSS, and React JS</li>
            <li>Collaborate with the design team to ensure the visual aesthetics are accurately implemented.</li>
            <li>Make the app very efficient.</li>
            <li>Implement many alternative solution for a problem.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">May 2022 - May 2023</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Data Analyst Intern</h3>
          <div className="subheading mb-3">DataScience and Analytic Center</div>
          <p>
          <strong>Roles/Responsibilities</strong><br />
            <li>Learnt using tools like Hadoop Mapreduce,Tableau and Google Studio.</li>
            <li>Learnt programming languages like R and python.</li>
            <li>Done Projects like Olympic Data visualisation using Google Studio.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Aug 2021 - April 2023</span>
        </div>
      </div>
      
    </Section>
  );
}
