import AppLayout from '@/layouts/AppLayout';
import React, { useEffect, useRef, useState } from 'react'
import ShareOnSocialNetworks from '../../components/share/ShareOnSocialNetworks';
import MovieShowTime from '@/components/movieShowTime/MovieShowTime';
import CommentUser from '@/components/comment/CommentUser';

function PlayVideoMovie() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPauseClick = () => {
        const video: any = videoRef.current;
        console.log(video);
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='grid-container'>

            <div className="video-container">
                <video controlsList="nodownload" ref={videoRef} width={'100%'} height={'100%'} className="video" src='https://firebasestorage.googleapis.com/v0/b/movie-fe6d9.appspot.com/o/Xem%20Phim%20T%E1%BB%99i%20%C3%81c%20Kinh%20Ho%C3%A0ng%20-%20T%E1%BA%ADp%2012%20(End)%20%5BHD%20VIETSUB%5D%5Bindex.m3u8%5D.mp4?alt=media&token=d957d40c-76ff-42e5-b5a8-4a5b579d6f26&_gl=1*14kes9a*_ga*MTM2MDcwMTU4MS4xNjkwMDIwMjkx*_ga_CW55HF8NVT*MTY5ODI5MTI2Mi4zMy4xLjE2OTgyOTEzOTMuNjAuMC4w' controls>
                    Your browser does not support the video tag.
                </video>
                {!isPlaying ? <div onClick={handlePlayPauseClick} className="play-button"></div> : ""}
            </div>
            <div>
                <h3 style={{ marginTop: '20px', marginBottom: '20px', fontSize: '20px' }}>DANH SÁCH PHÁT</h3>
                <div className=' play-list-style' >
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                    <p >Tập 1</p>
                </div>
            </div>
            <div>
                <h2 className='style-color-common' style={{ fontSize: '25px', fontWeight: '800' }}>TỘI ÁC KINH HOÀNG TẬP 1</h2>
                <h3 className='font-gray' style={{ fontSize: '18px' }}>Tội Ác Kinh Hoàng - The Worst Of Evil Tập 1 Vietsub (2023)</h3>
            </div>
            <ShareOnSocialNetworks />
            <MovieShowTime />
            <CommentUser />
        </div>
    )
}
PlayVideoMovie.getLayout = (page: any) => <AppLayout>{page}</AppLayout>;
export default PlayVideoMovie