import React from "react";
import { ReviewItemType } from "../../types";

const ReviewItem = ({ reviewItem }: { reviewItem: ReviewItemType }) => {
    const { content, date } = reviewItem;
    return (
        <div
            className="relative flex h-full w-full min-w-[22rem] md:w-[35rem] my-2 mx-auto bg-white 
            p-5 shadow-md bg-opacity-10 text-white drop-shadow-md border-2 rounded-3xl"
        >
            <div className="md:m-auto mx-auto pb-5">
                <div className="text-lg font-semibold">"{content}"</div>
            </div>
            <div className="absolute left-0 right-0 bottom-3">{date}</div>
        </div>
    );
};

export default ReviewItem;
