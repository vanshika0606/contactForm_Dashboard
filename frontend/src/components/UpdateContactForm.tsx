import React, {useState, ChangeEvent} from 'react'

const UpdateContactForm = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const onFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const onLastChange = (e: ChangeEvent<HTMLInputElement>) => {

        setLastName(e.target.value);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    }

    const onSaveContact = ()=>{

    }

  return (
    <div className='text-md'>
            <form className='flex flex-col w-2/5 gap-1 m-auto bg-neutral-800 text-white p-5'>
                <label htmlFor="firstName" className='mt-2'>First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className='outline-none px-2 text-black'
                    value={firstName}
                    onChange={onFirstChange}
                />
                <label htmlFor="lastName" className='mt-1'>Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className='outline-none px-2 text-black'
                    value={lastName}
                    onChange={onLastChange}
                />
                <p className='mt-1'>Status</p>
                <label className="status">
                    <input type="radio" name="status" value="active" onChange={onStatusChange} />

                    Active
                </label>
                <label className="status">
                    <input type="radio" name="status" value="inactive" onChange={onStatusChange} />

                    In Active
                </label>
                <button
                    type="button"
                    className='border border-1 rounded-full py-0.5 px-2 bg-neutral-700 
                    text-white hover:bg-neutral-900 shadow-sm shadow-neutral-700 mt-2'
                onClick={onSaveContact}
                >Update Contact</button>
            </form>
        </div>
  )
}

export default UpdateContactForm
