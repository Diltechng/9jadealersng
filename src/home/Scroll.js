import { useState, useRef } from "react";
const useScroll = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const containerRef = useRef(null);
     const handleScroll = (scrollAmount) =>{
        if (containerRef.current){
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
        }
    };
            return{handleScroll, containerRef}
};
export default useScroll;
