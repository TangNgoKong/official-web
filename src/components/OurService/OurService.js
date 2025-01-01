import React, { useEffect, useRef, useState } from 'react';
import './OurService.scss';
import { useInView } from "motion/react"

import Service1 from '../../assets/images/home/service1.gif';
import Service2 from '../../assets/images/home/service2.gif';
import Service3 from '../../assets/images/home/service3.gif';
import Service4 from '../../assets/images/home/service4.gif';

const ServiceItem = ({number, title, context, img}) => {
    return (
        <div className='service-item'>
            <div className='left'>
                <div className='item-row'>
                    <div className={`item-number`}>{number}</div>
                    <div className='item-detail'>
                        <div className={`item-title`}>{title}</div>
                        <div className='item-context'>{context}</div>
                    </div>
                </div>
                <div className='item-boxs'>
                    {
                        Array.from({ length: 5 }).map(() =>
                            <div className={`box`}></div>
                        )
                    }
                </div>
            </div>
            <div className='right'>
                {img}
            </div>
        </div>
    );
}

const OurService = () => {
    return (
        <div className='our-service-container'>
            <div className='title'>點樣聽我講</div>
            <div className='service-container'>
                <ServiceItem
                    number={1}
                    title={`初步了解`}
                    context={`傾下你想點\n睇下資助資格\n諗定成長方向`}
                    img={<img src={Service1} alt='service1'/>}
                />
                <ServiceItem
                    number={2}
                    title={`申請資助`}
                    context={`幫你申請資助\n處理文件嘢\n確保成功批核`}
                    img={<img src={Service2} alt='service2'/>}
                />
                <ServiceItem
                    number={3}
                    title={`策略規劃`}
                    context={`整定品牌定位\n設計吸引內容\n規劃宣傳方向`}
                    img={<img src={Service3} alt='service3'/>}
                />
                <ServiceItem
                    number={4}
                    title={`執行優化`}
                    context={`精準投放廣告\n監測成效數據\n持續改進方案`}
                    img={<img src={Service4} alt='service4'/>}
                />
            </div>
        </div>
    )
}

export default OurService;