import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap'
import mainBgImg from '../../assets/images/main-bg.png';
import mainBgWebp from '../../assets/images/main-bg.webp';
import './Main.scss'

const Main = () => {
    return (
        <section id='home' className='home-section'>
            <picture>
                <source srcSet={mainBgWebp} type="image/webp" />
                <img src={mainBgImg} alt="featured-1" className='main-bg'/>
            </picture>
            <Container>
                <div className="main-heading">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        專業代租 安心代管<br/>
                        打造無憂租屋體驗
                    </motion.h1>
                </div>
            </Container>
        </section>
    )
}

export default Main