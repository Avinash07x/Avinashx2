import React, { useEffect, useRef } from "react";

export default function CurlyCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse state
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0,
      speed: 0,
      angle: 0,
      hover: false,
    };

    let phase = 0;

    // Trail points for physics spring chain
    const POINT_COUNT = 32;
    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: pointer.x,
      y: pointer.y,
      vx: 0,
      vy: 0,
    }));

    const handleMouseMove = (e) => {
      const prevX = pointer.targetX;
      const prevY = pointer.targetY;

      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;

      const dx = pointer.targetX - prevX;
      const dy = pointer.targetY - prevY;
      pointer.speed = Math.sqrt(dx * dx + dy * dy);
      pointer.angle = Math.atan2(dy, dx);

      // Check if hovering interactive element
      const target = e.target;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], .interactive")
        );
        pointer.hover = isInteractive;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth move pointer head
      pointer.x += (pointer.targetX - pointer.x) * 0.45;
      pointer.y += (pointer.targetY - pointer.y) * 0.45;

      phase += 0.12 + Math.min(pointer.speed * 0.012, 0.25);

      // Lead point
      points[0].x = pointer.x;
      points[0].y = pointer.y;

      // Spring trail update
      for (let i = 1; i < POINT_COUNT; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        const spring = i === 1 ? 0.48 : 0.36;
        const friction = 0.62;

        p2.vx += (p1.x - p2.x) * spring;
        p2.vy += (p1.y - p2.y) * spring;
        p2.vx *= friction;
        p2.vy *= friction;

        p2.x += p2.vx;
        p2.y += p2.vy;
      }

      // Draw Curly Spring Trail
      if (points.length > 2) {
        ctx.save();

        // Glowing cursor head ring
        const headRadius = pointer.hover ? 14 : 7;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, headRadius, 0, Math.PI * 2);
        ctx.fillStyle = pointer.hover ? "rgba(69, 183, 255, 0.25)" : "rgba(69, 183, 255, 0.15)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, headRadius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = pointer.hover ? "#7CCBFF" : "#45B7FF";
        ctx.fill();

        // Draw main curly coil line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < POINT_COUNT - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          // Compute direction angle between adjacent points
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          // Curly offset perpendicular to motion direction
          const perpAngle = angle + Math.PI / 2;
          const waveAmplitude = Math.min(dist * 0.85, 18) * Math.sin(phase - i * 0.38);
          const curlX = Math.cos(perpAngle) * waveAmplitude;
          const curlY = Math.sin(perpAngle) * waveAmplitude;

          // Midpoint for smooth quadratic curve
          const xc = (p1.x + p2.x) / 2 + curlX;
          const yc = (p1.y + p2.y) / 2 + curlY;

          ctx.quadraticCurveTo(p1.x + curlX, p1.y + curlY, xc, yc);
        }

        // Create gradient stroke
        const gradient = ctx.createLinearGradient(
          points[0].x,
          points[0].y,
          points[POINT_COUNT - 1].x,
          points[POINT_COUNT - 1].y
        );

        if (pointer.hover) {
          gradient.addColorStop(0, "rgba(124, 203, 255, 0.95)");
          gradient.addColorStop(0.5, "rgba(69, 183, 255, 0.65)");
          gradient.addColorStop(1, "rgba(22, 139, 210, 0)");
        } else {
          gradient.addColorStop(0, "rgba(69, 183, 255, 0.85)");
          gradient.addColorStop(0.5, "rgba(22, 139, 210, 0.5)");
          gradient.addColorStop(1, "rgba(48, 48, 48, 0)");
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = pointer.hover ? 3.5 : 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = pointer.hover ? "#45B7FF" : "rgba(69, 183, 255, 0.5)";
        ctx.shadowBlur = pointer.hover ? 12 : 6;
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      aria-hidden="true"
    />
  );
}
