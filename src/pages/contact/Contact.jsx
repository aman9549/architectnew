import './contact.css'
import MainHeader from '../../components/MultiHeader'
import Image from '../../images/blog/wide/blog-11.jpg'
import { TextField } from '@mui/material'
import Button from '../../ui/Button'

const Contact = () => {
  return (
   <>
    <MainHeader title='Contact' image={Image} >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sapiente cupiditate hic rerum repellat officia quod corporis numquam quis fuga?</MainHeader>

    <div className='container container_contact'>
      <div className="contact_left">
        <small>WE'RE HERE TO HELP</small>
        <h1>Get Your Project Done</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className='contact_left_down'>
          <div>
         <h3>Work Inquiries</h3>
         <p>+91 7020134662</p>
         
         </div>
         <div>
         <h3>Address</h3>
         <p>69 Ganpati Apartment
Vaishali Nagar,
Jaipur</p>
         
         </div>
         <div>
         <h3>Business Hours</h3>
         <p>Mon - Sat 9:00am - 6:00pm</p>
         <p>Sunday - CLOSED</p>
         
         </div>
         <div>
         <h3>Careers & Press</h3>
         <p>+91 7020134662</p>
         
         </div>
         <div>
         <h3>Email</h3>
         <p>sales@uptimiseit.com</p>
         
         </div>
        </div>
      </div>
      <div className="contact_right">
        <h1>Send a Message</h1>
        <form>
        <TextField id="outlined-basic" label="Name*" variant="outlined" />
        <TextField id="outlined-basic" label="Email*" variant="outlined" />
        <TextField id="outlined-basic" label="Phone*" variant="outlined" />
        <TextField id="outlined-basic" label="Message*" variant="outlined" />
        </form>
        <Button>Submit</Button>
      </div>
    </div>
   </>
  )
}

export default Contact
