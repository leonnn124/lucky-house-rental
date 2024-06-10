import React from 'react'
import { Container } from 'react-bootstrap'
import { motion, useInView, useAnimation } from 'framer-motion';
import IntroImg1 from '../../assets/images/intro-1.png'
import IntroWebp1 from '../../assets/images/intro-1.webp'
import IntroImg2 from '../../assets/images/intro-2.png'
import IntroWebp2 from '../../assets/images/intro-2.webp'
import IntroImg3 from '../../assets/images/intro-3.png'
import IntroWebp3 from '../../assets/images/intro-3.webp'
import IntroImg4 from '../../assets/images/intro-4.png'
import IntroWebp4 from '../../assets/images/intro-4.webp'
import IntroImg5 from '../../assets/images/intro-5.png'
import IntroWebp5 from '../../assets/images/intro-5.webp'
import IntroImg6 from '../../assets/images/intro-6.png'
import IntroWebp6 from '../../assets/images/intro-6.webp'
import IntroImg7 from '../../assets/images/intro-7.png'
import IntroWebp7 from '../../assets/images/intro-7.webp'
import IntroMdImg1 from '../../assets/images/intro-1.png'
import IntroMdWebp1 from '../../assets/images/intro-md-1.webp'
import IntroMdImg2 from '../../assets/images/intro-md-2.png'
import IntroMdWebp2 from '../../assets/images/intro-md-2.webp'
import IntroMdImg3 from '../../assets/images/intro-md-3.png'
import IntroMdWebp3 from '../../assets/images/intro-md-3.webp'
import IntroMdImg4 from '../../assets/images/intro-md-4.png'
import IntroMdWebp4 from '../../assets/images/intro-md-4.webp'
import IntroMdImg5 from '../../assets/images/intro-md-5.png'
import IntroMdWebp5 from '../../assets/images/intro-md-5.webp'
import IntroMdImg6 from '../../assets/images/intro-md-6.png'
import IntroMdWebp6 from '../../assets/images/intro-md-6.webp'
import IntroMdImg7 from '../../assets/images/intro-md-7.png'
import IntroMdWebp7 from '../../assets/images/intro-md-7.webp'
import IntroComment from './IntroComment'
import './Intro.scss'

const Intro = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { triggerOnce: true });

    const comments = [
        {
          srcSetDesktopWebP: IntroWebp1,
          srcSetDesktopPNG: IntroImg1,
          srcSetMobileWebP: IntroMdWebp1,
          srcSetMobilePNG: IntroMdImg1,
          alt: "intro-1"
        },
        {
          srcSetDesktopWebP: IntroWebp2,
          srcSetDesktopPNG: IntroImg2,
          srcSetMobileWebP: IntroMdWebp2,
          srcSetMobilePNG: IntroMdImg2,
          alt: "intro-2"
        },
        {
          srcSetDesktopWebP: IntroWebp3,
          srcSetDesktopPNG: IntroImg3,
          srcSetMobileWebP: IntroMdWebp3,
          srcSetMobilePNG: IntroMdImg3,
          alt: "intro-3"
        },
        {
          srcSetDesktopWebP: IntroWebp4,
          srcSetDesktopPNG: IntroImg4,
          srcSetMobileWebP: IntroMdWebp4,
          srcSetMobilePNG: IntroMdImg4,
          alt: "intro-4"
        },
        {
          srcSetDesktopWebP: IntroWebp5,
          srcSetDesktopPNG: IntroImg5,
          srcSetMobileWebP: IntroMdWebp5,
          srcSetMobilePNG: IntroMdImg5,
          alt: "intro-5"
        },
        {
          srcSetDesktopWebP: IntroWebp6,
          srcSetDesktopPNG: IntroImg6,
          srcSetMobileWebP: IntroMdWebp6,
          srcSetMobilePNG: IntroMdImg6,
          alt: "intro-6"
        },
        {
          srcSetDesktopWebP: IntroWebp7,
          srcSetDesktopPNG: IntroImg7,
          srcSetMobileWebP: IntroMdWebp7,
          srcSetMobilePNG: IntroMdImg7,
          alt: "intro-7"
        }
    ];

    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    React.useEffect(() => {
      if (inView) {
          controls.start('visible');
      }
    }, [controls, inView]);

    return (
        <section id='intro' className='intro-section'>
            <Container>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5 }}
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