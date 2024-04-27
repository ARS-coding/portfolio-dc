'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'

import 'bootstrap/dist/css/bootstrap.css';
import "../main.css";

const App = dynamic(() => import('../App'), { ssr: false })
export default function Page() {
  return <App /> // We'll update this
}