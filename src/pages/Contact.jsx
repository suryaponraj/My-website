import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import Section from '../components/Section'

const Contact = () => {
  const [formData, setFormData] = useState(new FormData())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.name && formData.email && formData.message)) {
      alert('Something went wrong!')
      return
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`)
    axios.post('https://formspree.io/f/xpzkodjv', formData, {
      Accept: 'application/json',
    })
    setFormData({})
  }

  return (
    <Section id='contact' title='Contact'>
      <div className='row justify-content-between'>
        <div className='col-md-5 order-last order-lg-first' data-aos='fade-up'>
          <div className='subheading mb-3'>I'd love to hear from you</div>
          <form>
            <div className='form-group pt-1 pb-2'>
              <label htmlFor='username'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='name'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pt-2 pb-3'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className='form-group pb-4'>
              <label htmlFor='userMessage'>Message</label>
              <textarea
                className='form-control'
                id='userMessage'
                name='message'
                rows='3'
                placeholder='Enter message'
                value={formData.message || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-md-6 mb-5 mb-lg-0' data-aos='fade-up'>
          <div className='subheading mb-3'>Reach out to me directly</div>
          <div className='contact-direct'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <ImLocation />
                  </span>
                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>7373082097</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9068.497210916079!2d77.00197631564888!3d10.875003014150819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685974244421!5m2!1sen!2sin" frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'></iframe>
          </div>
        </div>
      </div>

      <p className='py-3 m-0 mt-5 text-center text-secondary'>
        Made by Antony Surya
      </p>
    </Section>
  )
}

export default Contact
