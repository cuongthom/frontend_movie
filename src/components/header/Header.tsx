import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logoImage from '../../../public/image/Logo.png'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const category: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
  ];
  const nation: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },


  ];




  return (
    <div className='' style={{ backgroundColor: '#333333' }}>
      <div className='container-header grid-slide'>
        <button className='icon-menu-none'>
          <AiOutlineMenu style={{ color: 'white' }} />
        </button>
        <div>
          <Image
            src={logoImage}
            className='logo-header'
            alt="logo"
            priority={false || true}
          />
        </div>
        <div className='input-wrap'>
          <input className='input-header d-none' placeholder='Tìm Kiếm' />
          <button>
            <svg aria-hidden="true" className="w-5 h-5 header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-bb6499ae=""><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-bb6499ae=""></path></svg>
          </button>
        </div>
      </div>
      <div className='header-title-movie d-none'>
        <button>Trang chủ</button>
        <Dropdown menu={{ items: category }}>
          <button onClick={(e) => e.preventDefault()}>
            <Space>
              Thể loại
              <DownOutlined />
            </Space>
          </button>
        </Dropdown>
        <Dropdown menu={{ items: nation }}>
          <button onClick={(e) => e.preventDefault()}>
            <Space>
              Quốc gia
              <DownOutlined />
            </Space>
          </button>
        </Dropdown>
        <button>Phim mới</button>
        <button>Phim bộ</button>
        <button>Phim lẻ</button>
        <button>Phim chiếu rạp</button>
        <button>Phim thuyết minh</button>
      </div>
    </div>
  )
}

export default Header