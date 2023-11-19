// import { Component } from "react";
import React from 'react';
import { Layout, Space, Row, Card, Flex, Typography} from 'antd';
import './app.css'

const { Header, Footer, Sider, Content } = Layout;
  
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };

  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#F7F7F7',
    backgroundColor: '#3ba0e9',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  const App = () => (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
       <Layout>
      <Sider style={siderStyle}></Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content className='content'>
    <Row justify="space-evenly">
    <Card
    hoverable
    className='itemMovie'

    bodyStyle={{
      padding: 0,
      overflow: 'hidden',
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className='itemMovie-img'
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
      </Flex>
    </Flex>
  </Card>
  
      <div className='itemMovie' span={4}>nougfbvucxjn
  </div>
    </Row>
  </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Sider style={siderStyle}></Sider>
    </Layout>
      
    </Space>
  );
  export default App;