import { Layout, Space, Image } from 'antd'
import { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'

import './app.css'
import ListOfFilms from '../list-of-films'
import HeaderSearch from '../header'
import PaginationFooter from '../footer'

import imgOops from './1382253558_623686825.jpg'

const { Header, Footer, Sider, Content } = Layout

export default class App extends Component {
  render() {
    return (
      <div>
        <Online>
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
                <Header className="headerStyle">
                  <HeaderSearch />
                </Header>
                <Content className="content">
                  <ListOfFilms />
                </Content>
                <Footer className="footerStyle">
                  <PaginationFooter />
                </Footer>
              </Layout>
              <Sider className="siderStyle" />
            </Layout>
          </Space>
        </Online>
        <Offline>
          <div className="imgOops-conteiner">
            <Image width={500} src={imgOops} className="imgOops" />
          </div>
        </Offline>
      </div>
    )
  }
}
