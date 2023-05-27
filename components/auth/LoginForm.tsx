import React from 'react';
import styles from './Auth.module.scss';
import {Button, Form, Input, notification} from 'antd'
import { LoginFormDTO } from '@/api/dto/auth.dto';
import * as Api from "../../api"
import Cookies from "js-cookie";

const LoginForm = () => {

    const onSubmit = async(values: LoginFormDTO) => {
        try {
            const {token} = await Api.auth.login(values);

            notification.success( {
                message: "success!",
                description: "navigate to admin panel",
                duration: 2
            })

            Cookies.set('token', token)
        } catch (err) {
            console.warn("loginForm",err)
            notification.error({
                message:"error!",
                description:"password or login uncorrect!",
                duration:2
            })

        }
    }
    return (
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{
                    span:8,
                }}
                onFinish={onSubmit}
            >
            <Form.Item
                label="Email"
                name={"email"}
                rules={[
                    {
                        required:true,
                        message: "set email"
                    },
                ]} 
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="password"
                name={"password"}
                rules={[
                    {
                        required:true,
                        message: "set password"
                    },
                ]} 
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                sign in
            </Button>
            </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;