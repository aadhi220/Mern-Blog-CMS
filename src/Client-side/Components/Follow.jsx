'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { addEmailApi } from '../../Services/AllAPI';
import { toast } from 'react-toastify'; // Assuming you have toast notifications configured


export default function Follow({ author }) {
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState(user.email);

  function onCloseModal() {
    setOpenModal(false);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: 'short',
      day: 'numeric',
    };

    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', options);

    const reqBody = {
      email: email,
      created_at: formattedDate,
      author: author,
      userId:user._id
    };
console.log("aut",author);
    try {
      const result = await addEmailApi(reqBody);

      if (result.status === 200) {
        toast.success('Successfully subscribed! You will receive updates.');

        user.subscribed.push(author);

        sessionStorage.setItem("existingUser", JSON.stringify(user));
  
        onCloseModal(); 
      } 
      else {
        toast.warning(result.response.data);
        console.log();
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
      {!user?.subscribed.includes(author) ?<>  <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <line x1={19} x2={19} y1={8} y2={14} />
          <line x1={22} x2={16} y1={11} y2={11} />
        </svg> follow</> :"followed" }
       
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Subscribe to {author}'s Newsletter</h3>
            <p>Please provide your primary email to receive updates on {author}'s blog.</p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="w-full">
              <Button onClick={(e)=>handleSubmit(e)}>Subscribe</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
}
