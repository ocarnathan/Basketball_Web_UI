import React from 'react';
import {useState} from 'react';

function BasketballCourt() {

    const LINE_WIDTH = 4;
    const LINE_COLOR = "white";
    const COURT_WIDTH = 658;
    const COURT_HEIGHT = 350;
    
    const COURT_COLOR = "orange";
    
    const BEGIN_X_COR = 50;
    const BEGIN_Y_COR = 50;

    const PLAYER_ICON_COLOR = "red";
    const PLAYER_ICON_SIZE = 10;
    

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
            <rect x={BEGIN_X_COR} y={BEGIN_Y_COR} width={COURT_WIDTH} height={COURT_HEIGHT} fill={COURT_COLOR} />

            {/* Half court line */}
            <line x1="379" y1="50" x2="379" y2="400" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />

            {/* out of bounds */}
            <line id="west-bound"   x1="48"   y1="50"   x2="48"   y2="400" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="east-bound"  x1="710"  y1="50"   x2="710"  y2="400" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="north-bound"  x1="46"   y1="48"   x2="712"  y2="48" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="south-bound"  x1="46"   y1="402"  x2="712"  y2="402" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />

            {/* west court key */}
            <line id="top-west-key"           x1="50"   y1="167" x2="183" y2="167" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="top-inner-west-key"     x1="48"   y1="183" x2="183" y2="183" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="bottom-inner-west-key"  x1="48"   y1="267" x2="183" y2="267" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="bottom-west-key"        x1="50"   y1="283" x2="183" y2="283" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="west-free-throw-line"   x1="183"  y1="165"  x2="183" y2="285" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            {/* west key circle */}            
            <circle cx="183" cy="225" r="42" fill="none" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />

            {/* half court circles */}
            <circle id="half-court-outer-circle" cx="379" cy="225" r="42" fill="none" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <circle id="half-court-inner-circle" cx="379" cy="225" r="14" fill="none" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />

            {/* west Three-point line */}
            <path d="M50 71 A130 110 0 0 1 50 379" fill="none" stroke="white" strokeWidth={LINE_WIDTH} />
            {/* east Three-point line */}
            <path d="M712 71 A130 110 0 0 0 712 379" fill="none" stroke="white" strokeWidth={LINE_WIDTH} />


            {/* east court key */}
            <line id="top-east-key"           x1="579"   y1="167" x2="712" y2="167" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="top-inner-east-key"     x1="579"   y1="183" x2="712" y2="183" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="bottom-inner-east-key"  x1="579"   y1="267" x2="712" y2="267" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="bottom-east-key"        x1="579"   y1="283" x2="712" y2="283" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            <line id="east-free-throw-line"   x1="579"  y1="165"  x2="579" y2="285" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />
            {/* east court circle */}                  
            <circle cx="579" cy="225" r="42" fill="none" stroke={LINE_COLOR} strokeWidth={LINE_WIDTH} />

            {/* Circle positions for defense */}
            <circle id="guard-1" cx="183" cy="183" r={PLAYER_ICON_SIZE} fill={PLAYER_ICON_COLOR}/>
            <circle id="guard-2" cx="183" cy="267" r={PLAYER_ICON_SIZE} fill={PLAYER_ICON_COLOR} />
            <circle id="forward-1" cx="90" cy="125" r={PLAYER_ICON_SIZE} fill={PLAYER_ICON_COLOR} />
            <circle id="forward-2" cx="90" cy="325" r={PLAYER_ICON_SIZE} fill={PLAYER_ICON_COLOR} />
            <circle id="center" cx="90" cy="225" r={PLAYER_ICON_SIZE} fill={PLAYER_ICON_COLOR} />
          </svg>   
          </div>       
          </div>
    
  );
}

export default BasketballCourt;