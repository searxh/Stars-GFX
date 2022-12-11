export const resolutionChoices = [
    {
        title: "HD",
        text: "Full HD Resolution",
    },
    {
        title: "4k",
        text: "Ultra HD Resolution",
    },
    {
        title: "5k",
        text: "Ultra HD Resolution",
    },
];
export const modelLimitChoices = [
    {
        title: "Limited",
        text: "3 Models Limit",
    },
    {
        title: "Unlimited",
        text: "No Model Limit",
    },
];
export const numberChoices = ["1", "2", "3"];
export const productChoices = [
    {
        title: "Thumbnail",
        color: "bg-purple-500",
        textColor: "text-purple-500",
    },
    {
        title: "Icon",
        color: "bg-blue-500",
        textColor: "text-blue-500",
    },
    {
        title: "Ad Banner",
        color: "bg-amber-500",
        textColor: "text-amber-500",
    },
    {
        title: "Ad Skyscraper",
        color: "bg-red-500",
        textColor: "text-red-500",
    },
];

export const initialProductInfo = {
    resolution: resolutionChoices[0].title,
    modelLimit: modelLimitChoices[0].title,
    number: numberChoices[0],
};

export const initialFormInfo = {};
export const initialState = {
    formInfo: initialFormInfo,
    currentPage: 0,
};
