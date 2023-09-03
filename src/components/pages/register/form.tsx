"use client";
import { Button, Form, Input, Spin, notification } from "antd";
import { useCreateUser } from "@/hooks/useCreateUser.hook";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IRegistration } from "@/entities/user";

const RegisterForm = (): JSX.Element => {

    const router = useRouter();
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState<boolean>(false);
    const [registerForm, setRegisterForm] = useState<IRegistration>();

    const { useRegisterUser } = useCreateUser(
        (data) => {
            setLoading(false);
            console.log(registerForm)
            signIn("credentials", {
                email: registerForm?.email,
                password: registerForm?.password,
                redirect: false,
            }).then(() => {
                router.push('/to-do-list');
            })
        },
        (e) => {
            setLoading(false);
            api.error({
                message: `Error`,
                description: "Someting went wrong",
                placement: "topRight",
            });
        }
    );

    const handleRegister = async (values: IRegistration) => {
        await setLoading(true);
        await console.log(values);
        await setRegisterForm(values);
        await useRegisterUser.mutate(values);
    };

    return (
        <div className="auth-form">
            {contextHolder}
            <h3>Register your account</h3>
            <Form layout={"vertical"} onFinish={handleRegister}>
                <Form.Item label={"Full Name"} name={"name"} rules={[{ required: true, message: "Name is reqeuired" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label={"Email"} name={"email"} rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Write only email" }
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label={"Password"} name={"password"} rules={[
                    { required: true, message: "Password is required" },
                    { min: 8, message: "Minimum 8 symbols" }
                ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button disabled={loading} type={"primary"} htmlType={"submit"} block>
                        {loading ? <Spin /> : "Sign Up"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default RegisterForm;
