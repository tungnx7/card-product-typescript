import React, { Component } from "react";
import { IProduct } from "./App";
import { Card } from "antd";
import { Button } from "antd";

type Props = {
  data: IProduct;
};

type State = {};

class CardProduct extends Component<Props, State> {
  state = {};

  render() {
    

    return (
      <div>
        <Card title="Điện thoại" style={{ width: 300 }}>
          <p>{this.props.data.name}</p>
          <p>Giá: {this.props.data.price}</p>
          <img
            src={this.props.data.img}
            alt=""
            style={{ width: 200, height: 200, objectFit: "cover" }}
          />
          <Button type="primary">Mua Ngay</Button>
        </Card>
      </div>
    );
  }
}

export default CardProduct;
