import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const ScrollTop = () => {

    const { pathname } = useLocation();
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      // window.scrollTo(0, 0);
      window.scroll({top:0, behavior:"smooth"})
    }, [pathname]);
}

export default ScrollTop