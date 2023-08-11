import { ReactNode, useEffect } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type PageWrapperProps = {
    children: ReactNode;
}

const PageWrapper = ({ children } : PageWrapperProps) => {

    return <main data-scroll-section>{children}</main>
}

export default PageWrapper;