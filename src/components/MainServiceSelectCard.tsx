import { useState } from "react";

interface MainServiceSelectCardPropType {
    price: String;
    detail: String;
    serviceName: String;
}

export default function MainServiceSelectCard({
    price,
    detail,
    serviceName,
}: MainServiceSelectCardPropType) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const onCheckHandler = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div
            className={`flex px-[32px] py-[24px] :order-[1px] border-[1px] gap-[36px]   rounded-xl ${!isChecked ? "bg-[#222222]" : "bg-gradient-to-r from-[#273947] via-[30%] via-[#4586A5] to-[#273947]"} bg-opacity-40 border-[#333333] items-center justify-between`}
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-[36px] items-center">
                    <input
                        onChange={onCheckHandler}
                        type={"checkbox"}
                        className="border-[#808080]  accent-[#5CC9FF] rounded-full w-5 h-5"
                    />
                    <div className="flex flex-col gap-1  ">
                        <div className="text-[24px] font-semibold">
                            {serviceName}
                        </div>
                        <div className="text-[16px]">{detail}</div>
                    </div>
                </div>
            </div>

            <div className="font-[700] text-[20px] w-[20%]">{`+$${price}`}</div>
        </div>
    );
}
