"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Frame01 from "@/public/images/hero/house4.jpg";
import Frame02 from "@/public/images/hero/house7.jpg";
import Frame03 from "@/public/images/hero/house3.jpg";
import Frame04 from "@/public/images/hero/house8.jpg";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedImage from "./AnimatedImage";
import Carousel from "react-multi-carousel";

const imageSources: StaticImageData[] = [Frame01, Frame02, Frame03, Frame04];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // @ts-ignore
        if (imageSources?.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => {
                    // Move to the next image, and loop back to the first image if necessary
                    // @ts-ignore
                    return (prevIndex + 1) % imageSources?.length;
                });
            }, 10000); // Change images every 3 seconds

            return () => clearInterval(interval);
        }
    }, [imageSources]);

    return (
        <>
            <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
                        <div className=" md:w-1/2">
                            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                                “Your Gateway to Exclusive Real Estate
                                Opportunities”
                            </h4>
                            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                                Find Your Dream Property with {"   "}
                                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                                    Techsphere
                                </span>
                            </h1>
                            <p>
                                We provide the best properties in the market. We
                                are here to help you find your dream property.
                            </p>

                            <div className="mt-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap gap-5">
                                        <input
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            type="text"
                                            placeholder="Enter your email address"
                                            className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                                        />
                                        <button
                                            aria-label="get started button"
                                            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-5 text-black dark:text-white">
                                    Try for free no credit card required.
                                </p>
                            </div>
                        </div>

                        <div className="animate_right hidden md:w-1/2 lg:block">
                            <div className="relative 2xl:-mr-7.5">
                                <Image
                                    src="/images/shape/shape-01.png"
                                    alt="shape"
                                    width={46}
                                    height={246}
                                    className="absolute -left-11.5 top-0"
                                />
                                <Image
                                    src="/images/shape/shape-02.svg"
                                    alt="shape"
                                    width={36.9}
                                    height={36.7}
                                    className="absolute bottom-0 right-0 z-10"
                                />
                                <Image
                                    src="/images/shape/shape-03.svg"
                                    alt="shape"
                                    width={21.64}
                                    height={21.66}
                                    className="absolute -right-6.5 bottom-0 z-1"
                                />
                                <div className=" relative aspect-[700/444] w-full">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Pagination]}
                                        // breakpoints={{
                                        //     // when window width is >= 640px
                                        //     0: {
                                        //         slidesPerView: 1,
                                        //     },
                                        //     // when window width is >= 768px
                                        //     768: {
                                        //         slidesPerView: 2,
                                        //     },
                                        // }}
                                    >
                                        {imageSources?.map((img, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Image
                                                        key={index}
                                                        className="shadow-solid-l"
                                                        src={img}
                                                        alt={`hero-${index}`}
                                                        width={500}
                                                        height={700}
                                                        
                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                    {/* <Image
                                        className="shadow-solid-l"
                                        src={Frame01}
                                        alt={`hero-`}
                                        fill
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
