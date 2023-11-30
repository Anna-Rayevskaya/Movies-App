import { Layout, Space, Image } from 'antd'
import { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'

import './app.css'

import TabSearch from '../tabSearch'
import TabRated from '../tabRated'
import TabsHeader from '../tabs'

import imgOops from './1382253558_623686825.jpg'

const { Sider, Header } = Layout

export default class App extends Component {
  state = {
    tab: 'Search',
  }

  clickTab = (event) => {
    const newTab = event
    console.log(newTab)
    this.setState({
      tab: newTab,
    })
  }

  render() {
    const { tab } = this.state
    const renderTab = tab === 'Search' ? <TabSearch /> : <TabRated />
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
                  <TabsHeader onClick={this.clickTab} />
                </Header>
                {renderTab}
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
