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
        text: "",
    },
    {
        title: "Icon",
        text: "",
    },
    {
        title: "Ad Banner",
        text: "",
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
