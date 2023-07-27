import React from "react";
const ReservationDetailCard = () => {
  const images = {
    src: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    alt: "Image 1",
  };
  return (
    <div className="mt-4">
      <a
        href="#"
        className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-max hover:border-[#187B9273] hover:bg-[#187B9214] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          src={images.src}
          alt={images.alt}
          className="object-cover w-[50rem] m-3 mb-10 rounded-lg h-[15rem]"
        />

        <div className="flex flex-col justify-between p-2 leading-normal mt-1 w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#187B92] dark:text-white">
            The Ramp
          </h5>

          <div className="inline-flex">
            <p className="mb-3 font-normal text-[#187B92] dark:text-gray-400 underline underline-offset-1">
              Nuwara Eliya City Centre, Nuwara Eliya
            </p>
            <svg
              className="w-6 h-6 ml-2 text-[#187B92]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </div>
          <span className="bg-[#0E2D34] text-[#F9F9F9] w-24 h-7 text-center rounded-[6px]">
            Bedroom
          </span>
        </div>

        <div className="flex flex-col justify-between p-2 leading-normal items-end">
          <div className="flex flex-row mb-3">
            <div className="flex flex-col mt-2">
              <h5 className="text-base font-bold">Reviews</h5>
              <h6 className="text-xs">456 reviews</h6>
            </div>
            <div>
              <svg
                className="w-10 h-10 text-[#187B92]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>

          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-end px-3 py-2 w-max text-sm font-medium text-center text-white bg-[#FF5722] rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none"
            >
              See availability
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ReservationDetailCard;
