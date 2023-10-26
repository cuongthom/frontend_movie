import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/image/Logo.png'
function Footer() {
  return (
    <>
      <div className='grid-container wrap-title-footer flexstyle'>
        <div className='logo-title'>
          <Image src={Logo} alt='logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
          <p style={{ fontSize: 13, color: '#9ca3af' }}>
            <button style={{ color: 'white' }} >Motchill </button> - Xem phim Online Vietsub chất lượng cao miễn phí, nhiều thể loại phim phong phú, đặc sắc, giao diện trực quan, thuận tiện, tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới.
          </p>
        </div>
        <div className='flex title-footer' >
          <div style={{ width: '25%' }}>
            <p className='' style={{ fontSize: 20 }}>Danh Mục</p>
            <div className='pt-4'>
              <p className='title-footer'>Tin tức</p>
              <p className='title-footer'>Phim Chiếu Rạp</p>
              <p className='title-footer'>Phim Bộ</p>
              <p className='title-footer'>Phim Lẻ</p>
            </div>
          </div>
          <div style={{ width: '25%' }}>
            <p className='' style={{ fontSize: 20 }}>THỂ LOẠI</p>
            <div className='pt-4'>
              <p className='title-footer'>Phim Cổ Trang</p>
              <p className='title-footer'>Phim Đam Mỹ</p>
              <p className='title-footer'>Phim Bách Hợp</p>
              <p className='title-footer'>Phim Viễn Tưởng</p>
              <p className='title-footer'>Phim Hoạt Hình</p>
            </div>
          </div>
          <div style={{ width: '25%' }}>
            <p className='' style={{ fontSize: 20 }}>ĐIỀU KHOẢN</p>
            <div className='pt-4'>
              <p className='title-footer'>Liên Hệ</p>
            </div>
          </div>
          <div style={{ width: '25%' }}>
            <p className='' style={{ fontSize: 20 }}>SOCIAL</p>
            <div className='pt-4'>
              <p className='title-footer'>Tin tức</p>
              <p className='title-footer'>Tin tức</p>
              <p className='title-footer'>Tin tức</p>
              <p className='title-footer'>Tin tức</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <hr />
        <p className='text-center pt-2 pb-2'>© 2023 Motchill. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer