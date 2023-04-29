import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                            <a href="https://twitter.com/mistersoyface" className="text-gray-400">
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
                            <a href="https://www.instagram.com/iamyyork/" className="text-gray-400">
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
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
                            
                            <a href="https://www.instagram.com/don.morriso/" className="text-gray-400">
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
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
                            <a href="https://twitter.com/kevstrip" className="text-gray-400">
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
                            <a href="https://linkedin.com/in/kevenm" className="text-gray-400">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedInIcon />
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
