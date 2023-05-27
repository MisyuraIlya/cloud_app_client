import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, notification } from 'antd';
import React from 'react';
import styles from '../../styles/Home.module.scss';
import * as Api from "../../api";
const UploadButton: React.FC = () => {
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const onUploadSuccess = async (options: any) => {
        try {
            const file = await Api.files.uploadFile(options);
            console.log('file',file)
            setFileList([]);
        } catch(err) {
            notification.error({
                message:'Erorr!',
                description:"cannot upload file",
                duration:2
            })
        }
    }
    return (
        <Upload
            customRequest={onUploadSuccess}
            fileList={fileList}
            onChange={({fileList}) => setFileList(fileList)}
            className={styles.upload}
        >
            <Button type='primary' icon={<CloudUploadOutlined/>} size='large'>
                upload file
            </Button>
        </Upload>
    );
};

export default UploadButton;