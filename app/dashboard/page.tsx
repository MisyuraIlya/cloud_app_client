import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import * as Api from "../../api";
import AuthProvider from '@/provider/AuthProvider';
import { Header } from '@/components/Header/Header';

const Dashboard = async () => {
  return (
    <AuthProvider>
        <main>
          <h1>Dashboard private</h1>
        </main>
    </AuthProvider>

  );
};

export default Dashboard;
