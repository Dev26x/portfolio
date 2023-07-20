import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { style } from '../style';
import { navLinks } from "../Data";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`
      ${style.paddingX} w-full flex items-center
      py-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between
        items-center max-w-7xl mx-auto ">
          <Link 
            to='/'
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0,0);
            }}
          >
            <img 
              src={logo} 
              alt="logo"
              className="w-9 h-9 object-contain"
            />
            <p
              className="text-white text-[18px]
                font-bold cursor-pointer"
            >
              Dev<span className="text-[#dc2626]">26</span>x
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${active === link.title ? 'text-[#dc2626]' : 
                  'text-white'} hover:text-[#dc2626] text-[18px] 
                  cursor-pointer`}
                onClick={() => (setActive(link.title))}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 items-center justify-end">
             <img 
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
             />
             <div className={`${!toggle? 'hidden' : 'flex'} absolute black-gradient 
              p-6 right-0 top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className="list-none flex flex-col justify-end items-start gap-4">
                  {navLinks.map((link) => (
                    <li 
                      key={link.id}
                      className={`${active === link.title ? 'text-white' : 
                        'text-secondary'} hover:text-white text-[16px] 
                        cursor-pointer font-poppins font-medium`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar