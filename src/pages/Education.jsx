import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Karpagam College Of Engineering</h3>
          <div className="subheading mb-3">B.E IN Electronics And Communication</div>
          <div>Data Structures, OOPs, DBMS, Web Development, Big Data</div>
          <p>CGPA: 9.1</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Aug 2019 - April 2023</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">PMG Matriculation Higher Secondary School</h3>
          <div className="subheading mb-3">HSC</div>
          <div>Biology,Physics,Chemistry,Mathematics</div>
          <p>Percentage Scored : 88%</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2018 - Mar 2019</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">PMG Matriculation Higher Secondary School</h3>
          <div className="subheading mb-3">HSC</div>
          <div>Science,Mathematics,English</div>
          <p>Percentage Scored : 98%</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2016 - Mar 2017</span>
        </div>
      </div>

    </Section>
  );
}
