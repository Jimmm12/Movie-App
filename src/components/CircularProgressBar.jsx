const CircularProgressBar = ({ percent = 0 , size = 3, strokeWidth = 0.25, strokeColor = 'green' }) => {

  const radius = size / 2 - strokeWidth

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle 
          r={`${radius}vw`} 
          cx={`${size / 2}vw`} 
          cy={`${size / 2}vw`} 
          stroke="white"
          strokeWidth={`${strokeWidth}vw`} 
        />
        <circle 
          r={`${radius}vw`} 
          cx={`${size / 2}vw`} 
          cy={`${size / 2}vw`} 
          stroke={strokeColor}
          fill="none" 
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`} // dash => 1px dash 1 | gap 1 | dash 1 | gap 1 
          // 2 * PI * R => chu vi => 2 * 20 *3,14 = 125,6 
          strokeDashoffset={`${2 * Math.PI * radius - (percent / 100 ) * 2 * Math.PI * radius}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text 
          x={`${size / 2}vw`} 
          y={`${size / 2}vw`} 
          fill="white"  
          fontSize="1.2vw" 
          alignmentBaseline="middle" 
          textAnchor="middle"
          >
            {percent}
          </text>
      </svg>
    </div>
  )
}
export default CircularProgressBar

