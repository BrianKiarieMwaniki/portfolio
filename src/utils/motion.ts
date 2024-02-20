export const textVariant = (delay?:number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction?:string) =>{
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0.25,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
}


export const slideIn = (
  direction?:string, 
  type?:'tween' | 'spring' | 'keyframes' | 'inertia' | undefined,
   delay?:number,
    duration?:number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
