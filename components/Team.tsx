import React, { useEffect } from 'react';

const Team = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const progressBar = document.querySelector('.progress-bar') as HTMLElement;
            progressBar.style.width = (scrollY / 2) + 'px';
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    
    
    return (
        <section className=" bg-white text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                    <div className="progress-bar "></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">The Driving Force of RoundTable</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">United by our passion for progress, the RoundTable team brings together diverse talents and perspectives to revolutionize the way we connect.</p>
                    </div>
                </div>
                <div className="bg-white flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Yyork</h2>
                        <p className="text-base leading-relaxed mt-2 italic">Chief Creative Officer</p>
                        <p className="text-base leading-relaxed mt-2">Description.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Don</h2>
                        <p className="text-base leading-relaxed mt-2 italic">Chief Business Officer</p>
                        <p className="text-base leading-relaxed mt-2">Description.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Keven</h2>
                        <p className="text-base leading-relaxed mt-2 italic">Chief Technical Officer</p>
                        <p className="text-base leading-relaxed mt-2">Meet Keven, who has a broad range of 
                        expertise spanning technical development, project management, and business strategy. 
                        With a proven track record of leading successful projects and initiatives at a Fortune 100 company, Keven excels 
                        at organizing and streamlining processes to optimize efficiency and drive growth.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="mb-40">

            </div>
            </div>
            
        </section>
       
    );
};
export default Team;