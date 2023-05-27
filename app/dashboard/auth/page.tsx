'use client'
import LoginForm from '@/components/auth/LoginForm';
import React from 'react';
import Head from 'next/head'
import {Tabs} from 'antd'
import RegisterForm from '@/components/auth/RegisterForm';
const page = () => {
    return (
        <>

        <main style={{width:400, margin:"50px auto"}}>
           <Tabs
                items={[
                    {
                        label: "sign in",
                        key:"1",
                        children: <LoginForm/>
                    },
                    {
                        label: "registration",
                        key: "2",
                        children: <RegisterForm/>
                    }
                ]}

            />
        </main>
        </>
    );
};

export default page;