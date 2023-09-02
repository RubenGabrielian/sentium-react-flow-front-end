import React from "react";
import Link from "next/link";
import Container from "../../../components/molecules/container/container";
import Flex from "../../molecules/flex/flex";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";


const Navbar = (): JSX.Element => {
  const { data: session } = useSession();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Button onClick={() => signOut()}>Logout</Button>,
    },
  ];

  return (
    <nav>
      <Container>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <ul>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/to-do-list"}>To Do List</Link>
            </li>
          </ul>
          {session?.user ? (
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {session?.user?.name} <DownOutlined />
              </a>
            </Dropdown>
          ) : (
            <Flex justifyContent={"space-between"} className={"header-buttons"}>
              <Link href={"/login"}>
                <Button type={"primary"}>Sign In</Button>
              </Link>
              <Link href={"/register"}>
                <Button>Sign up</Button>
              </Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;