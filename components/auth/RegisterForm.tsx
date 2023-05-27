import React from 'react';
import {Form, Input, Button, notification} from 'antd'
import styles from './Auth.module.scss';
import { RegisterFormDTO } from '@/api/dto/auth.dto';
import * as Api from "../../api"
import Cookies from 'js-cookie';
const RegisterForm: React.FC = () => {

    const onSubmit = async (values: RegisterFormDTO) => {
        try {
            const {token} = await Api.auth.register(values);

            notification.success( {
                message: "success!",
                description: "navigate to admin panel",
                duration: 2
            })

            Cookies.set('token', token)

            location.href = "/dashboard"

        } catch (err) {
            console.warn("registrationForm",err)
            notification.error({
                message:"error!",
                description:"registration failed",
                duration:2
            })

        }
    }
    return (
        <div>
            <Form
                name='basic'
                labelCol={{
                    span:8,

                }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required:true,
                            message:"set email"
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="full name"
                    name="fullName"
                    rules={[
                        {
                            required:true,
                            message:"set full name"
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="password"
                    name="password"
                    rules={[
                        {
                            required:true,
                            message:"set password"
                        }
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    label="full name"
                    name="fullName"
                    rules={[
                        {
                            required:true,
                            message:"set full bane"
                        }
                    ]}
                >
                    <Button type='primary' htmlType='submit'>
                        registration
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm;