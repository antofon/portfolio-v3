import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import backToTopStyles from '../styles/BackToTop.module.css';

interface BackToTop {
  visible: string;
}

const BackToTop = ({ visible }: BackToTop) => {
  return (
    <div className={backToTopStyles.container} style={{ display: visible }}>
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
