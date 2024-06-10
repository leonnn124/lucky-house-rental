import React from 'react'
import { motion, useInView } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap'
import './Services.scss'

const Services = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { triggerOnce: true });
    const ref2 = React.useRef(null);
    const inView2 = useInView(ref2, { triggerOnce: true });
    const ref3 = React.useRef(null);
    const inView3 = useInView(ref3, { triggerOnce: true });
    const ref4 = React.useRef(null);
    const inView4 = useInView(ref4, { triggerOnce: true });
    const ref5 = React.useRef(null);
    const inView5 = useInView(ref5, { triggerOnce: true });

    return (
        <section id='services' className='services-section'>
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.3 }}
                    className="services-heading">
                    <h2>你想要的，<span>吉屋</span>幫你</h2>
                </motion.div>
                <div className="services-content">
                    <Row>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={ref2}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView2 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet="src/assets/images/services-1.webp" type="image/webp" />
                                    <img src="src/assets/images/services-1.png" alt="services-1" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代租</h3>

                                <p>描述描述描述<br />描述描述描述描述描述描述<br />描述描述描述描述<br />描述描述描述<br />描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={ref3}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView3 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet="src/assets/images/services-2.webp" type="image/webp" />
                                    <img src="src/assets/images/services-2.png" alt="services-1" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代管</h3>

                                <p>描述描述描述描述描述<br />描述描述描述描述描述描述<br />描述描述描述描述描述<br />描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={ref4}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView4 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet="src/assets/images/services-3.webp" type="image/webp" />
                                    <img src="src/assets/images/services-3.png" alt="services-1" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>包租</h3>

                                <p>描述描述<br />描述描述描述描述<br />描述描述描述<br />描述描述描述描述描述<br />描述描述描述描述</p>
                            </motion.div>
                        </Col>
                        <Col lg={3} sm={6} className='p-3'>
                            <motion.div
                                ref={ref5}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView5 ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center'>
                                <picture>
                                    <source srcSet="src/assets/images/services-4.webp" type="image/webp" />
                                    <img src="src/assets/images/services-4.png" alt="services-1" width={200} height={200} className='img-fluid px-5'/>
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