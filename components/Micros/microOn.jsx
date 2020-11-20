
import * as React from "react";


function MicroOn(props) {
  return (
    <svg
    
      width={14}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 3a3 3 0 116 0v5a3 3 0 11-6 0V3z" fill="#4793FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 6.5A.5.5 0 011 7v1a4 4 0 108 0V7a.5.5 0 111 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 010 8V7a.5.5 0 01.5-.5z"
        fill="#4793FF"
      />
    </svg>
  );
}

export default MicroOn;