'use client'
import { Button, Menu } from 'antd';
import React from 'react';
import styles from '../../styles/Home.module.scss';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
const SideBar = () => {
    const router = useRouter();

    return (
        <div>
            <Button>
                Upload
            </Button>
            <Menu 
                className={styles.menu}
                mode="inline"
                // selectedKeys={[selectedMenu]}
                items={[
                    {
                        key: '/dashboard',
                        icon: <FileOutlined/>,
                        label: 'Files',
                        onClick: () => router.push('/dashboard')
                    },
                    {
                        key: '/dashboard/photos',
                        icon: <FileImageOutlined/>,
                        label: 'photos',
                        onClick: () => router.push('/dashboard')
                    },
                    {
                        key: '/dashboard/trash',
                        icon: <DeleteOutlined/>,
                        label: 'trash',
                        onClick: () => router.push('/dashboard')
                    },
                ]}
            />
        </div>
    );
};

export default SideBar;