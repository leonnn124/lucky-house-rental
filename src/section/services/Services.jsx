import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap'
import ServicesImg1 from '../../assets/images/services-1.png'
import ServicesWebp1 from '../../assets/images/services-1.webp'
import ServicesImg2 from '../../assets/images/services-2.png'
import ServicesWebp2 from '../../assets/images/services-2.webp'
import ServicesImg3 from '../../assets/images/services-3.png'
import ServicesWebp3 from '../../assets/images/services-3.webp'
import ServicesImg4 from '../../assets/images/services-4.png'
import ServicesWebp4 from '../../assets/images/services-4.webp'
import './Services.scss'

const Services = () => {
    const controls = useAnimation();
    const refs = Array.from({ length: 5 }, () => React.useRef(null));
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
        <section id='services' className='services-section'>
            <Container>
                <motion.div
                    ref={refs[0]}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="services-heading">
                    <h2>你想要的，<span>吉屋</span>幫你</h2>
                </motion.div>
                
                <div className="services-content">
                    <Row>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={refs[1]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet={ServicesWebp1} type="image/webp" />
                                    <img src={ServicesImg1} alt="services-1" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代租</h3>

                                <p>描述描述描述<br />描述描述描述描述描述描述<br />描述描述描述描述<br />描述描述描述<br />描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={refs[2]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet={ServicesWebp2} type="image/webp" />
                                    <img src={ServicesImg2} alt="services-2" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代管</h3>

                                <p>描述描述描述描述描述<br />描述描述描述描述描述描述<br />描述描述描述描述描述<br />描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={refs[3]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet={ServicesWebp3} type="image/webp" />
                                    <img src={ServicesImg3} alt="services-3" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>包租</h3>

                                <p>描述描述<br />描述描述描述描述<br />描述描述描述<br />描述描述描述描述描述<br />描述描述描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={refs[4]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet={ServicesWebp4} type="image/webp" />
                                    <img src={ServicesImg4} alt="services-4" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>清潔</h3>

                                <p>描述描述描述<br />描述描述描述描述<br />描述描述描述描述描述描述<br />描述描述描述描述<br />描述</p>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Services