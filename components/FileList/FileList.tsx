'use client'
import { FileItem } from '@/api/dto/files.dto';
import React from 'react';
import styles from './FileList.module.scss';
import FileCard from '../FileCard/FileCard';
interface FileListProps {
    items: FileItem[];
}
const FileList: React.FC<FileListProps> = ({items}) => {
    console.log('aa',items)
    return (
        <div className={styles.root}>
            {/* {
                items.map((item) => (
                    <div key={item.id} className='file'>
                        <FileCard filename={item.filename} originalName={item.originalName} />
                    </div>    
                ))
            } */}
            abs
            {items.map((item) => <div>{item.originalName}</div>)}
        </div>
    );
};

export default FileList;