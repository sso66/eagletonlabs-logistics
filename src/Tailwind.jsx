import React from 'react'

const ResponsiveText = () => {
  return (
    <div
      className='bg-gray-200 p-4'
      style={{ background: 'rgba(0,0,0, 100%', color: '#ffffff' }}
    >
      <p className='text-red md:text-blue'>
        Responsive Text: This text is red on small screens and blue on medium
        screens and larger.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-green-300 p-2 m-2'>Item 1</div>
        <div className='bg-blue-300 p-2 m-2'>Item 2</div>
        <div className='bg-yellow-300 p-2 m-2'>Item 3</div>
      </div>
      <p className='text-base md:text-lg'>
        Responsive Typography: This text size adjusts based on the screen width.
      </p>
      <div className='hidden md:flex bg-purple-300 p-4'>
        Conditional Classes: This element is hidden on small screens.
      </div>
      <div className='aspect-w-16 aspect-h-9 bg-indigo-300 p-4'>
        Aspect Ratio Box: Your content here.
      </div>
    </div>
  )
}
export default ResponsiveText
