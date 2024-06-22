'use client';

import { useEffect, useState } from "react";

export function useIsVisible(ref: React.MutableRefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);
    const [wasViewed, setWasViewed] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting),
            setWasViewed((prev) => prev ? true : entry.isIntersecting);
        });
    
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return { isIntersecting, wasViewed };
}