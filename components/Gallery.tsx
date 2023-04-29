import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Soundscapes Unleashed: RoundTable's Audio Gallery</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Discover the creative symphony of our artists, where each note echoes innovation and passion, as we harmonize talent and artistry in a vibrant, genre-defying gallery.</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div data-aos="fade-right" className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/500x300" />
            </div>
            <div data-aos="fade-left" className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/501x301" />
            </div>
            <div data-aos="fade-up" className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/600x360" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div data-aos="fade-up" className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/601x361" />
            </div>
            <div data-aos="fade-right" className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/502x302" />
            </div>
            <div data-aos="fade-left" className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block hover:opacity-70 transition-opacity duration-300" src="https://dummyimage.com/503x303" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
