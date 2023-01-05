import React from "react";
import { ReviewItemType } from "../../types";

const ReviewItem = ({ reviewItem }: { reviewItem: ReviewItemType }) => {
    const { content, date } = reviewItem;
    return (
        <div className="w-full bg-white rounded-xl p-5">
            <div>{content}</div> <div>{date}</div>
        </div>
    );
};

export default ReviewItem;
