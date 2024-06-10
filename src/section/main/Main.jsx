import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap'
import mainBgImg from '../../assets/images/main-bg.png';
import mainBgWebp from '../../assets/images/main-bg.webp';
import './Main.scss'

const Main = () => {
    const mainBgStyle = {
        backgroundImage: `url(${mainBgImg}), url(${mainBgWebp})`,
    };

    return (
        <section id='home' className='home-section'>
            <div className='main-bg' style={mainBgStyle}>
                <img src={mainBgImg} alt="" />
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
            </div>
        </section>
    )
}

export default Main