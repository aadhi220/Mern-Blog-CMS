import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function UserView({user,handleAuthorShip}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className='bg-green-500  p-1 rounded-md' onClick={() => setOpenModal(true)}><i className="fa-regular fa-eye fa-lg text-white"></i></button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>User Details</Modal.Header>
        <Modal.Body>
        <div className='w-full flex justify-center'><img className='rounded-lg max-w-[10rem]' src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="" /> </div>
        <hr className='my-5' />
<div className='flex justify-center w-full'>
            <table className=' w-full mt-5'>
    
      <tbody>
        <tr>
          <td className='text-left pr-4 pb-2 font-semibold'>Name</td>
          <td className='pb-2'>:</td>
          <td className='pb-2'>{user.username}</td>
        </tr>
        <tr>
          <td className='text-left pr-4 pb-2 font-semibold'>Email</td>
          <td className='pb-2'>:</td>
          <td className='pb-2'>{user.email}</td>
        </tr>
        <tr>
          <td className='text-left pr-4 pb-2 font-semibold'>Created At</td>
          <td className='pb-2'>:</td>
          <td className='pb-2'>{user.created_at}</td>
        </tr>
        <tr>
          <td className='text-left pr-4 pb-2 font-semibold'>Roll</td>
          <td className='pb-2'>:</td>
          <td className='pb-2'>{user.isAdmin ? "Admin" :user?.isAuthor ? "Author" : "User"}</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
</div>

        </Modal.Body>
        <Modal.Footer>
         {user?.isAdmin ? null :user?.isAuthor ?  <Button onClick={() => { handleAuthorShip(user?._id,false) ; setOpenModal(false) } }>Revoke AuthorShip</Button> : <Button onClick={() => { handleAuthorShip(user?._id,true) ; setOpenModal(false) }}>Set As Author</Button>}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
