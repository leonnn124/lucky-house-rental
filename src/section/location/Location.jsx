import React from 'react'
import { motion, useInView } from 'framer-motion';
import Group from '../../assets/images/Group.png'
import { Container } from 'react-bootstrap'
import './Location.scss'

const Location = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { triggerOnce: true });
    const ref2 = React.useRef(null);
    const inView2 = useInView(ref2, { triggerOnce: true });

    return (
        <section id='location' className='location-section'>
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.3 }}
                    className="location-heading">
                    <h2>有<span>吉屋</span>，找<span>吉屋</span></h2>
                </motion.div>

                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView2 ? 1 : 0 }}
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