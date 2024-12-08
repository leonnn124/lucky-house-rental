import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const IntroComment = ({
        srcSetDesktopPNG,
        srcSetMobilePNG,
        alt,
        width,
        height,
    }) => {

    const ref = React.useRef();
    const inView = useInView(ref, { triggerOnce: true });
    const controls = useAnimation();

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.3 }}
            className='intro-comment'
        >
            <picture>
                <source media="(min-width: 768px)" srcSet={srcSetDesktopPNG} type="image/png" />
                <img src={srcSetMobilePNG} alt={alt} width={width} height={height} />
            </picture>
        </motion.div>
    )
}

export default IntroComment