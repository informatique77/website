import React, { useRef } from 'react';
import { useForm } from '@formcarry/react';

export default function FormDoctor() {
  const formRef = useRef(null)
 
  const sendFormData = async (event) => {
    event.preventDefault();
    
    if(!formRef.current) {
      console.log('Something wrong with this ref')
      return
    }

    const formData = new FormData(formRef.current)

    fetch('https://formcarry.com/s/26fQsihG_', {
      method: 'POST',
      body: formData,
      headers: {
				// you don't have to set Content-Type
				// otherwise it won't work due to boundary!
        Accept: 'application/json'
      }
    })
    // convert response to json
    .then(r => r.json())
    .then(res => {
      console.log(res);
    });
  }
 
  return (
    <form ref={formRef} onSubmit={sendFormData}>
      <label htmlFor="nameInput">Name</label>
      <input type="text" id="nameInput" name="name" />

      <label htmlFor="messageInput">Message</label>
      <textarea id="messageInput" name="message"></textarea>

      <label htmlFor="pictureInput">Picture</label>
      <input type="file" id="pictureInput" name="picture" />

      <button type="submit">Submit</button>
    </form>
  );
}