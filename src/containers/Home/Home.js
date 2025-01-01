import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import OurBenefit from '../../components/OurBenefit/OurBenefit';
import OurService from '../../components/OurService/OurService';
import OurDifference from '../../components/OurDifference/OurDifference';

const Home = () => {
    return (
        <div className='home-container'>
            <Banner/>
            <OurBenefit/>
            <OurService/>
            <OurDifference/>
        </div>
    );
};

export default Home;
