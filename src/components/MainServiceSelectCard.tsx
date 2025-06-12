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
    return (
        <div className="flex p-[36px] rounded-xl bg-[#222222] bg-opacity-40 border-[#333333] items-center justify-between">
            <div className="flex gap-[36px]">
                <input
                    type={"radio"}
                    className="border-[#808080] accent-[#5CC9FF]"
                />
                <div className="flex flex-col">
                    <div className="text-[24px] font-semibold">
                        {serviceName}
                    </div>
                    <div>{detail}</div>
                </div>
            </div>
            <div className="font-[700] text-[20px] ">{`+$${price}`}</div>
        </div>
    );
}
