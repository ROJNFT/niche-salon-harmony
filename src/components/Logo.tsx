import { useNavigate } from 'react-router-dom';

const Logo = ({ className = "" }: { className?: string }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <svg 
      version="1.0" 
      xmlns="http://www.w3.org/2000/svg"
      width="144" 
      height="144" 
      viewBox="0 0 144.000000 144.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`${className} cursor-pointer`}
      onClick={handleLogoClick}
      role="button"
      aria-label="Go to location selection"
    >
      <g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
        <path d="M360 891 c-96 -36 -212 -94 -230 -116 -12 -15 -12 -19 5 -31 21 -16
        101 -10 120 8 6 6 -10 7 -45 2 -49 -6 -54 -5 -42 8 24 29 287 146 300 133 6
        -6 -28 -66 -99 -176 -63 -96 -79 -129 -63 -129 3 0 44 34 92 76 89 77 231 178
        239 170 3 -2 -13 -28 -35 -58 -47 -63 -72 -110 -72 -136 0 -24 25 -46 41 -37
        8 6 8 9 -1 15 -15 9 2 43 72 150 45 68 48 76 32 87 -28 20 -103 -20 -231 -124
        l-54 -44 49 73 c28 40 56 85 62 100 30 64 -19 74 -140 29z"/>
        <path d="M964 825 c-56 -85 -78 -103 -153 -122 l-24 -6 19 26 c10 14 26 25 34
        24 8 -1 16 6 18 16 3 12 -3 17 -22 17 -14 0 -28 -5 -31 -10 -4 -6 -33 -24 -65
        -40 l-59 -30 6 37 c5 28 3 35 -8 31 -16 -5 -39 -67 -32 -85 7 -19 44 -15 73 7
        32 25 37 25 36 -2 -1 -33 27 -34 85 -4 l49 26 -6 -24 c-10 -43 16 -41 62 5
        l44 43 0 -27 c0 -32 22 -44 54 -29 17 7 27 6 44 -9 27 -21 49 -16 126 34 65
        41 44 46 -33 8 -65 -34 -85 -38 -78 -18 2 6 12 12 22 12 24 0 60 49 51 70 -10
        26 -48 14 -74 -25 -23 -35 -56 -59 -80 -60 -10 0 -12 8 -7 29 8 36 -8 47 -37
        27 -41 -29 -39 -17 12 64 27 44 50 84 50 90 0 26 -24 3 -76 -75z"/>
      </g>
    </svg>
  );
};

export default Logo;
