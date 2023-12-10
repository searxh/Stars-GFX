import React from "react";
import { ReviewItemType } from "../../types";
import useMediaQuery from "@mui/material/useMediaQuery";

const ReviewItem = ({ reviewItem }: { reviewItem: ReviewItemType }) => {
    const { content, date } = reviewItem;
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    return (
        <div
            className={`relative flex w-full ${
                isSmallerThanMedium ? "h-[20rem]" : " h-full"
            } mx-auto bg-white scale-[0.95]
            p-5 shadow-md bg-opacity-10 text-white drop-shadow-md border-[1px] rounded-3xl`}
        >
            <div className="md:m-auto m-auto pb-6">
                <div className="text-base md:text-lg font-semibold">
                    "{content}"
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-3">{date}</div>
        </div>
    );
};

export default ReviewItem;
