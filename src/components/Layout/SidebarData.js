import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IoPersonAdd } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

export const SidebarData = [
  {
    title: 'Products',
    path: '/home',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/restaurant',
    icon: <IoPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/orderslist',
    icon: <LuBox />,
    cName: 'nav-text'
  },
  {
    title: 'Bill',
    path: '/bill',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <MdLogout />,
    cName: 'nav-text'
  }
];