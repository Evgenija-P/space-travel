import './galaxy.css';

const Galaxy = () => {
  return (
    <svg
      width="850"
      height="590"
      viewBox="0 0 850 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="how-to__galaxy mx-auto"
    >
      <line
        x1="20.2474"
        y1="19.56552"
        x2="161.247"
        y2="95.5655"
        stroke="white"
      />
      <line x1="161.43" y1="95.7448" x2="215.43" y2="186.745" stroke="white" />
      <line x1="215.439" y1="186.76" x2="286.439" y2="316.76" stroke="white" />
      <line
        x1="286.444"
        y1="317.229"
        x2="236.444"
        y2="414.229"
        stroke="white"
      />
      <line
        x1="286.207"
        y1="316.545"
        x2="545.207"
        y2="434.545"
        stroke="white"
      />
      <line x1="236.29" y1="413.593" x2="406.29" y2="534.593" stroke="white" />
      <line
        x1="405.708"
        y1="534.594"
        x2="544.708"
        y2="434.594"
        stroke="white"
      />
      <g>
        <circle cx="20" cy="20" r="10" fill="white" />
        <text x="45" y="24" fill="white">
          Choose a program
        </text>
      </g>
      <g>
        <circle cx="161" cy="96" r="10" fill="white" />
        <text x="186" y="100" fill="white">
          Pay
        </text>
      </g>
      <g>
        <circle cx="215" cy="187" r="10" fill="white" />
        <text x="240" y="191" fill="white">
          Some preparation will be
        </text>
      </g>
      <g>
        <circle cx="286" cy="317" r="10" fill="white" />
        <text x="311" y="321" fill="white">
          We sit down. Let's fly. Weightlessness
        </text>
      </g>
      <g>
        <circle cx="236" cy="414" r="10" fill="white" />
        <foreignObject x="90" y="405" width="130" height="100">
          <p>Taking photos on Instagram</p>
        </foreignObject>
      </g>

      <g>
        <circle cx="406" cy="535" r="10" fill="white" />
        <foreignObject x="421" y="525" width="145" height="70">
          <p>Landing, but it's not certain</p>
        </foreignObject>
      </g>

      <g>
        <circle cx="545" cy="435" r="10" fill="white" />
        <foreignObject x="560" y="425" width="273" height="100">
          <p>
            Eat from tubes: 5 types of menu to choose from (vegan, sports,
            lactose-free, gluten-free, regular)
          </p>
        </foreignObject>
      </g>
    </svg>
  );
};

export default Galaxy;
