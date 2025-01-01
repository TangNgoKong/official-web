import React, { useEffect, useRef, useState } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import { useInView } from "motion/react"
import './OurBenefit.scss';

import Film from '../../assets/images/home/film.png';
import Ink1 from '../../assets/images/home/ink1.png';
import Ink2 from '../../assets/images/home/ink2.png';
import Ink3 from '../../assets/images/home/ink3.png';

const RotateFilm = () => {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const rotate = useTransform(smoothVelocity, [0, 4000], [0, 360], { clamp: false });
    return (
        <motion.div className='scroller' style={{rotate}} >
            <img src={Film} alt='film' />
        </motion.div>
    );
}

const BenefitItem = ({number, bgImg, context}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 'all' });

    return (
        <div className={`benefit-item ${number % 2 === 0 ? 'reverse' : ''}`} ref={ref}>
            <div className={`item-number`}>
                <div className={`number ${isInView ? 'neon' : ''}`}>{number}</div>
                {bgImg}
            </div>
            <div className='context'>{context}</div>
        </div>
    );
}

const OurBenefit = () => {
    return (
        <div className='our-benifit-container'>
            <div className='title'>
                <RotateFilm/>
                <h2>點解要聽我講</h2>
                <RotateFilm/>
            </div>
        <BenefitItem
            number={1}
            bgImg={<img className='ink' id='ink1' src={Ink1} alt='ink1'/>}
            context={'我地唔做一次性嘅廣告投放\n而係建立長期嘅品牌價值'}
        />
        <BenefitItem
            number={2}
            bgImg={<img className='ink' id='ink2' src={Ink2} alt='ink2'/>}
            context={'我地重視前期策略規劃\n確保每一分廣告預算都能發揮最大效益'}
        />
        <BenefitItem
            number={3}
            bgImg={<img className='ink' id='ink3' src={Ink3} alt='ink3'/>}
            context={'我地從消費者需求出發\n打造真正有共鳴嘅內容'}
        />
        </div>
    );
};

export default OurBenefit;