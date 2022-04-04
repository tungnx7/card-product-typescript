import React from 'react';
import './App.css';
import { Layout } from "antd";
import "antd/dist/antd.css";
import CardProduct from './CardProduct';



const { Header, Footer, Content } = Layout;

export interface IProduct {
  id: number,
  img: string,
  name: string,
  price: number,
  status: boolean
}


function App() {

  const data: Array<IProduct> = [
    {
      id: 1,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
      name: "Iphone 13",
      price: 30000000,
      status: true,
    },
    {
      id: 2,
      img: "https://images.samsung.com/vn/smartphones/galaxy-note10/buy/m-img-note10-aurapink-01.png?$PD_GALLERY_L_SHOP_JPG$",
      name: "SamSung Note 10",
      price: 6000000,
      status: true,
    },
    {
      id: 3,
      img: "https://img01.huaweifile.com/sg/ms/za/pms/product/6901443374410/800_800_C4FE8E59F6ECC72E574FC545E52633699700969292068042mp.webp",
      name: "Huawei P30",
      price: 10000000,
      status: true,
    },
    
  ]

  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content style={{ height: 600 }}>
          {data.map((item)=>(
            <CardProduct data={item} />
          ))}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
