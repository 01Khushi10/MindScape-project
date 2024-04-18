import React from 'react'
import { Flex, Spin } from 'antd';

function Loader() {
  return (
    <div className=' w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-[20px]'>
        <p className=' text-lg'>Loading..Please Wait..</p>
        <Spin />
    </div>
  )
}

export default Loader