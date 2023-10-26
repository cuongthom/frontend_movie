import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import Movie from '../../../public/image/Toiackinhhoang.png'
function ItemMovie({ image, title, style, styleImage, styleTitle }: any) {
    return (

        <div className={style}>
            <Image
                src={image}
                className={styleImage}
                alt="logo"
                priority={false || true}
            />
            <p className={styleTitle} >{title}</p>
        </div>

    )
}

export default ItemMovie