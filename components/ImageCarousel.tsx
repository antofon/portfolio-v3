import Image from 'next/image';
import { WorkPageProps } from '../data/workPageData';
import useWindowDimensions from '../hooks/useWindowDimensions';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageCarouselStyles from '../styles/ImageCarousel.module.css';

const ImageCarousel = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  const { width, height } = useWindowDimensions();
  const isMobile = typeof width !== 'undefined' && width < 768;
  const isLandscape =
    typeof width !== 'undefined' &&
    typeof height !== 'undefined' &&
    width > height;
  const isPortrait =
    typeof width !== 'undefined' &&
    typeof height !== 'undefined' &&
    width < height;
  return (
    <>
      <Carousel showThumbs={false}>
        {workItem.workPageGallery.map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={item.image}
                alt={workItem.workPageTitle}
                width={isMobile && isPortrait ? 225 : 385}
                height={isMobile && isPortrait ? 225 : 385}
                className={imageCarouselStyles.galleryImage}
              ></Image>
              <p className="legend">{item.caption}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
