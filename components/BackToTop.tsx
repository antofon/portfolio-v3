import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaChevronUp } from 'react-icons/fa';
import backToTopStyles from '../styles/BackToTop.module.css';

interface BackToTop {
  visible: string;
}

const BackToTop = ({ visible }: BackToTop) => {
  const router = useRouter();
  const [isBackToTop, setIsBackToTop] = useState(true);

  useEffect(() => {
    if (
      router.asPath === '/' ||
      router.asPath === '/#about' ||
      router.asPath === '/#skills' ||
      router.asPath === '/#contact' ||
      router.asPath === '/#about' ||
      router.asPath === '/#experience'
    ) {
      setIsBackToTop(true);
    } else {
      setIsBackToTop(false);
    }
  }, [router]);

  return (
    <>
      {isBackToTop ? (
        <div className={backToTopStyles.container} style={{ display: visible }}>
          <Link href="/" aria-hidden="true">
            <div className={backToTopStyles.chevronContainer}>
              <FaChevronUp />
              <FaChevronUp className={backToTopStyles.bottomChevron} />
              <span className={backToTopStyles.visuallyHidden}>Back to top button</span>
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default BackToTop;
