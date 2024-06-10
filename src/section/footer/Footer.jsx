import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap'
import './Footer.scss'

const Footer = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true });

    const footerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
        },
    };
    
    const itemVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 20 },
    };
    
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);
    
    return (
        <section id='contact' className='footer-section'>
            <hr />
            <Container>
                <motion.div
                    ref={ref}
                    className="footer-content py-lg-4 py-3"
                    initial="hidden"
                    animate={controls}
                    variants={footerVariants}
                >
                    <motion.picture variants={itemVariants}>
                        <source srcSet="src/assets/images/logo.webp" type="image/webp" />
                        <img src="src/assets/images/logo.jpg" alt="Logo" width={200} height={53.6} />
                    </motion.picture>

                    <motion.p className='content-heading' variants={itemVariants}>包 租 ｜ 代 租 ｜ 代 管 ｜ 清 潔</motion.p>

                    <motion.p variants={itemVariants}>吉屋租賃有限公司</motion.p>

                    <motion.p variants={itemVariants}>42880007</motion.p>

                    <motion.p variants={itemVariants}>TEL / <a href="tel:04-22339333">04-2233-9333</a></motion.p>

                    <motion.p variants={itemVariants}>ADDRESS / <span>台中市北屯區昌平路一段220號2F</span></motion.p>

                    <motion.picture variants={itemVariants}>
                        <source srcSet="src/assets/images/qrcode.webp" type="image/webp" />
                        <img src="src/assets/images/qrcode.png" alt="qrcode" width={75} height={75} />
                    </motion.picture>
                </motion.div>
            </Container>
        </section>
    )
}

export default Footer