import { useEffect } from "react"

export const useAdjustScroll = (navbarHeight:number) =>{
    useEffect(() =>{
        const handleHashChange = () =>{
            setTimeout(() => {
                const {hash} = window.location;
                if(hash){
                    const targetElement = document.querySelector(hash);
                    if(targetElement){
                        const offsetPosition = navbarHeight + 100;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }, 0);
        };

        window.addEventListener('hashchange', handleHashChange, true);


        return () => window.removeEventListener('hashchange', handleHashChange, true);
    }, [navbarHeight]);
}