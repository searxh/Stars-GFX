import { Checkbox } from "@mui/material";
import { parseInt } from "lodash";
import { useState } from "react";

interface MainServiceSelectCardPropType {
    price: string;
    detail: string;
    serviceName: string;
    modifyService: (
        priceModification: number,
        isAdd: boolean,
        isPercentage?: boolean
    ) => void;
}

export default function MainServiceSelectCard({
    price,
    detail,
    serviceName,
    modifyService,
}: MainServiceSelectCardPropType) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const onCheckHandler = () => {
        setIsChecked(!isChecked);
        if (price === "50% of total") {
            modifyService(0, isChecked, isChecked);
        } else {
            modifyService(parseInt(price, 10), isChecked);
        }
    };
    return (
        <div
            onClick={() => {
                onCheckHandler();
            }}
            className={`flex md:flex-row flex-col md:px-[32px] md:py-[24px] px-[16px] py-[12px] :order-[1px] md:gap-[36px] gap-4
                 rounded-xl backdrop-blur-2xl cursor-pointer ${
                     !isChecked
                         ? "bg-[#222222]"
                         : "bg-gradient-to-r from-[#273947] via-[30%] via-[#4586A5] to-[#273947]"
                 } bg-opacity-40 border-[1px] border-neutral-800 items-center justify-between`}
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex md:gap-[36px] gap-[24px] items-center">
                    <Checkbox
                        checked={isChecked}
                        onChange={onCheckHandler}
                        sx={{
                            color: "#909090",
                            "&.Mui-checked": {
                                backgroundColor: "white",
                            },
                            "& svg": {
                                scale: "1.2",
                            },
                        }}
                        className="border-[#808080]  accent-[#5CC9FF] rounded-full w-5 h-5"
                    />
                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-semibold">
                            {serviceName}
                        </div>
                        <div className="text-sm text-neutral-300">{detail}</div>
                    </div>
                </div>
            </div>

            <div className="font-[700] md:text-xl text-lg md:w-[20%] w-full text-center">{`+$${price}`}</div>
        </div>
    );
}
