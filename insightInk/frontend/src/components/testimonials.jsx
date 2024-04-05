import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/bundle';

const Testimonials = () => {
    useEffect(() => {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
      });
  
      return () => {
        swiper.destroy();
      };
    }, []);
  
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
          <div className="mb-16">
            <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
            <h2 className="text-4xl text-center font-bold text-gray-900">What our happy user says!</h2>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper w-max">
              {/* Testimonial slides */}
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                  <div>
                    {/* Testimonial rating */}
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">4.9</span>
                    </div>
                    {/* Testimonial content */}
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.</p>
                  </div>
                  {/* Testimonial author */}
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Jane D</h5>
                      <span className="text-sm leading-4 text-gray-500">CEO</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">4.8</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">Pagedones user-friendly interface makes managing my portfolio a breeze.</p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696230015.png" alt="avatar" />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">John R.</h5>
                      <span className="text-sm leading-4 text-gray-500">Investor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">4.7</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">Using Pagedone has significantly improved my workflow and helped me make better investment decisions.</p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696230124.png" alt="avatar" />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Alice M.</h5>
                      <span className="text-sm leading-4 text-gray-500">Trader</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 4 */}
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">4.6</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">Pagedone has simplified the way I track my investments and analyze market trends.</p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696230242.png" alt="avatar" />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Mark S.</h5>
                      <span className="text-sm leading-4 text-gray-500">Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of additional slides */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;