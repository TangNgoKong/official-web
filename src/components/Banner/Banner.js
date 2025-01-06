import React, { useEffect, useState, useRef } from 'react';
import './Banner.scss';
import { useGlobalContext } from '../../globalContext';
import actionType from '../../actionType';
import useIsMobile from '../../hooks/useIsMobile' ;

// image
import Tang from '../../assets/images/common/tang.svg';
import Ngo from '../../assets/images/common/ngo.svg';
import Kong from '../../assets/images/common/kong.svg';

const Banner = () => {
    const { state, dispatch } = useGlobalContext();
    const isMobile = useIsMobile();

    const bannerContainerRef = useRef(null);
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    const [downPercentage, setDownPercentage] = useState(0);
    const [isScroll, setIsScroll] = useState(false);

    const text = !isMobile ? 
    {
        tang: {
            width: 20,
            top: 10,
            left: -5,
        },
        ngo: {
            width: 30,
            top: 60,
            right: -5,
        },
        kong: {
            width: 10,
            top: 0,
            right: 40,
        }
    } :
    {
        tang: {
            width: 10,
            top: 6,
            left: -15,
        },
        ngo: {
            width: 15,
            top: 73,
            right: -5,
        },
        kong: {
            width: 5,
            top: 0,
            right: 20,
        }
    }

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
        <div className='banner-container' ref={bannerContainerRef} style={{height: isMobile ? '100vh' : window.innerHeight}}>
            <div className='banner'>
                <img className={`text tang ${isScroll ? 'stop' : ''}`} src={Tang} alt='tang'
                    style={{
                        width: `${(text.tang.width + 2) * (1-downPercentage)}rem`,
                        top: `${text.tang.top + ((100 - text.tang.top) * (downPercentage))}%`,
                        left: `${text.tang.left + ((50 - text.tang.left) * (downPercentage))}%`,
                    }}
                />
                <img className={`text ngo ${isScroll ? 'stop' : ''}`} src={Ngo} alt='ngo'
                    style={{
                        width: `${(text.ngo.width + 2) * (1-downPercentage)}rem`,
                        top: `${text.ngo.top + (100 - text.ngo.top) * (downPercentage)}%`,
                        right: `${text.ngo.right + ((50 - text.ngo.right) * (downPercentage))}%`,
                    }}
                />
                <img className={`text kong ${isScroll ? 'stop' : ''}`} src={Kong} alt='kong' 
                    style={{
                        width: `${(text.kong.width + 2) * (1-downPercentage)}rem`,
                        top: `${text.kong.top + (100 + text.kong.top ) * (downPercentage)}%`,
                        right: `${text.kong.right + ((50 - text.kong.right) * (downPercentage))}%`,
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
            </div>
        </div>
    )
}

export default Banner;