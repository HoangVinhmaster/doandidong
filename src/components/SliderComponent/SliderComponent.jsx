import React from 'react'
import {Image} from 'antd';
import Sider from 'react-slick';
const SliderComponent = ({arrImages}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return(
        <Sider {...settings}>
          {arrImages.map((image) => {
           return (
             <Image src={image} alt="slider" preview={true} width="100%" height="274px"/>
           )
        })}
        </Sider>
        
    )
}
export default SliderComponent