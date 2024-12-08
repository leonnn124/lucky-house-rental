import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap'
import ServicesImg1 from '../../assets/images/services-1.png'
import ServicesImg2 from '../../assets/images/services-2.png'
import ServicesImg3 from '../../assets/images/services-3.png'
import ServicesImg4 from '../../assets/images/services-4.png'
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
                    <h2>您想要的，<span>吉屋</span>幫您</h2>
                    <h5 className='mt-4'><i>- 每月固定日收租  /  雲端電子發票 -</i></h5>
                </motion.div>
                
                <div className="services-content">
                    <Row className='justify-content-center gap-xl-5 gap-3'>
                        <Col className='px-0'>
                            <motion.div
                                ref={refs[1]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center py-5'>
                                <picture>
                                    <img src={ServicesImg3} alt="包租" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>包租</h3>

                                <p>
                                    - 全案包租<br />
                                    - 保證月租金<br />
                                    - 穩定投報率
                                </p>
                            </motion.div>
                        </Col>
                        <Col className='px-0'>
                            <motion.div
                                ref={refs[2]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center py-5'>
                                <picture>
                                    <img src={ServicesImg1} alt="代租" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代租</h3>

                                <p>
                                    - 代客尋屋<br />
                                    - 媒合房客出租<br />
                                    - 店面營業租賃
                                </p>
                            </motion.div>
                        </Col>
                        <Col className='px-0'>
                            <motion.div
                                ref={refs[3]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center py-5'>
                                <picture>
                                    <img src={ServicesImg2} alt="代管" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>代管</h3>

                                <p>
                                    - 租屋管理<br />
                                    - 代理房東服務<br />
                                    - 專業修繕維護
                                </p>
                            </motion.div>
                        </Col>
                        <Col className='px-0'>
                            <motion.div
                                ref={refs[4]}
                                initial="hidden"
                                animate={controls}
                                variants={simpleVariants}
                                transition={{ duration: 0.5 }}
                                className='d-flex flex-column align-items-center gap-3 text-center py-5'>
                                <picture>
                                    <img src={ServicesImg4} alt="清潔" width={200} height={200} className='img-fluid px-5'/>
                                </picture>

                                <h3>清潔</h3>

                                <p>
                                    - 房屋退租清潔<br />
                                    - 定期清潔保養
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Services