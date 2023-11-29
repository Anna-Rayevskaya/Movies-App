import { Layout, Space, Image } from 'antd'
import { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'

import './app.css'
import ListOfFilms from '../list-of-films'
import HeaderSearch from '../header'
import PaginationFooter from '../footer'
import GetFilms from '../../services/get-films'

import imgOops from './1382253558_623686825.jpg'

const { Header, Footer, Sider, Content } = Layout

export default class App extends Component {
  state = {
    films: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    const { films } = this.state
    if (films == null) {
      this.updateFilms()
    }
  }

  handleKeyUp = (event) => {
    this.updateFilms(event.target.value)
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updateFilms(text) {
    const { page } = this.state
    const getFilms = new GetFilms()
    getFilms
      .getAllFilms(text, page)
      .then((filmsList) => {
        this.setState({
          films: filmsList,
          loading: false,
        })
      })
      .catch(this.onError)
  }

  render() {
    const { films, loading, error } = this.state
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
                  <HeaderSearch handleKeyUp={this.handleKeyUp} />
                </Header>
                <Content className="content">
                  <ListOfFilms films={films} loading={loading} error={error} />
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
