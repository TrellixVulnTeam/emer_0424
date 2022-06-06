import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../../css/Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout.Header>
      <ul className='ulIzquierda'>
          <li><span className='tituloNavbar'>EMERBA</span></li>
          <li className='iconoMenu'><MenuOutlined /></li>
      </ul>
      <ul className='ulDerecha'>
          <li>img</li>
      </ul>
    </Layout.Header>
  )
}

export default Navbar;