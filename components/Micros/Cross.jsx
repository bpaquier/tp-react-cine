import * as React from "react";


function Cross(props) {
  return (
    <svg
      width={19}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.513 3.622l-14.89 14.89c-.65.65-1.703.65-2.351 0l-.785-.783a1.662 1.662 0 010-2.35L15.377.487c.65-.65 1.703-.65 2.351 0l.784.783c.65.649.65 1.702 0 2.351z"
        fill="#fff"
      />
      <path
        d="M15.377 18.512L.487 3.622a1.662 1.662 0 010-2.351l.784-.784c.65-.65 1.702-.65 2.35 0l14.892 14.89c.65.649.65 1.702 0 2.35l-.784.784c-.65.65-1.702.65-2.352 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default Cross;