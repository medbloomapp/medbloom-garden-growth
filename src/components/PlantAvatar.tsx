interface PlantAvatarProps {
  stage: number; // 0-6
  className?: string;
}

export const PlantAvatar = ({ stage, className = "" }: PlantAvatarProps) => {
  const getPlantContent = () => {
    if (stage === 0 || stage === 1) {
      // Seed or tiny sprout
      return (
        <>
          <ellipse cx="100" cy="140" rx="35" ry="8" fill="hsl(var(--soil-dark))" opacity="0.6" />
          {stage === 1 && (
            <>
              <line x1="100" y1="140" x2="100" y2="120" stroke="hsl(var(--plant-green))" strokeWidth="2" />
              <circle cx="100" cy="118" r="3" fill="hsl(var(--plant-light))" />
            </>
          )}
          {stage === 0 && <circle cx="100" cy="138" r="4" fill="hsl(var(--pot-brown))" />}
        </>
      );
    }

    if (stage === 2 || stage === 3) {
      // Young plant with leaves
      return (
        <>
          <ellipse cx="100" cy="140" rx="35" ry="8" fill="hsl(var(--soil-dark))" opacity="0.6" />
          <line x1="100" y1="140" x2="100" y2="80" stroke="hsl(var(--plant-green))" strokeWidth="3" />
          
          {/* Leaves */}
          <ellipse cx="85" cy="100" rx="12" ry="20" fill="hsl(var(--plant-light))" transform="rotate(-30 85 100)" />
          <ellipse cx="115" cy="100" rx="12" ry="20" fill="hsl(var(--plant-light))" transform="rotate(30 115 100)" />
          
          {stage === 3 && (
            <>
              <ellipse cx="80" cy="85" rx="10" ry="16" fill="hsl(var(--plant-lime))" transform="rotate(-40 80 85)" />
              <ellipse cx="120" cy="85" rx="10" ry="16" fill="hsl(var(--plant-lime))" transform="rotate(40 120 85)" />
            </>
          )}
        </>
      );
    }

    if (stage === 4) {
      // Budding plant
      return (
        <>
          <ellipse cx="100" cy="140" rx="35" ry="8" fill="hsl(var(--soil-dark))" opacity="0.6" />
          <line x1="100" y1="140" x2="100" y2="60" stroke="hsl(var(--plant-green))" strokeWidth="3.5" />
          
          {/* Multiple leaves */}
          <ellipse cx="82" cy="110" rx="12" ry="22" fill="hsl(var(--plant-light))" transform="rotate(-35 82 110)" />
          <ellipse cx="118" cy="110" rx="12" ry="22" fill="hsl(var(--plant-light))" transform="rotate(35 118 110)" />
          <ellipse cx="78" cy="85" rx="11" ry="18" fill="hsl(var(--plant-lime))" transform="rotate(-40 78 85)" />
          <ellipse cx="122" cy="85" rx="11" ry="18" fill="hsl(var(--plant-lime))" transform="rotate(40 122 85)" />
          
          {/* Buds */}
          <circle cx="95" cy="65" r="5" fill="hsl(var(--flower-pink))" opacity="0.7" />
          <circle cx="105" cy="65" r="5" fill="hsl(var(--flower-pink))" opacity="0.7" />
        </>
      );
    }

    // Stage 5-6: Full bloom with multiple flowers
    return (
      <>
        <ellipse cx="100" cy="140" rx="35" ry="8" fill="hsl(var(--soil-dark))" opacity="0.6" />
        <line x1="100" y1="140" x2="100" y2="50" stroke="hsl(var(--plant-green))" strokeWidth="4" />
        
        {/* Lush leaves */}
        <ellipse cx="80" cy="115" rx="13" ry="24" fill="hsl(var(--plant-light))" transform="rotate(-35 80 115)" />
        <ellipse cx="120" cy="115" rx="13" ry="24" fill="hsl(var(--plant-light))" transform="rotate(35 120 115)" />
        <ellipse cx="75" cy="90" rx="12" ry="20" fill="hsl(var(--plant-lime))" transform="rotate(-42 75 90)" />
        <ellipse cx="125" cy="90" rx="12" ry="20" fill="hsl(var(--plant-lime))" transform="rotate(42 125 90)" />
        <ellipse cx="73" cy="70" rx="10" ry="16" fill="hsl(var(--plant-green))" transform="rotate(-45 73 70)" />
        <ellipse cx="127" cy="70" rx="10" ry="16" fill="hsl(var(--plant-green))" transform="rotate(45 127 70)" />
        
        {/* Multiple flowers */}
        {[
          { x: 90, y: 55 },
          { x: 110, y: 55 },
          ...(stage === 6 ? [{ x: 80, y: 65 }, { x: 120, y: 65 }] : [])
        ].map((pos, i) => (
          <g key={i}>
            {/* Flower petals */}
            <circle cx={pos.x} cy={pos.y - 6} r="5" fill="hsl(var(--flower-pink))" />
            <circle cx={pos.x + 5} cy={pos.y - 2} r="5" fill="hsl(var(--flower-pink))" />
            <circle cx={pos.x + 4} cy={pos.y + 4} r="5" fill="hsl(var(--flower-pink))" />
            <circle cx={pos.x - 4} cy={pos.y + 4} r="5" fill="hsl(var(--flower-pink))" />
            <circle cx={pos.x - 5} cy={pos.y - 2} r="5" fill="hsl(var(--flower-pink))" />
            {/* Flower center */}
            <circle cx={pos.x} cy={pos.y} r="3" fill="hsl(var(--flower-center))" />
          </g>
        ))}
      </>
    );
  };

  return (
    <svg 
      viewBox="0 0 200 160" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pot */}
      <path
        d="M 60 130 L 65 150 L 135 150 L 140 130 Z"
        fill="hsl(var(--pot-brown))"
        stroke="hsl(var(--earth-gray))"
        strokeWidth="2"
      />
      <ellipse cx="100" cy="130" rx="40" ry="8" fill="hsl(var(--pot-brown))" />
      <ellipse cx="100" cy="130" rx="35" ry="6" fill="hsl(var(--soil-dark))" />
      
      {/* Plant content based on stage */}
      {getPlantContent()}
    </svg>
  );
};
