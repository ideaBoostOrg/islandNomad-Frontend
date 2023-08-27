/* eslint-disable @next/next/no-img-element */
const ImageGrid = () => {
    const images = [
      {
        src: "https://static.wixstatic.com/media/8df728_c4006044a94c42f5b9c7266e96953550~mv2.jpg/v1/fill/w_640,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8df728_c4006044a94c42f5b9c7266e96953550~mv2.jpg",
        alt: "Image 1",
        heading: "Jaffna",
      },
      {
        src: "https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-train.jpg",
        alt: "Image 2",
        heading: "Ella",
      },
      {
        src: "https://mahaweli.lk/wp-content/uploads/2022/11/Arugam-Bay-Sri-Lanka.jpg",
        alt: "Image 3",
        heading: "Arugam Bay",
      },
      {
        src: "https://negombotourservice.com/wp-content/uploads/2020/06/galle02.jpg",
        alt: "Image 4",
        heading: "Galle",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/127730404.jpg?k=3420abc730b52340b4be85637f255d12faeac28e44549bd8ee16c65316301431&o=&hp=1",
        alt: "Image 5",
        heading: "Kalpitiya",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/photo-s/16/db/91/41/the-city-now-a-world.jpg",
        alt: "Image 5",
        heading: "Anuradhapura",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
                {/* <figcaption className="text-center mt-2">{image.heading}</figcaption> */}
                <h6 className="text-sm font-semibold mb-1 text-left sm:text-sm md:text-lg lg:text-lg xl:text-lg ml-2">{image.heading}</h6>
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageGrid;
  