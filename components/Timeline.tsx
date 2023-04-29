import React from 'react';

const Timeline = () => {
  return (
    <section>
      <div className="bg-white text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-custom uppercase tracking-loose">OUR CREATIVE PROCESS</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">So, what's next?</p>
            <p className="text-sm md:text-base text-gray-800 mb-4">
              Discover the unique steps we take in our collaborative audio production journey at RoundTable. Get a behind-the-scenes glimpse into our immersive creative process.
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-custom text-custom rounded shadow hover:shadow-lg py-2 px-4 border border-gray-100 hover:border-gray-100"
              style={{ textDecoration: 'none' }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.textDecoration = 'none';
              }}
            >
              Explore Now
            </a>

          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-red-800 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #b12f12', borderRadius: '1%' }}>
                </div>
                <div className="border-2-2 border-red-800 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #b12f12', borderRadius: '1%' }}>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-custom">1-7 June, 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration Opens</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Choose your preferred membership tier and sign up for the services that best suit your creative needs. Begin your artistic journey with RoundTable by completing our easy registration process.)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-custom">8-14 June, 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Onboarding & Consultation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Get acquainted with our team and resources. Schedule a personalized consultation to discuss your goals and aspirations, and let us tailor a roadmap to help you achieve your creative dreams.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-custom">15-21 June, 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Project Initiation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Dive into your first project with RoundTable. Collaborate with our talented professionals, access our state-of-the-art facilities, and start transforming your ideas into reality.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-custom">22-28 June, 20231</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Project Review & Feedback</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Receive expert feedback and suggestions from our team to refine and polish your work. Fine-tune your project, ensuring it meets your artistic vision and industry standards.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-custom">29 June - 5 July, 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Final Presentation & Promotion</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Showcase your completed project to the RoundTable community and beyond. Leverage our marketing and promotion services to share your creation with the world.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-custom">6 July, 2023 onwards</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Continued Growth & Collaboration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Keep honing your skills and exploring new opportunities. Stay connected with the RoundTable community, attend exclusive events, and collaborate on future projects.
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Timeline;