import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd';

function ModalComponent({open, setOpen, status, setStatus, sendStatus}) {
    const handleCancel = () => {
        setOpen(false);
    };
  return (
    <div>
        <Modal
        open={open}
        onCancel={handleCancel}
        title="Create a Post"
        footer={[
          <Button className=' bg-red-500' onClick={sendStatus} key="submit" type="primary" disabled={status.length > 0 ? false : true}>
            Post
          </Button>
        ]}
      >
        <input onChange={(event)=>{setStatus(event.target.value)}} value={status} className=' text-black w-[100%] outline-none text-lg' placeholder='What do you want to talk about?'/>
      </Modal>
    </div>
  )
}

export default ModalComponent