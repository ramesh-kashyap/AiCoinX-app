import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BottomSheet from '../components/bottomSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserFriends, faWallet, faUser } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    {isOpen ? (
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    ) : (
    <div className="fixed left-0 right-0 bottom-0" style={{  zIndex: 1 }}>
      
      <div className="container relative bg-white bg-opacity-9 py-5 flex justify-around items-center after:absolute after:bg-n700 after:inset-0">
        <div className="absolute left-[41%] bottom-[72px] z-40"   style={{
                  bottom:'48px',
                  left:'45%',
                }}>
        <button onClick={() => setIsOpen(true)} className="bg-g300 text-2xl p-3.5 rounded-full flex justify-center items-center relative text-white">
            <i className="ph ph-arrows-counter-clockwise"></i>
            <div className="absolute -bottom-2 -left-5 -right-5 -z-10">
              {/* <img src="/assets/images/reload-bg.png" alt="Reload" /> */}
            </div>
          </button>
        </div>
        <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center gap-1 relative z-20 ${
                  isActive ? 'text-g300' : 'text-violet-500'
                }`
              }
            >
              <FontAwesomeIcon className="p-2 bg-white bg-opacity-9 rounded-full" icon={faHouse} size="1.8x"/>
              {/* <img src="/assets/images/home2.png" alt="Reload" style={{width:35, height:"auto"}}/> */}
              <p
                className="text-xs font-semibold"
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '0.8rem',
                }}
              >
                {/* Home */}
              </p>
            </NavLink>
            <NavLink
              to="/security/refferals-user"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center gap-1 relative z-20 ${
                  isActive ? 'text-g300' : 'text-violet-500'
                }`
              }
            >
              <FontAwesomeIcon className="p-2 bg-white bg-opacity-9 rounded-full" icon={faUserFriends} size="1.8x" />
              <p
                className="text-xs font-semibold"
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '0.8rem',
                }}
              >
                {/* Refer Friends */}
              </p>
            </NavLink>




        {/* Assets Icon */}
        <NavLink
              to="/market"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center gap-1 z-20 ${
                  isActive ? 'text-g300' : 'text-violet-500'
                }`
              }
            >
              <FontAwesomeIcon className="p-2 bg-white bg-opacity-9 rounded-full" icon={faWallet} size="1.8x" />
              <p
                className="text-xs font-semibold"
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '0.8rem',
                }}
              >
                {/* Assets */}
              </p>
            </NavLink>

       {/* Account Icon */}
       <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex flex-col justify-center items-center gap-1 z-20 ${
                  isActive ? 'text-g300' : 'text-violet-500'
                }`
              }
            >
              <FontAwesomeIcon className="p-2 bg-white bg-opacity-9 rounded-full" icon={faUser} size="1.8x" />
              <p
                className="text-xs font-semibold"
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '0.8rem',
                }}
              >
                {/* Account */}
              </p>
            </NavLink>
      </div>
    </div>
        )}
    </>
  );
}

export default Footer;