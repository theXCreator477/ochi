import React from 'react'

function FooterLinks({heading, links}) {
  return (
    <div className='regular text-zinc-500 flex flex-col my-4'>
        <h6>{heading}</h6>
        
        {links.map((item, index) => (
          <a className='underline capitalize' key={index} href="#">{item}</a>
        ))}
    </div>
  )
}

export default FooterLinks