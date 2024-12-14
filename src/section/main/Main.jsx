import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap'
import mainBgImg from '../../assets/images/main-bg.png';
import mainTitleImg from '../../assets/images/main-title.png';
import './Main.scss'

const Main = () => {
    return (
        <section id='home' className='home-section'>
            <picture>
                <img src={mainBgImg} alt="featured-1" className='main-bg' />
            </picture>
            <Container>
                <div className="main-heading">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <picture>
                            <img src={mainTitleImg} alt="Logo" className='img-fluid' />
                        </picture>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Main