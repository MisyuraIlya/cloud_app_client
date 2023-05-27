'use client'
import { getExtenstionFromFileName } from '@/utils/getExtensionFromFileName';
import { isImage } from '@/utils/isImage';
import React from 'react';
import styles from './FileCard.module.scss'
import { getColorByExtenstion } from '@/utils/getColorByExtenstion';
import { FileTextOutlined } from '@ant-design/icons';
interface FileCardProps {
    filename: string;
    originalName: string;

}
const FileCard: React.FC<FileCardProps> = ({originalName, filename}) => {
    console.log('originalName',originalName)
    const ext = getExtenstionFromFileName(filename)
    const imageUrl = ext && isImage(ext) ? "http://localhost:4000/uploads/" + filename : '';
    const color = getColorByExtenstion(ext)
    const classColor = styles[color]
    return (
        <div className={styles.root}>
            <div className={styles.icon}> 
                <i className={classColor}>
                    {ext}
                </i>
                {
                    isImage(ext) ? (
                        <img className={styles.image} src={imageUrl} alt='file'/>
                    ) : (
                        <FileTextOutlined/>
                    )
                }
            </div>
            <span>{originalName}</span>
        </div>
    );
};

export default FileCard;