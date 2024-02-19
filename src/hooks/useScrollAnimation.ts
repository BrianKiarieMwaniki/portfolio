import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

export const useScrollAnimation = () =>{
    const[ref, isInView] = useInView({triggerOnce:true, threshold:0.1});

    const animation = useAnimation();

    useEffect(() =>{
        if(isInView){
            animation.start("visible");
        }
    }, [isInView, animation]);

    return {ref, animation, isInView};
}