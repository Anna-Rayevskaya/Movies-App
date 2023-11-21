import { Component } from "react";
import { Card, Row, Flex, Typography } from "antd";
import "./itemMovie.css";
// import SwapiService from '../../services/swapi-service'
export default class ItemMovie extends Component {
  state = {
    moviesData: [],
  }

  render() {

    return (
      <Row justify="space-evenly">
        <Card
          hoverable
          className="itemMovie"
          bodyStyle={{
            padding: 0,
            overflow: "hidden",
          }}
        >
          <Flex justify="space-between">
            <img
              alt="avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              className="itemMovie-img"
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
                “antd is an enterprise-class UI design language and React UI
                library.”
              </Typography.Title>
            </Flex>
          </Flex>
        </Card>
        <div className="itemMovie"></div>
        <div className="itemMovie"></div>
        <div className="itemMovie"></div>
      </Row>
    );
  }
}
