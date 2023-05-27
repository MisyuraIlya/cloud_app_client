'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import * as Api from "../../../api";
import AuthProvider from '@/provider/AuthProvider';
import { Header } from '@/components/Header/Header';
import { FileItem } from '@/api/dto/files.dto';
import FileList from '@/components/FileList/FileList';

const loadItems = async () => {
  const res = await Api.files.getAll('trash')
  return res;
}
const DashboardTrash = () => {
  const [data, setData] = useState<FileItem[]>([])
  const fetchData = async () => {
   const items = await loadItems();
   setData(items)
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <>
        <main>
          {/* <h1>Dashboard private</h1> */}
          <FileList items={data}/>
        </main>
    </>

  );
};

export default DashboardTrash;
