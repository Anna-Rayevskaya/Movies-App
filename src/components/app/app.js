import { Component } from "react";
import React from "react";
import { Layout, Space } from "antd";
import "./app.css";
import ItemMovie from "../itemMovie";
const { Header, Footer, Sider, Content } = Layout;


export default class App extends Component {

  
  render() {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Sider className="siderStyle"></Sider>
          <Layout>
            <Header className="headerStyle">Header</Header>
            <Content className="content">
              <ItemMovie />

            </Content>
            <Footer className="footerStyle">Footer</Footer>
          </Layout>
          <Sider className="siderStyle"></Sider>
        </Layout>
      </Space>
    );
  }
}


fetch('https://api.themoviedb.org/3/search/movie?query=return&include_adult=false&language=en-US&page=1', {
  method: 'GET',
  headers: {
    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY1MDFhOTI0NDU0ODAxZDliYTE4YWRlY2VjZDY1MSIsInN1YiI6IjY1NTRiYTI4MDgxNmM3MDBlMDE5MDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq0N-JkxyoymriAVOX_XOdIc4UKTTVx6mGCaIUwq60g",
    "accept": "application/json"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));