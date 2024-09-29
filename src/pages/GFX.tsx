import React from "react";
import SelectProductPage from "../components/commissions/pages/SelectProductPage";
import CustomizePage from "../components/commissions/pages/CustomizePage";
import { GlobalContext } from "../states";
import TermsPage from "../components/commissions/pages/TermsPage";
import FormPage from "../components/commissions/pages/FormPage";
import CompletePage from "../components/commissions/pages/CompletePage";
import Footer from "../components/Footer";
import SelectSetPage from "../components/commissions/pages/SelectSetPage";
import StepsPage from "../components/commissions/pages/StepsPage";
import CoverPage from "../components/commissions/pages/CoverPage";

export const setsFlow = [
    <CoverPage />,
    <StepsPage />,
    <TermsPage />,
    <SelectSetPage />,
    <FormPage />,
    <CompletePage />,
];
export const customFlow = [
    <CoverPage />,
    <StepsPage />,
    <TermsPage />,
    <SelectSetPage />,
    <SelectProductPage />,
    <CustomizePage />,
    <FormPage />,
    <CompletePage />,
];

const GFX = () => {
    const { global_state } = React.useContext(GlobalContext);
    const { currentPage, commsFlow } = global_state;
    return (
        <div
            className="relative flex flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center overflow-hidden"
        >
            {commsFlow === 0 ? setsFlow[currentPage] : customFlow[currentPage]}
            <Footer />
        </div>
    );
};

export default GFX;
