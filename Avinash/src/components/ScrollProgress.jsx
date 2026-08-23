import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress(
        max > 0
          ? Math.min(1, Math.max(0, window.scrollY / max))
          : 0,
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <span
      className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
