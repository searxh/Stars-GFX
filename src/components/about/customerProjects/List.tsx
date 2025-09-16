import React, { useState } from "react";
import { customerProjects } from "../../../lib/customerProjects";
import CustomerProjectsItem from "./Item";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useElementSize from "../../../hooks/useElementSize";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface CustomerProjectListProps {
    setInfo: (value: any) => void;
}

const CustomerProjectsList = ({ setInfo }: CustomerProjectListProps) => {
    const { width } = useElementSize();
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    return (
        <div className="w-screen md:h-[30rem]">
            {isSmallerThanMedium ? (
                <div className="flex flex-col gap-4 p-4">
                    {customerProjects.map((item) => {
                        return (
                            <CustomerProjectsItem
                                key={item.name}
                                listItem={item}
                                setInfo={setInfo}
                            />
                        );
                    })}
                </div>
            ) : (
                <Carousel
                    axis={"horizontal"}
                    interval={2000}
                    transitionTime={1000}
                    infiniteLoop
                    autoPlay
                    centerMode={!isSmallerThanMedium}
                    centerSlidePercentage={35}
                    showStatus={false}
                    showIndicators={false}
                    width={width}
                    showThumbs={false}
                    className="pt-5"
                    swipeable={false}
                    renderItem={(
                        item: React.ReactNode,
                        options?:
                            | { isSelected: boolean; isPrevious: boolean }
                            | undefined
                    ) => {
                        return (
                            <div
                                className={`flex ${
                                    options?.isSelected
                                        ? `scale-[0.85] hover:scale-[0.8] md:scale-100 md:hover:scale-95`
                                        : `scale-[0.5] hover:scale-[0.6] md:scale-75 md:hover:scale-[0.7]`
                                } transform-gpu duration-500`}
                            >
                                <div className="m-auto">{item}</div>
                            </div>
                        );
                    }}
                >
                    {customerProjects.map((item) => {
                        return (
                            <CustomerProjectsItem
                                key={Math.random()}
                                listItem={item}
                                setInfo={setInfo}
                            />
                        );
                    })}
                </Carousel>
            )}
        </div>
    );
};

export default CustomerProjectsList;
