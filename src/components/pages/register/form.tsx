"use client";
import {Button, Form, Input, notification} from "antd";
import {useCreateUser} from "@/hooks/useCreateUser.hook";
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {IRegistration} from "@/entities/user";

const RegisterForm = (): JSX.Element => {

    const router = useRouter();
    const [api, contextHolder] = notification.useNotification();
    const [registerForm, setRegisterForm] = useState<IRegistration>();

    const {useRegisterUser} = useCreateUser(
        (data) => {
            console.log(data);
            signIn("credentials", {
                email: registerForm?.email,
                password: registerForm?.password,
                redirect: false,
            }).then(() => {
                router.push("/to-do-list");
            });
        },
        (e) => {
            api.error({
                message: `Error`,
                description: "Someting went wrong",
                placement: "topRight",
            });
        }
    );

    const handleRegister = (values: IRegistration) => {
        setRegisterForm(values);
        useRegisterUser.mutate(values);
    };

    return (
        <div className="auth-form">
            {contextHolder}
            <h3>Register your account</h3>
            <Form layout={"vertical"} onFinish={handleRegister}>
                <Form.Item label={"Full Name"} name={"name"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Email"} name={"email"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Password"} name={"password"}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"} block>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default RegisterForm;
