import React, { useEffect, useState, useRef } from 'react';
import './Banner.scss';
import { useGlobalContext } from '../../globalContext';
import actionType from '../../actionType';

// image
import Tang from '../../assets/images/common/tang.svg';
import Ngo from '../../assets/images/common/ngo.svg';
import Kong from '../../assets/images/common/kong.svg';

const Banner = () => {
    const { state, dispatch } = useGlobalContext();

    const bannerContainerRef = useRef(null);
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    const [downPercentage, setDownPercentage] = useState(0);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        let timeout;

        const onScroll = () => {
            setIsScroll(true);
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }
            const position = Math.abs(bannerContainerRef.current.getBoundingClientRect().top - 64);
            const height = bannerContainerRef.current.getBoundingClientRect().height;
            setDownPercentage(Math.min(1, Math.max(0, position / height)));
            prevScrollY.current = currentScrollY;

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsScroll(false);
            }, 150);
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    useEffect(() => {
        dispatch({ type: actionType.APP_SHOW_NAV_LOGO, payload: downPercentage === 1 });
    }, [downPercentage]);

    let scrollText = `TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / TANG NGO KONG / `;

    return (
        <div className='banner-container' ref={bannerContainerRef} style={{height: window.innerHeight}}>
            <div className='banner'>
                <img className={`text tang ${isScroll ? 'stop' : ''}`} src={Tang} alt='tang'
                    style={{
                        width: `${(20 + 2) * (1-downPercentage)}rem`,
                        top: `${10 + ((100 - 10) * (downPercentage))}%`,
                        left: `${-5 + ((50 - (-5)) * (downPercentage))}%`,
                    }}
                />
                <img className={`text ngo ${isScroll ? 'stop' : ''}`} src={Ngo} alt='ngo'
                    style={{
                        width: `${(30 + 2) * (1-downPercentage)}rem`,
                        top: `${60 + (100 - 60) * (downPercentage)}%`,
                        right: `${-5 + ((50 - (-5)) * (downPercentage))}%`,
                    }}
                />
                <img className={`text kong ${isScroll ? 'stop' : ''}`} src={Kong} alt='kong' 
                    style={{
                        width: `${(10 + 2) * (1-downPercentage)}rem`,
                        top: `${0 + (100 + 0) * (downPercentage)}%`,
                        right: `${40 + ((50 - 40) * (downPercentage))}%`,
                    }}
                />
                <div className='text-wrap'>
                    <div class="text-scroll">
                        <div class="marquee">
                            <p>{scrollText}</p>
                            <p>{scrollText}</p>
                        </div>
                    </div>
                    <div className='text-banner'>
                        <div className='title'>幫你用最少嘅成本</div>
                        <div className='title'>做最大嘅<span>Marketing</span></div>
                    </div>
                    <div class="text-scroll">
                        <div class="marquee reverse">
                            <p>{scrollText}</p>
                            <p>{scrollText}</p>
                        </div>
                    </div>
                </div>

                {/* <div className='text-container'>
                    <div className='title'>我搵到客</div>
                    <div className='title'>你都要接得住</div>
                </div> */}
                {/* <div className='circle'></div> */}
            </div>
        </div>
    )
}

export default Banner;