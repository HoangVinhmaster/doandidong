import{Badge, Col} from 'antd'
import React from 'react'
import { WrapperHeader,WrapperHeaderAccout,WrapperTextHeader,WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/input/Search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';



const HeaderComponent = () =>{
    return(
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>
         <WrapperHeader>
      <Col span={5}>
      <WrapperTextHeader>SHOPPHONE</WrapperTextHeader>
      </Col>
      <Col span={13}>
      <ButtonInputSearch
      size="large"
      textButton="Tìm kiếm"
      placeholder="input search text"
      
      //onSearch={onSearch}
    />
    </Col>
      <Col span={6} style={{ display:'flex',gap:'54px',alignItems:'center' }}>
        <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize:'30px' }}/>
        <div>
            <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
            <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined/>
            </div>
            </div>
            </WrapperHeaderAccout>
        <div>
            <div>
            <Badge count={4} size="small">
            <ShoppingCartOutlined style={{ fontSize:'35px',color:'#fff' }}/>
            </Badge>
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
        </div>
        </div>
      </Col>
    </WrapperHeader>
        </div>)
}
export default HeaderComponent