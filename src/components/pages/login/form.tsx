import Loading from "@/components/molecules/loading/loading";
import { IRegistration } from "@/entities/user";
import { Button, Form, Input, Spin, notification } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginForm = (): JSX.Element => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const handleLogin = async (values: IRegistration) => {
        setLoading(true);
        await signIn("credentials", {
            email: values?.email,
            password: values?.password,
            redirect: false,
        }).then((response) => {
            if (response?.error) {
                api.error({
                    message: `Error`,
                    description: "Something went wrong",
                    placement: "topRight",
                });
            } else {
                console.log("ok");
                router.push("/to-do-list");
            }
        }).catch(() => {
            api.error({
                message: `Error`,
                description: "Something went wrong",
                placement: "topRight",
            });
        }).finally(() => setLoading(false));
    };

    return (
        <div className="auth-form">
            {contextHolder}
            <h3>Log in to your account</h3>
            <Form layout={"vertical"} onFinish={handleLogin}>
                <Form.Item label={"Email"} name={"email"} rules={[{ required: true, message: "Email is required" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label={"Password"} name={"password"} rules={[{ required: true, message: "Password is required" }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button disabled={loading} type={"primary"} htmlType={"submit"} block>
                        {loading ? <Spin /> : "Sign In"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;
