import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import backToTopStyles from '../styles/BackToTop.module.css';

const BackToTop = () => {
  return (
    <div className={backToTopStyles.container}>
      <Link href="/">
        <div className={backToTopStyles.chevronContainer}>
          <FaChevronUp />
          <FaChevronUp className={backToTopStyles.bottomChevron} />
        </div>
      </Link>
    </div>
  );
};

export default BackToTop;
