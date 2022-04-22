import React from 'react'
import NavbarWaitlist from '../../components/StaticPages/Waitlist/Navbar-waitlist';
import HeroWaitlist from '../../components/StaticPages/Waitlist/Hero-waitlist';
import FormWaitlist from '../../components/StaticPages/Waitlist/Form-waitlist';


const Waitlist = () => {
  return (
    <>
      <div id='waitlist_wrapper'>
        <NavbarWaitlist />
        <HeroWaitlist />
        <FormWaitlist />
      </div>
    </>
  )
}

export default Waitlist