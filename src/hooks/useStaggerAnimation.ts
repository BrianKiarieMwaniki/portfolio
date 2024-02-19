import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerItems = stagger(0.5, { startDelay: 0.25 });

type UseStaggerAnimationProps = {
  isInView: boolean;
  element: any;
};

export const useStaggerAnimation = ({
  isInView,
  element
}: UseStaggerAnimationProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      element,
      isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0.25 },
      {
        type: "tween",
        ease: "easeIn",
        stiffness: 10,
        bounce: 0,
        duration: 0.5,
        delay: isInView ? staggerItems : 0,
      }
    );
  }, [isInView, element, animate]);

  return scope;
};
