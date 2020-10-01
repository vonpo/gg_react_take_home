import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * Hooks was found useOnScreen hooks page and transformed to typescript.
 *
 * @ref https://usehooks.com/useOnScreen/
 *
 * @param ref
 * @param rootMargin
 */
export function useOnScreen(
  ref: MutableRefObject<any>,
  rootMargin: string = "0px"
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
