import React from 'react'
import { motion } from 'framer-motion';
import { Container, Nav, Navbar, Modal } from 'react-bootstrap';
import LogoImg from '../../assets/images/logo.png'
import LogoWebp from '../../assets/images/logo.webp'
import './Header.scss'

const Header = () => {
    const [show, setShow] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('');
    const modalRef = React.useRef(null);
    const navRef = React.useRef(null);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        setTimeout(() => {
            const hash = window.location.hash;
            if (modalRef.current) {
                const links = modalRef.current.dialog.querySelectorAll('a[href]');
                links.forEach(link => {
                    if (link.getAttribute('href') === hash) {
                        handleSelect(link.getAttribute('href'))
                    }
                });
            }
        }, 0);
    };

    const handleActive = () => {
        const hash = window.location.hash;
        if (navRef.current) {
            const links = navRef.current.querySelectorAll('a[href]');
            links.forEach(link => {
                if (link.getAttribute('href') === hash) {
                   handleSelect(link.getAttribute('href'))
                }
            });
        }
    };

    const handleResize = () => {
        if (window.innerWidth > 991.98) {
            setShow(false);
        }
    };

    const handleSelect = (selectedKey) => {
        setActiveLink(selectedKey);
    };

    const handleHashChange = () => {
        const newHash = window.location.hash;
        setActiveLink(newHash);
    };

    React.useEffect(() => {
        handleActive()
        window.addEventListener('resize', handleResize);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <>
            <Navbar fixed="top" expand="lg">
                <Container className='py-3'>
                    <Navbar.Brand href="#home">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <picture>
                                <source srcSet={LogoWebp} type="image/webp" />
                                <img src={LogoImg} alt="Logo" width={100} height={26.8} />
                            </picture>
                        </motion.div>
                    </Navbar.Brand>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleShow}
                    >
                        <Navbar.Toggle>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ff0000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </Navbar.Toggle>
                    </motion.div>
                    
                    <Modal show={show} onHide={handleClose} ref={modalRef}>
                        <Modal.Header onClick={handleClose} className='d-lg-none'>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill='#fe0000' d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </Modal.Header>

                        <Modal.Body className='d-lg-none'>
                            <Nav className='main-navbar' activeKey={activeLink} onSelect={handleSelect}>
                                <Nav.Link onClick={handleClose} eventKey="#home" href="#home" className={activeLink === '#home' ? 'active' : ''}>吉屋租賃</Nav.Link>
                                <Nav.Link onClick={handleClose} eventKey="#intro" href="#intro" className={activeLink === '#intro' ? 'active' : ''}>房東服務</Nav.Link>
                                <Nav.Link onClick={handleClose} eventKey="#services" href="#services" className={activeLink === '#services' ? 'active' : ''}>專業經營</Nav.Link>
                                <Nav.Link onClick={handleClose} eventKey="#featured" href="#featured" className={activeLink === '#featured' ? 'active' : ''}>品質保證</Nav.Link>
                                <Nav.Link onClick={handleClose} eventKey="#location" href="#location" className={activeLink === '#location' ? 'active' : ''}>服務成果</Nav.Link>
                                <Nav.Link onClick={handleClose} eventKey="#contact" href="#contact" className={activeLink === '#contact' ? 'active' : ''}>聯絡諮詢</Nav.Link>
                            </Nav>
                        </Modal.Body>
                    </Modal>
                </Container>
            </Navbar>

            <Navbar className='p-0'>
                <Nav className='aside-navbar' activeKey={activeLink} onSelect={handleSelect} ref={navRef}>
                    <Nav.Link eventKey="#home" href="#home" className={activeLink === '#home' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill='#fff' d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link eventKey="#intro" href="#intro" className={activeLink === '#intro' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill='#fff' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link eventKey="#services" href="#services" className={activeLink === '#services' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill='#fff' d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link eventKey="#featured" href="#featured" className={activeLink === '#featured' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill='#fff' d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link eventKey="#location" href="#location" className={activeLink === '#location' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill='#fff' d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                    </Nav.Link>
                    <Nav.Link eventKey="#contact" href="#contact" className={activeLink === '#contact' ? 'active' : ''}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill='#fff' d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </svg>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header