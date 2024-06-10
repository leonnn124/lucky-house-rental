import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import Group from '../../assets/images/Group.png'
import { Container } from 'react-bootstrap'
import './Location.scss'

const Location = () => {
    const controls = useAnimation();
    const refs = Array.from({ length: 2 }, () => React.useRef(null));
    const inViews = refs.map(ref => useInView(ref, { triggerOnce: true }));

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const simpleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    React.useEffect(() => {
        inViews.forEach((inView, index) => {
        if (inView) {
            controls.start(index === 0 ? 'visible' : 'visible');
        }
        });
    }, [controls, inViews]);

    return (
        <section id='location' className='location-section'>
            <Container>
                <motion.div
                    ref={refs[0]}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="location-heading">
                    <h2>有<span>吉屋</span>，找<span>吉屋</span></h2>
                </motion.div>

                <motion.div
                    ref={refs[1]}
                    initial="hidden"
                    animate={controls}
                    variants={simpleVariants}
                    transition={{ duration: 0.5 }}
                    className='location-content'>
                        <img src={Group} alt="" className='img-fluid'/>
                        <div className="location-dot changping"></div>
                        <div className="location-dot wenhua"></div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Location