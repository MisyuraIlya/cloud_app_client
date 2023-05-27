import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import * as Api from "../../api";
import AuthProvider from '@/provider/AuthProvider';
import { Header } from '@/components/Header/Header';
import { FileItem } from '@/api/dto/files.dto';
import FileList from '@/components/FileList/FileList';

const loadItems = async () => {
  const res = await Api.files.getAll()
  return res;
}
const Dashboard = async () => {
  // const items = await loadItems();
  // console.log('itmes',items)

  return (
    <>
        <main>
          {/* <h1>Dashboard private</h1> */}
          {/* {items.map((item) => <div key={item.id}>{item.originalName}</div>)} */}
          {/* <FileList items={items}/> */}
        </main>
    </>

  );
};

export default Dashboard;
