/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/custom-styles.scss'
interface ExploreImageCardProps {
  index: number;
  src: string;
  alt: string;
  heading: string;
  properties: number;
}

const ExploreImageCard: React.FC<ExploreImageCardProps> = ({ index, src, alt, heading, properties }) => {
  return (
    <div key={index} className="rounded-lg m-2">
      <div>
        <img src={src} alt={alt} className="w-full h-48 object-cover rounded-3xl" />
        <h6 className="text-sm font-semibold mb-1 text-left sm:text-sm md:text-lg lg:text-lg xl:text-lg ml-2">{heading}</h6>
        <p className="text-xs mb-1 text-left ml-2">{properties.toLocaleString()} properties</p>
      </div>
    </div>
  );
};
const ImageGrid = () => {
  const images = [
    {
      src: "https://static.wixstatic.com/media/8df728_c4006044a94c42f5b9c7266e96953550~mv2.jpg/v1/fill/w_640,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8df728_c4006044a94c42f5b9c7266e96953550~mv2.jpg",
      alt: "Image 1",
      heading: "Jaffna",
      properties: 727,
    },
    {
      src: "https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-train.jpg",
      alt: "Image 2",
      heading: "Ella",
      properties: 757,
    },
    {
      src: "https://mahaweli.lk/wp-content/uploads/2022/11/Arugam-Bay-Sri-Lanka.jpg",
      alt: "Image 3",
      heading: "Arugam Bay",
      properties: 270,
    },
    {
      src: "https://negombotourservice.com/wp-content/uploads/2020/06/galle02.jpg",
      alt: "Image 4",
      heading: "Galle",
      properties: 1727,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/127730404.jpg?k=3420abc730b52340b4be85637f255d12faeac28e44549bd8ee16c65316301431&o=&hp=1",
      alt: "Image 5",
      heading: "Kalpitiya",
      properties: 127,
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/16/db/91/41/the-city-now-a-world.jpg",
      alt: "Image 5",
      heading: "Anuradhapura",
      properties: 347,
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2500
  };
  return (
    <div className="container mx-auto px-4 ">
      <div className="mb-1">These popular destinations have a lot to offer</div>
      <div className="">
        <Slider {...settings}>
          {images.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <ExploreImageCard index={index} {...image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageGrid;
