import React ,{useEffect} from 'react'

function Navbar() {
    useEffect(() => {
        const smoothScrollLinks = document.querySelectorAll('.smooth-scroll-link');
    
        smoothScrollLinks.forEach((link) => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
    
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
              });
            }
          });
        });
      }, []);
  return (
    <div className='z-50 p-2 flex items-center justify-between top-0 right-0 sticky bg-white/40 backdrop-blur'>
        <h1 className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-indigo-800'>CodeIgnite.</h1>
        <div className="flex items-center space-x-5 font-medium">
            <a href="#about" className='text-blue-500 smooth-scroll-link'>About</a>
            <a href="#event" className='text-blue-500 smooth-scroll-link'>Event</a>
            <a href="#challenges" className='text-blue-500 smooth-scroll-link'>Challenges</a>
        </div>
    </div>
  )
}

export default Navbar