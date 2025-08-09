import React from 'react'
import './Widget.scss'
import MessageImg from '../../assets/images/message.svg'
import LineImg from '../../assets/images/line.svg'
import PhoneImg from '../../assets/images/phone.svg'
import { motion, useAnimation } from 'framer-motion';

const Widget = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const [isExpanded, setIsExpanded] = React.useState(false);

    React.useEffect(() => {
        // 組件掛載後觸發動畫
        controls.start("visible");
    }, [controls]);

    // 監聽點擊區域外的事件
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        // 只有當展開時才添加監聽器
        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded]);

    const widgetVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            y: 50  // 從下方開始，往上淡入
        },
    };

    const lineVariants = {
        collapsed: {
            opacity: 0,
            scale: 0,
            x: 30,  // 從右邊開始
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        expanded: {
            opacity: 1,
            scale: 1,
            x: 0,   // 移動到原位置
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const phoneVariants = {
        collapsed: {
            opacity: 0,
            scale: 0,
            x: 30,  // 從右邊開始
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1  // 延遲顯示，創造階梯式動畫效果
            }
        },
        expanded: {
            opacity: 1,
            scale: 1,
            x: 0,   // 移動到原位置
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <motion.div
                ref={ref}
                className="widget-content"
                initial="hidden"
                animate={controls}
                variants={widgetVariants}
            >
                <motion.a
                    href='tel:0422339333'
                    className='phone'
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={phoneVariants}
                >
                    <motion.picture>
                        <img src={PhoneImg} alt="phone" width={75} height={75} className='qrcode' />
                    </motion.picture>
                </motion.a>

                <motion.a
                    href='https://line.me/R/ti/p/@pcl0859g'
                    target='_blank'
                    className='line'
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={lineVariants}
                >
                    <motion.picture>
                        <img src={LineImg} alt="line" width={75} height={75} className='qrcode' />
                    </motion.picture>
                </motion.a>

                <motion.div
                    className='message'
                    onClick={handleToggle}
                    style={{ cursor: 'pointer' }}
                >
                    <motion.picture>
                        <img src={MessageImg} alt="message" width={75} height={75} className='qrcode' />
                    </motion.picture>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Widget