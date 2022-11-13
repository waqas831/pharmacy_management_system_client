import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "../styles/DefaultLayout.css";
import Manufactures from "./manufactures/Manufactures";
const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [token, setToken] = React.useState("");
  const [role, setRole] = React.useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const userParse = JSON.parse(user);
    console.log("user in default", user);
    setToken(token);
    setUser(user);
    setRole(userParse?.role);
  }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h1 className="text-center text-light font-wight-bold mt-4">POS</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={window.location.pathname}
          >
            {!token ? (
              <Menu.Item key="/login" icon={<HomeOutlined />}>
                <Link to="/login">Login</Link>
              </Menu.Item>
            ) : null}
            {role && role ? (
              role === "admin" ? (
                <AdminLayout />
              ) : user.role === "pharmasist" ? (
                <PharmasistLayout />
              ) : (
                <CustomerLayout />
              )
            ) : (
              <CustomerLayout />
            )}

            {token ? (
              <Menu.Item
                key="/logout"
                icon={<LogoutOutlined />}
                onClick={() => {
                  console.log("logout");
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setToken(null);
                  setUser(null);
                  navigate("/");
                }}
              >
                <div> Logout</div>
              </Menu.Item>
            ) : null}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => toggle(),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DefaultLayout;

export const PharmasistLayout = (props) => {
  console.log("pharmasist admin");
  return (
    <>
      <Menu.Item key="/dashboard" icon={<CopyOutlined />}>
        <Link to="/dashboard">Bills</Link>
      </Menu.Item>
      <Menu.Item key="/pharmasist" icon={<UnorderedListOutlined />}>
        <Link to="/pharmasist">Items</Link>
      </Menu.Item>
      <Menu.Item key="/manager" icon={<UserOutlined />}>
        <Link to="/manager">Cutomers</Link>
      </Menu.Item>
      <Menu.Item key="/cashier" icon={<UserOutlined />}>
        <Link to="/cashier">Cutomers</Link>
      </Menu.Item>
    </>
  );
};

export const AdminLayout = (props) => {
  return (
    <>
      <Menu.Item key="/adminPharmasist" icon={<UserOutlined />}>
        <Link to="/adminPharmasist">Pharmasist</Link>
      </Menu.Item>
      <Menu.Item key="/sallers" icon={<CopyOutlined />}>
        <Link to="/sallers">Sallers</Link>
      </Menu.Item>
      <Menu.Item key="/products" icon={<UnorderedListOutlined />}>
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="/manufactures" icon={<UnorderedListOutlined />}>
        <Link to="/manufactures">Manufactures</Link>
      </Menu.Item>
      <Menu.Item key="/customers" icon={<UnorderedListOutlined />}>
        <Link to="/customers">Customers</Link>
      </Menu.Item>
      <Menu.Item key="/supplier" icon={<UnorderedListOutlined />}>
        <Link to="/supplier">Supplier</Link>
      </Menu.Item>
    </>
  );
};

export const CustomerLayout = (props) => {
  return (
    <>
      <Menu.Item key="/customer" icon={<CopyOutlined />}>
        <Link to="/customer">Bills</Link>
      </Menu.Item>
    </>
  );
};
