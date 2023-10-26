import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Row, Space } from 'antd';

function DropdownMovie({ items, title, style, dnone }: any) {
    return (

        <Dropdown menu={{ items }} trigger={['click']} >
            <div className={style}>
                <a onClick={(e) => e.preventDefault()} style={{ fontSize: '12px' }}>
                    <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {title}
                        <DownOutlined className={dnone} />
                    </Space>
                </a>
            </div>
        </Dropdown>
    )
}

export default DropdownMovie