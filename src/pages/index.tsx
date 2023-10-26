import ItemMovie from '@/components/itemMovie/ItemMovie';
import Responsive from '@/components/slideShow/Slide';
import AppLayout from '@/layouts/AppLayout';
import { Col, Row } from 'antd';
import Movie from '../../public/image/Toiackinhhoang.png'
import React from 'react'
import Image from 'next/image';
import Logo from '../../public/image/Logo.png'

import TaskbarTrendding from '@/components/taskbar/TaskbarTrendding';
import { useRouter } from 'next/router';
function Home() {
    const router = useRouter();

    return (
        <div >
            <div className='grid-container '>
                <Responsive image={Movie} title={"toi ac kinh hoang"} styleImage={'movie-item-slide'} styleTitle={'text-slide'} style={'wrap-itemmovie'} />
            </div>
            <div className='flex grid-container' >
                <div className='wrap-title' >
                    <h2 className='pd-text'>PHIM LẺ</h2>
                    <Row gutter={{ xs: 2, sm: 8, md: 16, lg: 24 }}>
                        
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12} onClick={() => router.push('/movie/toi-ac-kinh-hoang')}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng hoàng hoàng hoàng hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                    </Row>
                    <h2 className='pd-text'>PHIM HOẠT HÌNH</h2>
                    <Row gutter={{ xs: 2, sm: 8, md: 16, lg: 24 }}>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng hoàng hoàng hoàng hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                        <Col className="gutter-row" xl={6} lg={6} md={8} sm={12}>
                            <ItemMovie styleTitle={'title-item'} styleImage={'movie-item'} style={'item-movie-title'} image={Movie} title={'tội ác kinh hoàng'} />
                        </Col>
                    </Row>
                </div>
                <TaskbarTrendding/>
            </div>
        </div>
    )
}



Home.getLayout = (page: any) => <AppLayout>{page}</AppLayout>;
export default Home