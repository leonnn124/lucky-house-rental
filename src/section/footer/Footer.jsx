import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap'
import LogoImg from '../../assets/images/logo.png'
import './Footer.scss'

const Footer = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
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

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
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
                        <img src={LogoImg} alt="Logo" width={250} height={107} className='logo' />
                    </motion.picture>

                    <motion.p variants={itemVariants}>吉屋租賃有限公司</motion.p>

                    <motion.p variants={itemVariants}>42880007</motion.p>

                    <motion.p variants={itemVariants}>TEL / <a href="tel:04-22339333">04-2233-9333</a></motion.p>

                    <motion.p variants={itemVariants}>ADDRESS / <span>台中市北區文心路四段200號8F-8</span></motion.p>
                </motion.div>
            </Container>
        </section>
    )
}

export default Footer