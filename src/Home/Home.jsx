import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

const Home = () => {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )

}
export default Home