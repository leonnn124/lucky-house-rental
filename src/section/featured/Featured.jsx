import React from 'react'
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap'
import FeaturedImg1 from '../../assets/images/featured-1.png'
import FeaturedWebp1 from '../../assets/images/featured-1.webp'
import FeaturedImg2 from '../../assets/images/featured-2.png'
import FeaturedWebp2 from '../../assets/images/featured-2.webp'
import FeaturedImg3 from '../../assets/images/featured-3.png'
import FeaturedWebp3 from '../../assets/images/featured-3.webp'
import FeaturedImg4 from '../../assets/images/featured-4.png'
import FeaturedWebp4 from '../../assets/images/featured-4.webp'
import FeaturedImg5 from '../../assets/images/featured-5.png'
import FeaturedWebp5 from '../../assets/images/featured-5.webp'
import FeaturedImg6 from '../../assets/images/featured-6.png'
import FeaturedWebp6 from '../../assets/images/featured-6.webp'
import './Featured.scss'

const Featured = () => {
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
    const ref6 = React.useRef(null);
    const inView6 = useInView(ref6, { triggerOnce: true });
    const ref7 = React.useRef(null);
    const inView7 = useInView(ref7, { triggerOnce: true });

    return (
        <section id='featured' className='featured-section'>
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.3 }}
                    className="featured-heading">
                    <h2>交給<span>吉屋</span>，安心出租</h2>
                </motion.div>
                
                <div className="featured-content">
                    <div className="content-box">
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView2 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="content-item span-2">
                            <h5>優質服務</h5>
                            <picture>
                                <source srcSet={FeaturedWebp1} type="image/webp" />
                                <img src={FeaturedImg1} alt="featured-1" width={450} height={450} className='img-fluid'/>
                            </picture>
                        </motion.div>
                        <motion.div
                            ref={ref3}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView3 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="content-item">
                            <h5>提高效率</h5>
                            <picture>
                                <source srcSet={FeaturedWebp4} type="image/webp" />
                                <img src={FeaturedImg4} alt="featured-4" width={200} height={200} className='img-fluid'/>
                            </picture>
                        </motion.div>
                        <motion.div
                            ref={ref4}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView4 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="content-item">
                            <h5>省心省力</h5>
                            <picture>
                                <source srcSet={FeaturedWebp5} type="image/webp" />
                                <img src={FeaturedImg5} alt="featured-5" width={200} height={200} className='img-fluid'/>
                            </picture>
                        </motion.div>
                    </div>
                    <div className="content-box">
                        <motion.div
                            ref={ref5}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView5 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="content-item">
                            <h5>專業認證</h5>
                            <picture>
                                <source srcSet={FeaturedWebp2} type="image/webp" />
                                <img src={FeaturedImg2} alt="featured-2" width={200} height={200} className='img-fluid'/>
                            </picture>
                        </motion.div>
                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView6 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="content-item">
                            <h5>可靠穩定</h5>
                            <picture>
                                <source srcSet={FeaturedWebp3} type="image/webp" />
                                <img src={FeaturedImg3} alt="featured-3" width={200} height={200} className='img-fluid'/>
                            </picture>
                        </motion.div>
                        <motion.div
                            ref={ref7}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView7 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                             className="content-item span-2">
                            <h5>專業管理</h5>
                            <picture>
                                <source srcSet={FeaturedWebp6} type="image/webp" />
                                <img src={FeaturedImg6} alt="featured-6" width={450} height={450} className='img-fluid'/>
                            </picture>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Featured