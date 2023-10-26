import React from 'react'

function TaskbarTrendding() {
    return (
        <div className='d-none'>
            <h2 className='pd-text'>TRENDDING</h2>
            <div className='flex items-center' >
                <div style={{ backgroundColor: 'red', width: '25px', height: '25px', borderRadius: '50%', textAlign: 'center' }}>
                    <p>1</p>
                </div>
                <div style={{ marginLeft: '8px' }}>
                    <p>Lá Phiếu Tử Hình</p>
                    <p className='title-footer'>912.9k lượt xem</p>
                </div>
            </div>
            <p style={{ color: '#383839' }}>-----------------------------</p>
        </div>
    )
}

export default TaskbarTrendding