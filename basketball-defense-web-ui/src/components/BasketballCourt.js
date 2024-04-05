import React from 'react';
import {useState} from 'react';

function BasketballCourt() {

    const STROKE_WIDTH = 4;
    // const COURT_WIDTH = 

  return ( // Form component
          <div>
          <h1 class="text-6xl font-bold">Basketball Court UI</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 752 400"
            width="100%"
            height="auto"
          >
            {/* Court outline */}
            <rect x="50" y="50" width="658" height="350" fill="orange" />

            {/* Half court line */}
            <line x1="379" y1="50" x2="379" y2="400" stroke="white" strokeWidth={STROKE_WIDTH} />
            <line x1="50" y1="225" x2="183" y2="225" stroke="white" strokeWidth={STROKE_WIDTH} />

            {/* half court circles */}
            <circle cx="379" cy="225" r="42" fill="none" stroke="white" strokeWidth={STROKE_WIDTH} />
            <circle cx="379" cy="225" r="14" fill="none" stroke="white" strokeWidth={STROKE_WIDTH} />

            {/* left court circle */}            
            <circle cx="183" cy="225" r="42" fill="none" stroke="white" strokeWidth={STROKE_WIDTH} />

            {/* right court circle */}                  
            <circle cx="562" cy="225" r="42" fill="none" stroke="white" strokeWidth={STROKE_WIDTH} />

            {/* Circle positions for defense */}
            <circle cx="250" cy="100" r="10" fill="red"/>
            <circle cx="150" cy="200" r="10" fill="red" />
            <circle cx="350" cy="200" r="10" fill="red" />
            <circle cx="150" cy="500" r="10" fill="red" />
            <circle cx="350" cy="500" r="10" fill="red" />
          </svg>   
          </div>       
          </div>
    
  );
}

export default BasketballCourt;