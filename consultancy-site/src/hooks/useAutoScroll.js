import { useEffect, useRef } from "react";

/**
 * Makes a horizontally-scrollable container auto-scroll continuously,
 * while still letting the user take over manually at any time — by
 * dragging with a mouse, swiping on touch, or using a trackpad/wheel.
 *
 * Manual interaction pauses the auto-scroll immediately; it resumes on
 * its own a couple of seconds after the user lets go.
 *
 * Usage:
 *   const { ref, containerProps } = useAutoScroll({ speed: 0.6 });
 *   <div ref={ref} {...containerProps} className="overflow-x-auto flex ...">
 *     {items} {items /* render the items a second time for a seamless loop *\/}
 *   </div>
 */
export function useAutoScroll({ speed = 0.6, resumeDelay = 2200 } = {}) {
  const ref = useRef(null);
  const paused = useRef(false);
  const dragging = useRef(false);
  const resumeTimer = useRef(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el && !paused.current && !dragging.current) {
        el.scrollLeft += speed;
        // content is rendered twice back-to-back, so looping past the
        // halfway point and snapping to 0 is invisible to the user
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, resumeDelay);
  };

  const onPointerDown = (e) => {
    pause();
    if (e.pointerType === "touch") return; // native touch scrolling handles the rest
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = ref.current?.scrollLeft ?? 0;
  };

  const onPointerMove = (e) => {
    if (!dragging.current || e.pointerType === "touch") return;
    const dx = e.clientX - dragStartX.current;
    if (ref.current) ref.current.scrollLeft = dragStartScroll.current - dx;
  };

  const endDrag = () => {
    if (dragging.current) dragging.current = false;
    scheduleResume();
  };

  const containerProps = {
    onMouseEnter: pause,
    onMouseLeave: scheduleResume,
    onTouchStart: pause,
    onTouchEnd: scheduleResume,
    onWheel: () => {
      pause();
      scheduleResume();
    },
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerLeave: endDrag,
    onPointerCancel: endDrag,
  };

  return { ref, containerProps };
}