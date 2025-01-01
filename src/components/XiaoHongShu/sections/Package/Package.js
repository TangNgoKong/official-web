import React from 'react';
import './Package.scss';
import FlipCard from '../../../../utils/FlipCard/FlipCard';

import blackIcon from '../../../../assets/images/common/tnk_black_square.png';

const data = [
    {
        title: '專業筆記製作',
        benefits: [
            '專業攝影團隊',
            '吸睛短片剪輯',
            '優質文案創作',
            '熱門話題配對',
            '帳號IP定位',
            '帳號外觀設計',
        ]
    },
    {
        title: 'KOL/KOC合作',
        benefits: [
            '配對合適紅人',
            '探店直播安排',
            '真實好評分享',
            '效果數據跟進',
        ]
    },
    {
        title: '企業號代運營',
        benefits: [
            '小紅書企業號設立',
            '小紅書廣告投放',
            '粉絲互動回覆',
            '銷售功能開通',
            '帳號直播安排',
            '熱門話題追蹤',
            '站外引流設置',
            '轉化數據分析',
        ]
    },
]

const Package = () => {
    return (
        <div className='xiaohongshu-package-container'>
            <div className='title'>一站式<span>小紅書</span>營銷方案</div>
            <div className='package-wrapper'>
            {
                data.map((item, index) => {
                    return (
                        <FlipCard
                            frontContent={
                                <div className='package-card-front-2'>
                                    <div className='header'>
                                        <div className='left'>
                                            <div className='icon' style={{backgroundImage: `url(${blackIcon})`}}></div>
                                            <div className='name'>聽我講</div>
                                        </div>
                                        <div className='right'>                                        
                                            <div className='followed'>已關注</div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='content-title'>
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className='footer'>
                                        <div className='dots'>
                                            {
                                                data.map((d, i) => {
                                                    return <div className={`dot ${index === i ? 'active' : ''}`}></div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                            backContent={
                                <div className='package-card-back'>
                                    <div className='benefits-container'>
                                    {
                                        item.benefits.map((benefit, index) => {
                                            return (
                                                <div className='benefit' key={index}>· {benefit}</div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            }
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Package;