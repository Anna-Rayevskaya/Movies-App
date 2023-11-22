import { Layout, Space } from 'antd'
import { Component } from 'react'

import './app.css'
import ListOfFilms from '../list-of-films'

const { Header, Footer, Sider, Content } = Layout

export default class App extends Component {
  render() {
    return (
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Sider className="siderStyle" />
          <Layout>
            <Header className="headerStyle">Header</Header>
            <Content className="content">
              <ListOfFilms />
            </Content>
            <Footer className="footerStyle">Footer</Footer>
          </Layout>
          <Sider className="siderStyle" />
        </Layout>
      </Space>
    )
  }
}
