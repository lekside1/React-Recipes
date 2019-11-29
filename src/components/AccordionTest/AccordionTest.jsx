import React from 'react';
import Accordion from './Accordion';

const AccordionTest = () => (
  <div className="ml4 mr4">
    <h1 className="h2">Scenario Selector - Click to apply</h1>
    <Accordion>
      <div label="BBAD Training Scenarios">
        <span>Day 1 Training</span>
        {/* <span>Day 2 Training</span>
        <span>version 1.0</span> */}
      </div>
      <div label="My Scenarios">
        <span>FGC Lesson</span>
        {/* <span>MDC-Lesson</span> */}
      </div>
    </Accordion>
  </div>
);

export default AccordionTest;
