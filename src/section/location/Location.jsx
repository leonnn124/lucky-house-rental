import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import MapImg from '../../assets/images/map.png'
import MapWebp from '../../assets/images/map.webp'
import Beitun from '../../assets/images/beitun.png'
import Taiping from '../../assets/images/taiping.png'
import Tanzi from '../../assets/images/tanzi.png'
import Daya from '../../assets/images/daya.png'
import Shalu from '../../assets/images/shalu.png'
import Xitun from '../../assets/images/xitun.png'
import Nantun from '../../assets/images/nantun.png'
import Dali from '../../assets/images/dali.png'
import South from '../../assets/images/south.png'
import East from '../../assets/images/east.png'
import West from '../../assets/images/west.png'
import North from '../../assets/images/north.png'
import { Container, Tab, Tabs } from 'react-bootstrap'
import './Location.scss'

const Location = () => {
    const controls = useAnimation();
    const refs = Array.from({ length: 2 }, () => React.useRef(null));
    const inViews = refs.map(ref => useInView(ref, { triggerOnce: true }));
    const [key, setKey] = React.useState('beitun');

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
        <section id='location' className='location-section'>
            <Container>
                <motion.div
                    ref={refs[0]}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="location-heading">
                    <h2>有<span>吉屋</span>，找<span>吉屋</span></h2>
                </motion.div>

                <motion.div
                    ref={refs[1]}
                    initial="hidden"
                    animate={controls}
                    variants={simpleVariants}
                    transition={{ duration: 0.5 }}
                    className='location-content'>
                        <picture>
                            <source srcSet={MapWebp} type="image/webp" />
                            <img src={MapImg} alt="台中市地圖" className='img-fluid'/>
                        </picture>
                        <div className="location-dot futan"></div>
                        <div className="location-dot chongde"></div>
                        <div className="location-dot houzhuang"></div>
                        <div className="location-dot dayi"></div>
                        <div className="location-dot changping"></div>
                        <div className="location-dot beiping"></div>
                        <div className="location-dot wenhua"></div>
                        <div className="location-dot sheraton"></div>
                        <div className="location-dot yunjiang"></div>
                        <div className="location-dot zhennan"></div>
                        <div className="location-dot haohan"></div>
                </motion.div>

                <motion.div
                    ref={refs[1]}
                    initial="hidden"
                    animate={controls}
                    variants={simpleVariants}
                    transition={{ duration: 0.5 }}
                    className='location-tab'>
                        <Tabs
                            id="location-tab-nav"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 border-0"
                        >
                            <Tab eventKey="beitun" title="北屯區">
                                <img src={Beitun} alt="北屯區" className='img-fluid'/>
                                <div className="location-dot chongde lg"></div>
                                <div className="location-dot houzhuang lg"></div>
                                <div className="location-dot dayi lg"></div>
                                <div className="location-dot changping lg"></div>
                                <div className="location-dot beiping lg"></div>
                            </Tab>
                            <Tab eventKey="north" title="北區" className='text-center' style={{width: '250px'}}>
                                <img src={North} alt="北區" className='img-fluid' width={400}/>
                            </Tab>
                            <Tab eventKey="west" title="西區" className='text-center' style={{width: '250px'}}>
                                <img src={West} alt="西區" className='img-fluid' width={400}/>
                            </Tab>
                            <Tab eventKey="east" title="東區" className='text-center' style={{width: '250px'}}>
                                <img src={East} alt="東區" className='img-fluid' width={400}/>
                                <div className="location-dot haohan lg"></div>
                            </Tab>
                            <Tab eventKey="south" title="南區" className='text-center' style={{width: '250px'}}>
                                <img src={South} alt="南區" className='img-fluid' width={400}/>
                                <div className="location-dot yunjiang lg"></div>
                            </Tab>
                            <Tab eventKey="xitun" title="西屯區">
                                <img src={Xitun} alt="西屯區" className='img-fluid'/>
                                <div className="location-dot wenhua lg"></div>
                                <div className="location-dot sheraton lg"></div>
                            </Tab>
                            <Tab eventKey="shalu" title="沙鹿區">
                                <img src={Shalu} alt="沙鹿區" className='img-fluid'/>
                                <div className="location-dot zhennan lg"></div>
                            </Tab>
                            <Tab eventKey="tanzi" title="潭子區">
                                <img src={Tanzi} alt="潭子區" className='img-fluid'/>
                                <div className="location-dot futan lg"></div>
                            </Tab>
                            <Tab eventKey="nantun" title="南屯區">
                                <img src={Nantun} alt="南屯區" className='img-fluid'/>
                            </Tab>
                            <Tab eventKey="taiping" title="太平區">
                                <img src={Taiping} alt="太平區" className='img-fluid'/>
                            </Tab>
                            <Tab eventKey="dali" title="大里區">
                                <img src={Dali} alt="大里區" className='img-fluid'/>
                            </Tab>
                            <Tab eventKey="daya" title="大雅區">
                                <img src={Daya} alt="大雅區" className='img-fluid'/>
                            </Tab>
                        </Tabs>
                </motion.div>
            </Container>
        </section>
    )
}

export default Location