import React from 'react'
import { motion, useInView } from 'framer-motion';

const IntroComment = ({
        srcSetDesktopWebP,
        srcSetDesktopPNG,
        srcSetMobileWebP,
        srcSetMobilePNG,
        alt,
        width,
        height,
    }) => {

    const ref = React.useRef(null);
    const inView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, transform: 'translateY(0)' }}
            animate={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' }}
            transition={{ duration: 0.3 }}
            className='intro-comment'
        >
            <picture>
                <source media="(min-width: 768px)" srcSet={srcSetDesktopWebP} type="image/webp" />
                <source media="(min-width: 768px)" srcSet={srcSetDesktopPNG} type="image/png" />
                <source srcSet={srcSetMobileWebP} type="image/webp" />
                <img src={srcSetMobilePNG} alt={alt} width={width} height={height} />
            </picture>
        </motion.div>
    )
}

export default IntroComment