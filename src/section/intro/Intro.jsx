import React from 'react'
import { Container } from 'react-bootstrap'
import { motion, useInView, useAnimation } from 'framer-motion';
import IntroImg1 from '../../assets/images/intro-1.png'
import IntroImg2 from '../../assets/images/intro-2.png'
import IntroImg3 from '../../assets/images/intro-3.png'
import IntroImg4 from '../../assets/images/intro-4.png'
import IntroImg5 from '../../assets/images/intro-5.png'
import IntroImg6 from '../../assets/images/intro-6.png'
import IntroImg7 from '../../assets/images/intro-7.png'
import IntroMdImg1 from '../../assets/images/intro-md-1.png'
import IntroMdImg2 from '../../assets/images/intro-md-2.png'
import IntroMdImg3 from '../../assets/images/intro-md-3.png'
import IntroMdImg4 from '../../assets/images/intro-md-4.png'
import IntroMdImg5 from '../../assets/images/intro-md-5.png'
import IntroMdImg6 from '../../assets/images/intro-md-6.png'
import IntroMdImg7 from '../../assets/images/intro-md-7.png'
import IntroComment from './IntroComment'
import './Intro.scss'

const Intro = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { triggerOnce: true });

    const comments = [
        {
          srcSetDesktopPNG: IntroImg1,
          srcSetMobilePNG: IntroMdImg1,
          alt: "intro-1"
        },
        {
          srcSetDesktopPNG: IntroImg2,
          srcSetMobilePNG: IntroMdImg2,
          alt: "intro-2"
        },
        {
          srcSetDesktopPNG: IntroImg3,
          srcSetMobilePNG: IntroMdImg3,
          alt: "intro-3"
        },
        {
          srcSetDesktopPNG: IntroImg4,
          srcSetMobilePNG: IntroMdImg4,
          alt: "intro-4"
        },
        {
          srcSetDesktopPNG: IntroImg5,
          srcSetMobilePNG: IntroMdImg5,
          alt: "intro-5"
        },
        {
          srcSetDesktopPNG: IntroImg6,
          srcSetMobilePNG: IntroMdImg6,
          alt: "intro-6"
        },
        {
          srcSetDesktopPNG: IntroImg7,
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
                            srcSetDesktopPNG={comment.srcSetDesktopPNG}
                            srcSetMobilePNG={comment.srcSetMobilePNG}
                            alt={comment.alt}
                            width={500}
                            className="img-fluid"
                        />
                    ))}
                </div>
            </Container>
            
        </section>
    )
}

export default Intro