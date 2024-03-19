import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

type UseScrollAnimationProps = {
    triggerOnce?:boolean
}

export const useScrollAnimation = ({triggerOnce = false}:UseScrollAnimationProps = {}) =>{
    const[ref, isInView] = useInView({triggerOnce:triggerOnce, threshold:0.1});

    const animation = useAnimation();

    useEffect(() =>{
        if(isInView){
            animation.start("visible");
        }
    }, [isInView, animation]);

    return {ref, animation, isInView};
}