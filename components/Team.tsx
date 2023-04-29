import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 120,
            delay: 200,
        })

        const handleScroll = () => {
            const scrollY = window.scrollY
            const progressBar = document.querySelector('.progress-bar') as HTMLElement
            progressBar.style.width = scrollY / 2 + 'px'
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className="body-font bg-white text-gray-600">
            <div className="container mx-auto px-5 py-24">
                <div className="flex flex-col">
                    <div className="h-1 overflow-hidden rounded bg-gray-200">
                        <div className="progress-bar"></div>
                    </div>
                    <div className="mb-12 flex flex-col flex-wrap py-6 sm:flex-row">
                        <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:mb-0 sm:w-2/5">
                            The Driving Force of RoundTable
                        </h1>
                        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
                            United by our passion for progress, the RoundTable team brings
                            together diverse talents and perspectives to revolutionize the way
                            we connect.
                        </p>
                    </div>
                </div>
                <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap bg-white sm:-m-4">
                    <div data-aos="fade-right" className="mb-6 p-4 sm:mb-0 md:w-1/3">
                        <div className="group h-64 overflow-hidden rounded-lg">
                            <img
                                alt="content"
                                className="team-img h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                                src="https://dummyimage.com/1203x503"
                            />
                        </div>
                        <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
                            Yyork
                        </h2>
                        <div className="flex items-center">
                            <p className="mt-2 text-base italic leading-relaxed">
                                Chief Creative Officer &nbsp;
                            </p>
                            <a href="#" className="text-gray-400">
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-2 text-base leading-relaxed">Description.</p>
                    </div>
                    <div data-aos="fade-up" className="mb-6 p-4 sm:mb-0 md:w-1/3">
                        <div className="group h-64 overflow-hidden rounded-lg ">
                            <img
                                alt="content"
                                className="team-img h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                                src="https://dummyimage.com/1204x504"
                            />
                        </div>
                        <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
                            Don
                        </h2>
                        <div className="flex items-center">
                            <p className="mt-2 text-base italic leading-relaxed">
                                Chief Business Officer &nbsp;
                            </p>
                            <a href="#" className="text-gray-400">
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-2 text-base leading-relaxed">Description.</p>
                    </div>
                    <div data-aos="fade-left" className="mb-6 p-4 sm:mb-0 md:w-1/3">
                        <div className="group h-64 overflow-hidden rounded-lg">
                            <img
                                alt="content"
                                className="team-img h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                                src="https://dummyimage.com/1204x504"
                            />
                        </div>
                        <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
                            Keven
                        </h2>
                        <div className="flex items-center">
                            <p className="mt-2 text-base italic leading-relaxed">
                                Chief Technical Officer &nbsp;
                            </p>
                            <a href="#" className="text-gray-400">
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-2 text-base leading-relaxed">
                            Meet Keven, who has a broad range of expertise spanning technical
                            development, project management, and business strategy. With a
                            proven track record of leading successful projects and initiatives
                            at a Fortune 100 company, Keven excels at organizing and
                            streamlining processes to optimize efficiency and drive growth.
                        </p>
                        &nbsp;
                    </div>
                </div>
                <div className="mb-40"></div>
            </div>
        </section>
    )
}
export default Team
