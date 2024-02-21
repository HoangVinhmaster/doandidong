
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
return(
    <WrapperCardStyle
    hoverable
    headStyle={{ width: '200px', height: '200px'}}
    style={{ width: 240 }}
    cover={<img alt="example" src="https://cdn-v2.didongviet.vn/files/products/2023/4/9/1/1683605592281_thumb_iphone_11_didongviet.jpg" />}
  >
    <img
     src={logo} 
     style={{ 
        width:'68px',height:'14px',position:'absolute',top:-1,left:-1,
        borderTopLeftRadius:'3px'
      }} />
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
            <span>4.95</span><StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
        <span style={{ marginRight: '8px' }}>1.000.000đ</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>

        </WrapperPriceText>
  </WrapperCardStyle>
)
}
export default CardComponent