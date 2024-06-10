import React from 'react'
import { Container } from 'react-bootstrap'
import { motion, useInView } from 'framer-motion';
import IntroComment from './IntroComment'
import './Intro.scss'

const Intro = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref);

    const comments = [
        {
          srcSetDesktopWebP: "src/assets/images/intro-1.webp",
          srcSetDesktopPNG: "src/assets/images/intro-1.png",
          srcSetMobileWebP: "src/assets/images/intro-md-1.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-1.png",
          alt: "intro-1"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-2.webp",
          srcSetDesktopPNG: "src/assets/images/intro-2.png",
          srcSetMobileWebP: "src/assets/images/intro-md-2.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-2.png",
          alt: "intro-2"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-3.webp",
          srcSetDesktopPNG: "src/assets/images/intro-3.png",
          srcSetMobileWebP: "src/assets/images/intro-md-3.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-3.png",
          alt: "intro-3"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-4.webp",
          srcSetDesktopPNG: "src/assets/images/intro-4.png",
          srcSetMobileWebP: "src/assets/images/intro-md-4.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-4.png",
          alt: "intro-4"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-5.webp",
          srcSetDesktopPNG: "src/assets/images/intro-5.png",
          srcSetMobileWebP: "src/assets/images/intro-md-5.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-5.png",
          alt: "intro-5"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-6.webp",
          srcSetDesktopPNG: "src/assets/images/intro-6.png",
          srcSetMobileWebP: "src/assets/images/intro-md-6.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-6.png",
          alt: "intro-6"
        },
        {
          srcSetDesktopWebP: "src/assets/images/intro-7.webp",
          srcSetDesktopPNG: "src/assets/images/intro-7.png",
          srcSetMobileWebP: "src/assets/images/intro-md-7.webp",
          srcSetMobilePNG: "src/assets/images/intro-md-7.png",
          alt: "intro-7"
        }
    ];

    return (
        <section id='intro' className='intro-section'>
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className='intro-nav'
                >
                    <span>您是否也遇到這些問題？</span>
                </motion.div>

                <div className='intro-content'>
                    {comments.map((comment, index) => (
                        <IntroComment
                            key={index}
                            srcSetDesktopWebP={comment.srcSetDesktopWebP}
                            srcSetDesktopPNG={comment.srcSetDesktopPNG}
                            srcSetMobileWebP={comment.srcSetMobileWebP}
                            srcSetMobilePNG={comment.srcSetMobilePNG}
                            alt={comment.alt}
                            width={500}
                            height={141.85}
                        />
                    ))}
                </div>
            </Container>
            
        </section>
    )
}

export default Intro