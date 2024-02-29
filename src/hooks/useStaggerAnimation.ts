import { Easing, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerItems = stagger(0.5, { startDelay: 0.15, ease: "easeIn" });


type UseStaggerAnimationProps = {
  isInView: boolean;
  element: any;
  type?:"tween" | "spring" | "keyframes" | "inertia" | undefined;
  bounce?:number;
  stiffness?:number;
  staggerEase?:Easing | undefined;
};

export const useStaggerAnimation = ({
  isInView,
  element,
  type = "tween",
  bounce = 0,
  stiffness= 100
}: UseStaggerAnimationProps) => {
  const [scope, animate] = useAnimate();
  
  


  useEffect(() => {
    animate(
      element,
      isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 },
      {
        type: type,
        ease: "easeIn",
        stiffness: stiffness,
        bounce: bounce,
        duration: 0.5,
        delay:  isInView? staggerItems : 0,
      }
    );
  }, [isInView, element, bounce, stiffness, type, animate]);

  return scope;
};
