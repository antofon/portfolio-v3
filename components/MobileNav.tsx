import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';

const MobileNav = ({ closeMobileMenu, isMobileMenuClosed }: any) => {
  return (
    <div>
      {isMobileMenuClosed ? null : (
        <div
          style={{
            position: 'fixed',
            backgroundColor: '#fff',
            width: '25%',
            height: '100vh',
            left: 0,
            // opacity: 1,
            // zIndex: 10,
            top: 0,
          }}
        >
          <div
            style={{
              position: 'fixed',
              backgroundColor: 'black',
              opacity: 0.7,
              width: '100%',
              height: '100vh',
              left: 0,
              top: 0,
            }}
          >
            <div
              style={{
                position: 'fixed',
                backgroundColor: '#fff',
                width: '25%',
                height: '100vh',
                left: 0,
                opacity: 1,
                // zIndex: 10,
                padding: '0px 25px 0 0',
                top: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  src="/assets/images/logo-v2.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
                <div>
                  <RxCross2 size={30} onClick={closeMobileMenu} />
                </div>
              </div>
              <p> build</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
