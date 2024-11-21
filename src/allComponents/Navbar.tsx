import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Hent den aktuelle sti
  return (
    <nav role="navigation" aria-label="Main Navigation">
      {/* Link til Assignments */}
      <Link 
        to="/assignments" 
        aria-label="Assignments Page"
        aria-current={location.pathname === '/assignments' ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" 
          className={`navIcon ${location.pathname === '/assignments' ? 'selectedSvg' : ''}`} 
          fill="none" aria-hidden="true">
          <path
            d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
            className={`navIcon ${location.pathname === '/assignments' ? 'selectedPage' : ''}`}
            stroke="#E3D9B0"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Link til Homepage */}
      <Link 
        to="/homepage" 
        aria-label="Homepage"
        aria-current={location.pathname === '/homepage' ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" 
          className={`navIcon ${location.pathname === '/homepage' ? 'selectedSvg' : ''}`} 
          fill="none" aria-hidden="true">
          <path
            d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
            className={`navIcon ${location.pathname === '/homepage' ? 'selectedPage' : ''}`}
            stroke="#E3D9B0"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Link til Profile */}
      <Link 
        to="/profile" 
        aria-label="Profile Page"
        aria-current={location.pathname === '/profile' ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 24 24" 
          className={`navIcon ${location.pathname === '/profile' ? 'selectedSvg' : ''}`} 
          fill="none" aria-hidden="true">
          <path
            d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
            className={`navIcon ${location.pathname === '/profile' ? 'selectedPage' : ''}`}
            stroke="#E3D9B0"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </nav>
  );
}

export default Navbar;
