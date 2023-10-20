import React from 'react'
import PropTypes from 'prop-types'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'

function page() {
    return (
    <div>
        <div className="div">
            <ContactForm />
        </div>
        <div className="div">
            <ContactInfo />
        </div>
    </div >
  )
}

export default page
