import Responsive from '@/components/slideShow/Slide';
import AppLayout from '@/layouts/AppLayout';
import React from 'react'

function Home() {
    return (
        <div >
            <div className='grid-slide '>
                <Responsive />
            </div>
            <div>

            </div>
        </div>
    )
}



Home.getLayout = (page: any) => <AppLayout>{page}</AppLayout>;
export default Home