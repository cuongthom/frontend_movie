import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImage from '../../../public/image/Logo.png'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Col, Dropdown, Row, Space } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router';
import DropdownMovie from '../dropdow/DropdownMovie';


function Header() {
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false)
  const router = useRouter();

  const Category: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='dropdow-text'>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Hành Động</p>
            <p className='pb-4'>Cổ Trang</p>
            <p className='pb-4'>Chiến Tranh</p>
            <p className='pb-4'>Viễn Tưởng</p>
            <p className='pb-4'>Kinh Dị</p>
            <p className='pb-4'>Tài Liệu</p>
          </div>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Bí ẩn</p>
            <p className='pb-4'>Tình Cảm</p>
            <p className='pb-4'>Tâm Lý</p>
            <p className='pb-4'>Hành Động</p>
            <p className='pb-4'>Thể Thao</p>
            <p className='pb-4'>Phiêu Lưu</p>
          </div>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Âm Nhạc</p>
            <p className='pb-4'>Gia Đình</p>
            <p className='pb-4'>Hài Hước</p>
            <p className='pb-4'>Hình Sự</p>
            <p className='pb-4'>Võ Thuật</p>
            <p className='pb-4'>Khoa Học</p>
          </div>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Thần Thoại</p>
            <p className='pb-4'>Chính kịch</p>
            <p className='pb-4'>Kinh Điển</p>
            <p className='pb-4'>Đam Mỹ</p>
            <p className='pb-4'>Bách Hợp</p>
            <p className='pb-4'>Phim Hoạt Hình</p>
          </div>


        </div>
      ),
    },
  ];
  const Nation: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex'>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Việt Nam</p>
            <p className='pb-4'>Thái Lan</p>
            <p className='pb-4'>Hồng Kông</p>
            <p className='pb-4'>Trung Quốc</p>
            <p className='pb-4'>Hàn Quốc</p>
            <p className='pb-4'>Âu Mỹ</p>
          </div>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Ấn Độ</p>
            <p className='pb-4'>Canada</p>
            <p className='pb-4'>Nhật Bản</p>
            <p className='pb-4'>Đài Loan</p>
            <p className='pb-4'>Anh</p>
            <p className='pb-4'>Nga</p>
          </div>
          <div className='pr-8 text-lg'>
            <p className='pb-4'>Ý</p>
            <p className='pb-4'>Quốc Gia Khác</p>

          </div>



        </div>
      ),
    },
  ];

  const CategoryHeader: MenuProps['items'] = [
    {
      label: <div className=' '>
        <p onClick={() => router.push('/')}>Trang chủ</p>
        <Dropdown menu={{ items: Category }} >
          <p onClick={(e) => e.preventDefault()}>
            <Space >
              Thể loại
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
        <Dropdown menu={{ items: Nation }}>
          <p onClick={(e) => e.preventDefault()}>
            <Space>
              Quốc gia
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
        <p onClick={() => router.push('/search/phim-moi')}>Phim mới</p>
        <p onClick={() => router.push('/search/phim-bo')}>Phim bộ</p>
        <p onClick={() => router.push('/search/phim-le')}>Phim lẻ</p>
        <p onClick={() => router.push('/search/phim-chieu-rap')}>Phim chiếu rạp</p>
        <p onClick={() => router.push('/search/phim-thuyet-minh')}>Phim thuyết minh</p>
      </div>,
      key: '0',
    },

  ];


  return (
    <div>

      <div style={{ backgroundColor: '#333333' }}>
        <div className='container-header grid-container'>
          <DropdownMovie
            title={
              <button className=''>
                <AiOutlineMenu style={{ color: 'white', fontSize: '25px' }} />
              </button>
            }
            items={CategoryHeader}
            style={'icon-menu-none'}
            dnone={'d-none'}
          />
          <button onClick={() => router.push('/')}>
            <Image
              src={logoImage}
              className='logo-header'
              alt="logo"
              priority={false || true}
            />
          </button>
          <div className='input-wrap'>
            <input className='input-header d-none' placeholder='Tìm Kiếm' />
            {!showInputSearch
              ?
              <button onClick={() => setShowInputSearch(true)}>
                <svg aria-hidden="true" className="w-5 h-5 header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-bb6499ae=""><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-bb6499ae=""></path></svg>
              </button>
              :
              <p onClick={() => setShowInputSearch(false)} style={{ fontSize: '30px' }}>x</p>
            }

          </div>
        </div>
        <div className='header-title-movie d-none'>
          <button onClick={() => router.push('/')}>Trang chủ</button>
          <Dropdown menu={{ items: Category }} >
            <button onClick={(e) => e.preventDefault()}>
              <Space >
                Thể loại
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
          <Dropdown menu={{ items: Nation }}>
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                Quốc gia
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
          <button onClick={() => router.push('/search/phim-moi')}>Phim mới</button>
          <button onClick={() => router.push('/search/phim-bo')}>Phim bộ</button>
          <button onClick={() => router.push('/search/phim-le')}>Phim lẻ</button>
          <button onClick={() => router.push('/search/phim-chieu-rap')}>Phim chiếu rạp</button>
          <button onClick={() => router.push('/search/phim-thuyet-minh')}>Phim thuyết minh</button>
        </div>
      </div>
      {showInputSearch ?
        <div className='flex' style={{ backgroundColor: '#4c4b4b', paddingLeft: '10px', paddingRight: '10px', }}>
          <input type="text" placeholder='Tìm Kiếm' style={{ width: '100%', backgroundColor: '#4c4b4b' }} className='input-search' />
          <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
            <g style={{ mixBlendMode: 'normal' }} fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path></g></g>
          </svg>
        </div>
        : ""}

    </div>
  )
}

export default Header