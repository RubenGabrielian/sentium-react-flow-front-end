import { StyledAuthForm } from "@/components/pages/login/loginForm.styled";
import { Button, Form, Input, notification } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const handleLogin = async (values) => {
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
        router.push("/to-do-list");
      }
    });
  };

  return (
    <StyledAuthForm>
      {contextHolder}
      <h3>Log in to your account</h3>
      <Form layout={"vertical"} onFinish={handleLogin}>
        <Form.Item label={"Email"} name={"email"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Password"} name={"password"}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} htmlType={"submit"} block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </StyledAuthForm>
  );
}
