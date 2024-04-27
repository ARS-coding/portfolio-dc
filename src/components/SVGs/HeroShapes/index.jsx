import { useEffect } from 'react';

export function HeroShapesSVG({ gsapTimeline }) {
  useEffect(() => {
    gsapTimeline
      .from('.square-animation-scale', { duration: 1.5, y: -30, x: -30, scale: 0, ease: 'expo', delay: 1 })
      .from('.square-animation-up', { duration: 1.2, y: 50, opacity: 0, stagger: 0.1 });
  }, [gsapTimeline]);

  return (
    <svg className="d-none d-sm-none d-md-none d-lg-inline" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="square-animation-up" x="200" width="100" height="100" rx="10" fill="#6E00FF" />
      <rect
        className="square-animation-up"
        x="300"
        y="100"
        width="100"
        height="100"
        rx="10"
        fill="#C4C4C4"
        fillOpacity="0.6"
      />
      <rect className="square-animation-scale" x="100" y="100" width="100" height="100" rx="10" fill="white" />
      <rect
        className="square-animation-scale"
        y="200"
        width="100"
        height="100"
        rx="10"
        fill="#C4C4C4"
        fillOpacity="0.6"
      />
      <rect className="square-animation-up" x="200" y="200" width="100" height="100" rx="10" fill="#6E00FF" />
      <rect className="square-animation-scale" x="100" y="300" width="100" height="100" rx="10" fill="white" />
      <rect className="square-animation-up" x="200" y="100" width="100" height="100" rx="50" fill="#FF64CB" />
      <rect className="square-animation-scale" x="100" y="200" width="100" height="100" rx="50" fill="#00F7FF" />
    </svg>
  );
}
