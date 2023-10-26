import Image from 'next/image'
import React from 'react'
import Movie from '../../../public/image/Toiackinhhoang.png'
function CommentUser() {
    return (
        <div className='py-8 '>
            <h2 style={{ textAlign: 'center', fontSize: '20px' }}>ĐỂ LẠI BÌNH LUẬN</h2>
            <div style={{ backgroundColor: 'white', padding: '10px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className='color-black'>38 binh luan</p>
                    <p className='color-black'>sap xep theo:</p>
                </div>
                <div>
                    <div className='flex'>
                        <Image src={Movie} alt='avatar' style={{ width: '50px', height: '50px' }} />
                        <input placeholder='viet binh luan' className='input-movie' />
                    </div>
                    <div className='flex py-4'>
                        <Image src={Movie} alt='avatar' style={{ width: '50px', height: '50px' }} />
                        <div style={{ width: '100%', marginLeft: '10px' }}>
                            <h3 className='color-black'>pham kien cuong</h3>
                            <p className='color-black'>sao lo lasjlkcjhdcljshdv </p>
                            <div className='flex ' style={{ width: '30%' }}>
                                <p className='color-black' style={{ fontSize: '11px', color: '#4569b3' }}>thich</p>
                                <p className='color-black' style={{ fontSize: '11px', color: '#4569b3', paddingLeft: '10px', paddingRight: '10px' }}>phan hoi</p>
                                <p className='color-black' style={{ fontSize: '11px', color: '#4569b3' }}>2gio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentUser