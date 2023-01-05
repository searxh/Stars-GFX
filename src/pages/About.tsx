import React from "react";
import ReviewItem from "../components/about/ReviewItem";
import Footer from "../components/Footer";
import { reviews } from "../lib/reviews";
import { ReviewItemType } from "../types";

const About = () => {
    return (
        <div
            className="relative pt-12 w-full min-h-screen h-full
            font-nunito text-center overflow-hidden"
        >
            <div className="w-full mx-auto max-w-[40rem] p-5 h-full">
                <div className="text-left text-3xl font-bold drop-shadow-sm">
                    Meet Star
                </div>
                <img
                    src="/images/about.webp"
                    alt=""
                    draggable={false}
                    className="w-full m-auto rounded-xl drop-shadow-md my-2"
                />
                <p className="text-left indent-5 py-5 text-base drop-shadow-sm">
                    Star is a seasoned graphic designer with over six years of
                    experience in the field of game development on the Roblox
                    platform. Star's artistic practice merges the playful
                    aesthetic of Lego with the dreamlike qualities of
                    surrealism, resulting in imaginative and evocative designs
                    that tell engaging stories.
                </p>
                <p className="text-left indent-5 pb-5 text-base drop-shadow-sm">
                    In addition to Star's professional endeavors, Star also
                    engages with the creative community through blogging and
                    vlogging. With a proficient understanding of both
                    traditional and digital media, Star is a talented and
                    dedicated artist committed to delivering high-quality
                    designs to their clients
                </p>
            </div>
            <div
                className="w-screen md:h-[35rem] p-5 text-white bg-gradient-to-t from-orange-500 to-sky-400 
                brightness-110 shadow-md md:overflow-hidden"
            >
                <div className="w-full h-fit mx-auto drop-shadow-sm">
                    <div className="text-3xl font-bold">Customer Review</div>
                    <div className="text-lg font-semibold -mt-1">
                        Every part of the star is you.
                    </div>
                    <img
                        className="m-auto h-12 w-12 mb-5 mt-2 drop-shadow-sm invert"
                        src="images/logo.png"
                        draggable={false}
                        alt=""
                    />
                    <div
                        className="md:grid grid-flow-col py-3 w-full h-full 
                        md:overflow-x-scroll gap-2 mb-12"
                    >
                        {reviews.map(
                            (reviewItem: ReviewItemType, index: number) => {
                                return (
                                    <ReviewItem
                                        key={index}
                                        reviewItem={reviewItem}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;
