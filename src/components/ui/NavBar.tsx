import { FC } from 'react';
import Button from './Button';


export interface NavbarProps {

}


const Navbar: FC<NavbarProps> = () => {

  return (

    <nav className='fixed left-2 right-2 top-2 rounded-md bg-sky-100 h-20 p-4 flex items-center justify-between shadow-level2'>
      <div className='flex gap-2 items-center justify-center'>
        <img src="/logo.svg" alt="Logo" style={{ width: '40px', marginRight: '8px' }} />
        <h1 className='text-xl font-poppins font-semibold'> ModelNote</h1>
      </div>

      <div className='flex gap-2'>
        <Button size='lg' className='font-poppins text-base'>Sign up</Button>
        <Button size='lg' className='font-poppins text-base'>Try Editor</Button>
      </div>
    </nav>
  )

}

export default Navbar


