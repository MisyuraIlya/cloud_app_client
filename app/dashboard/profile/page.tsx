'use client'
import React, {useEffect, useState} from 'react';
import { Button } from "antd";
import * as Api from "../../../api"; 
import { User } from '@/api/dto/auth.dto';
import styles from "./Profile.module.scss";


const Profile = () => {
    const [user, setUser] = useState<User>({})

    async function getData() {
        const response = await Api.auth.getMe();
        setUser(response)
    }

    const onClickLogout = () => {
        if (window.confirm("are you want to exit?")) {
          Api.auth.logout();
          location.href = "/";
        }
      };

    useEffect(() => {
        getData()
    },[])

    return (
        <main>
            <div className={styles.root}>
            <h1>My Profile</h1>
            <br />
            <p>
                ID: <b>{user.id}</b>
            </p>
            <p>
                full name: <b>{user.fullName}</b>
            </p>
            <p>
                email: <b>{user.email}</b>
            </p>
            <br />
            <Button onClick={onClickLogout} type="primary" danger>
                Выйти
            </Button>
            </div>
      </main>
    );
};

export default Profile;