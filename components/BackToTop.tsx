import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import backToTopStyles from '../styles/BackToTop.module.css';
import { useRouter } from 'next/router';

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
          <Link href="/">
            <div className={backToTopStyles.chevronContainer}>
              <FaChevronUp />
              <FaChevronUp className={backToTopStyles.bottomChevron} />
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default BackToTop;
