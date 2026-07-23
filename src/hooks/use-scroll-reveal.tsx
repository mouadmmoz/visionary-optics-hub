import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible } as const;
}

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "fade";
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal = ({
  delay = 0,
  variant = "up",
  className = "",
  children,
  ...rest
}: RevealProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const hidden: Record<string, string> = {
    up: "opacity-0 translate-y-10",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    scale: "opacity-0 scale-95",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-\[900ms\] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden[variant]
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
