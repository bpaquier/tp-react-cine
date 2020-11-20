
import * as React from "react";


function MicroOff(props) {
  return (
    <svg
      width={14}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.734 10.613c.177-.52.267-1.064.266-1.613V8a.5.5 0 00-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 013 9V8a.5.5 0 00-1 0v1a5 5 0 004.5 4.975V16h-3a.5.5 0 000 1h7a.5.5 0 100-1h-3v-2.025a4.972 4.972 0 002.43-.923l-.718-.72zM10 8.88V4a3 3 0 00-5.842-.963L10 8.879zM4 7.12l4.486 4.486A3 3 0 014 9V7.12zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"
        fill="#4793FF"
      />
    </svg>
  );
}

export default MicroOff;