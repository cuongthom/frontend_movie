import AppLayout from '@/layouts/AppLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Movie from '../../../public/image/Toiackinhhoang.png'
import React from 'react'
import TaskbarTrendding from '@/components/taskbar/TaskbarTrendding';
import CommentUser from '@/components/comment/CommentUser';

function MovieDetail() {
    const router = useRouter();
    const { slug: queryParam } = router.query;
    console.log('name', queryParam);

    return (
        <div className='grid-container flex pt-4'>

            <div className='wrap-main-movie'>
                <div className='wrap-information-movie'>
                    <div className='w-img-movie'>
                        <Image src={Movie} alt='movie' className='image-movie' />
                        <button className='button-play'>Xem Phim</button>
                    </div>
                    <div className='information-movie'>
                        <p style={{ fontSize: '28px' }} className='color-movie'>7 ESCAPE</p>
                        <p>The Escape Of The Seven (2023)</p>
                        <div style={{ backgroundColor: '#2d2a2a', padding: '20px', marginTop: '20px' }} className=''>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Trạng thái : Tập 10 Vietsub</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Đạo Diễn : Joo Dong-min</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Thời Lượng : 70 Phút/Tập</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Số Tập</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Tình Trạng</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Ngôn Ngữ</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Năm Sản Xuất</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Quốc gia</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Thể Loại</p>
                            <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>Diễn Viên</p>
                        </div>
                    </div>

                </div>
               
                <div>
                    <h2 style={{ textAlign: 'center', fontSize: '30px' }}>NỘI DUNG PHIM</h2>
                    <p style={{ color: '#9ca3af' }}><b>Tội Ác Kinh Hoàng - The Worst Of Evil (2023)</b> lấy bối cảnh những năm 1980, The Worst Evil theo chân các điều tra viên cảnh sát chìm thâm nhập vào một tổ chức tội phạm lớn chịu trách nhiệm buôn bán ma túy trái phép giữa Hàn Quốc, Trung Quốc và Nhật Bản.</p>
                </div>
                <CommentUser />
            </div>
            <div style={{ width: '30%', marginLeft: '8px' }} className='d-none'>

                <h2 style={{ fontSize: '20px' }} className='color-movie'>PHIM SẮP CHIẾU</h2>
                <div className='flex py-2'>
                    <Image src={Movie} alt='image' style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                    <div className='px-2'>
                        <p>NHẤT NIỆM HOA KHAI</p>
                        <p>2022</p>
                    </div>
                </div>
                <p style={{ color: '#383839' }}>-----------------------------</p>
                <div className='flex py-2'>
                    <Image src={Movie} alt='image' style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                    <div className='px-2'>
                        <p>NHẤT NIỆM HOA KHAI</p>
                        <p>2022</p>
                    </div>
                </div>
                <p style={{ color: '#383839' }}>-----------------------------</p>
                <div className='flex py-2'>
                    <Image src={Movie} alt='image' style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                    <div className='px-2'>
                        <p>NHẤT NIỆM HOA KHAI</p>
                        <p>2022</p>
                    </div>
                </div>
                <p style={{ color: '#383839' }}>-----------------------------</p>
                <div className='flex py-2'>
                    <Image src={Movie} alt='image' style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                    <div className='px-2'>
                        <p>NHẤT NIỆM HOA KHAI</p>
                        <p>2022</p>
                    </div>
                </div>
                <p style={{ color: '#383839' }}>-----------------------------</p>
                <div>
                    <TaskbarTrendding />
                </div>
            </div>
        </div>
    )
}
MovieDetail.getLayout = (page: any) => <AppLayout>{page}</AppLayout>;
export default MovieDetail