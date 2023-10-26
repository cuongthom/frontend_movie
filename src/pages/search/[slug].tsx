import AppLayout from '@/layouts/AppLayout';
import React, { useState, useEffect } from 'react'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Col, Dropdown, Row, Space } from 'antd';
import DropdownMovie from '@/components/dropdow/DropdownMovie';
import ItemMovie from '@/components/itemMovie/ItemMovie';
import Movie from '../../../public/image/Toiackinhhoang.png'
import { useParams } from 'next/navigation'
import { Pagination } from 'antd';
import { useRouter } from 'next/router';

function search() {
    const [name, setName] = useState<string>('')
    const router = useRouter();
    const { slug: category } = router.query;
    const searchName = () => {

        if (category === 'phim-bo') {
            setName('PHIM BỘ')
        }
        else if (category === 'phim-moi') {
            setName('PHIM MỚI')
        }
        else if (category === 'phim-le') {
            setName('PHIM LẺ')
        }
        else if (category === 'phim-chieu-rap') {
            setName('PHIM CHIẾU RẠP')
        }
        else {
            setName('PHIM THUYẾT MINH')
        }
    }
    useEffect(() => {
        if (!category) return
        searchName()
    }, [category])
    const items: MenuProps['items'] = [
        {
            label: <p>1st menu item</p>,
            key: '0',
        },

    ];
    return (
        <>
            <div className='grid-container'>
                <h2 style={{ textAlign: 'center', fontSize: '25px', padding: '20px' }}>{name}</h2>
                <div className='flex flexstyle' >
                    <DropdownMovie title={'Mới Cập Nhật'} items={items} style={'wrap-dropdown'} />
                    <DropdownMovie title={'Thể Loại'} items={items} style={'wrap-dropdown'} />
                    <DropdownMovie title={'Quốc Gia'} items={items} style={'wrap-dropdown'} />
                    <DropdownMovie title={'Phim Bộ/Phim Lẻ'} items={items} style={'wrap-dropdown'} />
                    <DropdownMovie title={'Năm Sản Xuất'} items={items} style={'wrap-dropdown'} />
                </div>
                <div className='' style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '30px' }}>
                    <button className='' style={{ backgroundColor: 'red', width: '100px', padding: '10px', borderRadius: '10px' }}>
                        Search
                    </button>
                </div>
                <div style={{ padding: '20px' }}>

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
            </div >
            <div className='grid-container'>
                <Pagination style={{ width: '100%' }} defaultCurrent={1} total={500} />
            </div>
        </>
    )
}
search.getLayout = (page: any) => <AppLayout>{page}</AppLayout>;
export default search