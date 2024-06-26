import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
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
    const controls = useAnimation();
    const refs = Array.from({ length: 7 }, () => React.useRef(null));
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
        <section id='featured' className='featured-section'>
            <Container>
                <motion.div
                    ref={refs[0]}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="featured-heading">
                        <h2>房屋出租，交給<span>吉屋</span></h2>
                        <h5 className='mt-4'><i>- 房東最安心的租屋管家 -</i></h5>
                </motion.div>
                
                <div className="featured-content">
                    <div className="content-box">
                        <motion.div
                        ref={refs[1]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
                        transition={{ duration: 0.5 }}
                        className="content-item span-2">
                        <h5>編制專業團隊</h5>
                        <picture>
                            <source srcSet={FeaturedWebp1} type="image/webp" />
                            <img src={FeaturedImg1} alt="編制專業團隊" width={450} height={450} className='img-fluid'/>
                        </picture>
                        </motion.div>
                        <motion.div
                        ref={refs[2]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
                        transition={{ duration: 0.5 }}
                        className="content-item">
                        <h5>租屋專家</h5>
                        <picture>
                            <source srcSet={FeaturedWebp4} type="image/webp" />
                            <img src={FeaturedImg4} alt="租屋專家" width={200} height={200} className='img-fluid'/>
                        </picture>
                        </motion.div>
                        <motion.div
                        ref={refs[3]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
                        transition={{ duration: 0.5 }}
                        className="content-item">
                        <h5>安心管家</h5>
                        <picture>
                            <source srcSet={FeaturedWebp5} type="image/webp" />
                            <img src={FeaturedImg5} alt="安心管家" width={200} height={200} className='img-fluid'/>
                        </picture>
                        </motion.div>
                    </div>
                    <div className="content-box">
                        <motion.div
                        ref={refs[4]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
                        transition={{ duration: 0.5 }}
                        className="content-item">
                        <h5>專業認證</h5>
                        <picture>
                            <source srcSet={FeaturedWebp2} type="image/webp" />
                            <img src={FeaturedImg2} alt="專業認證" width={200} height={200} className='img-fluid'/>
                        </picture>
                        </motion.div>
                        <motion.div
                        ref={refs[5]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
                        transition={{ duration: 0.5 }}
                        className="content-item">
                        <h5>每月收支報表</h5>
                        <picture>
                            <source srcSet={FeaturedWebp3} type="image/webp" />
                            <img src={FeaturedImg3} alt="每月收支報表" width={200} height={200} className='img-fluid'/>
                        </picture>
                        </motion.div>
                        <motion.div
                        ref={refs[6]}
                        initial="hidden"
                        animate={controls}
                        variants={simpleVariants}
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