import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar/>
      <Layout className="main_body">
        <Header className="top_navbar">
        <Navbar/>
        </Header>
        <Layout>
          <Content className="body_content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
