import React from "react";
import ReviewItem from "../components/about/ReviewItem";
import Footer from "../components/Footer";
import { reviews } from "../lib/reviews";
import { ReviewItemType } from "../types";

const About = () => {
    return (
        <div
            className="relative flex lg:flex-row flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-gradient-to-t from-orange-500 to-sky-400 brightness-110 text-center overflow-hidden"
        >
            <div className="w-full md:w-1/2 p-5 h-full text-white">
                <div className="text-left text-3xl font-bold drop-shadow-sm">
                    Meet Star
                </div>
                <img
                    src="/images/about.webp"
                    alt=""
                    draggable={false}
                    className="w-full m-auto rounded-xl drop-shadow-md my-2"
                />
                <p className="text-left indent-5 p-5 text-base drop-shadow-sm">
                    Star is a seasoned graphic designer with over six years of
                    experience in the field of game development on the Roblox
                    platform. Star’s artistic practice merges the playful
                    aesthetic of Lego with the dreamlike qualities of
                    surrealism, resulting in imaginative and evocative designs
                    that tell engaging stories.
                </p>
                <p className="text-left indent-5 p-5 py-0 text-base drop-shadow-sm">
                    In addition to Star’s professional endeavors, Star also
                    engages with the creative community through blogging and
                    vlogging. With a proficient understanding of both
                    traditional and digital media, Star is a talented and
                    dedicated artist committed to delivering high-quality
                    designs to their clients
                </p>
            </div>
            <div className="w-full lg:w-1/2 p-5 bg-neutral-100 bg-opacity-30 rounded-3xl">
                <div className="text-3xl font-bold drop-shadow-sm">
                    Customer Review
                </div>
                <div className="text-lg font-semibold drop-shadow-sm -mt-1">
                    Every part of the star is you.
                </div>
                {reviews.map((reviewItem: ReviewItemType) => {
                    return <ReviewItem reviewItem={reviewItem} />;
                })}
            </div>
            <Footer />
        </div>
    );
};

export default About;
