import React from 'react'
import Header from '../section/header/Header'
import Main from '../section/main/Main'
import Intro from '../section/intro/Intro'
import Services from '../section/services/Services'
import Featured from '../section/featured/Featured'
import Location from '../section/location/Location'
import Footer from '../section/footer/Footer'
import Widget from '../section/widget/Widget'

const HomePage = () => {
    const sections = ['home', 'intro', 'services', 'featured', 'location', 'contact'];
    const sectionRefs = React.useRef([]);

    const scrollToPath = (path) => {
        let sectionId = path === '/' || path === '/#' ? 'home' : path.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                const navLink = document.querySelector(`.aside-navbar a[href="${sectionId === 'home' ? '/#' : `/#${sectionId}`}"]`);

                if (entry.isIntersecting) {
                    const newUrl = sectionId === 'home' ? '/#' : `/#${sectionId}`;
                    // window.history.replaceState(null, null, newUrl);
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id, index) => {
            const element = document.getElementById(id);
            if (element) {
                sectionRefs.current[index] = element;
                observer.observe(element);
            }
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    React.useEffect(() => {
        const path = window.location.hash || '/#';
        scrollToPath(path);
    }, []);

    return (
        <>
            <Header />
            <Main />
            <Intro />
            <Services />
            <Featured />
            <Location />
            <Footer />
            <Widget />
        </>
    )
}

export default HomePage;