import { useEffect } from "react";

function TimeControlledScroll({ position, time }) {
  useEffect(() => {
    const scrollToPosition = (targetPosition, duration) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        // Easing function for smooth scrolling
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    // Scroll to the specified position over the given time
    scrollToPosition(position, time);
  }, [position, time]); // Dependencies, so the effect runs when they change

  return null; // This component doesn't render anything
}

export { TimeControlledScroll };
