import HeaderComponent from'../HeaderComponent/HeaderComponent'
import React from 'react'

const DefaultComponent = ({children}) =>{
    return(
    <div>
        <HeaderComponent/>
        {children}
        </div>)
}
export default DefaultComponent