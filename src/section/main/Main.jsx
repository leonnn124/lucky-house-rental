import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap'
import './Main.scss'

const Main = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { triggerOnce: true });
    
    return (
        <section id='home' className='home-section'>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='main-bg'>
                <Container>
                    <div className="main-heading">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            專業代租 細心代管<br/>
                            打造無憂租居體驗
                        </motion.h1>
                    </div>
                </Container>
            </motion.div>
        </section>
    )
}

export default Main