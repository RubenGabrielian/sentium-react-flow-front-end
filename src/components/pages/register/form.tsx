"use client";
import { Button, Form, Input, notification } from "antd";
import { StyledAuthForm } from "@/components/pages/login/loginForm.styled";
import { useCreateUser } from "@/hooks/useCreateUser.hook";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const [values, setValues] = useState();

  const { useRegisterUser } = useCreateUser(
    (data) => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      }).then(() => {
        router.push("/to-do-list");
      });
    },
    (e) => {
      api.error({
        message: `Error`,
        description: e.response?.data?.message,
        placement: "topRight",
      });
    }
  );

  const handleRegister = (values) => {
    setValues(values);
    useRegisterUser.mutate(values);
  };

  return (
    <StyledAuthForm>
      {contextHolder}
      <h3>Register your account</h3>
      <Form layout={"vertical"} onFinish={handleRegister}>
        <Form.Item label={"Full Name"} name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Email"} name={"email"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Password"} name={"password"}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} htmlType={"submit"} block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </StyledAuthForm>
  );
}
