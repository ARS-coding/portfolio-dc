import { useEffect } from 'react';
import { gsap } from 'gsap';

export function ScrollIconSVG() {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.fromTo(
        '.scroll-svg',
        { duration: 1.5, y: -20, delay: 2.5 },
        { duration: 1.2, opacity: 1, y: 0, delay: 2.5 }
      );
    } else {
      gsap.fromTo(
        '.scroll-svg',
        { duration: 1.5, y: -20, delay: 1 },
        { duration: 1.2, opacity: 1, y: 0, delay: 1 }
      );
    }
  }, []);

  return (
    <svg className="scroll-svg mx-auto scroll stagger1" width="40" height="77" viewBox="0 0 40 77">
      <g id="scroll" transform="translate(-253 -787)">
        <g
          id="Rectangle_12"
          data-name="Rectangle 12"
          transform="translate(253 787)"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        >
          <rect width="40" height="77" rx="20" stroke="none"></rect>
          <rect x="2" y="2" width="36" height="73" rx="18" fill="none"></rect>
        </g>
        <circle
          className="scroll-circle"
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="11"
          cy="11"
          r="11"
          fill="#fff"
        ></circle>
      </g>
    </svg>
  );
}
