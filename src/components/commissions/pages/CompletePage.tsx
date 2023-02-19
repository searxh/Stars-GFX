import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../states";
import Text from "../../Text";

const CompletePage = () => {
    const { dispatch } = React.useContext(GlobalContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
            navigate("/orders");
            dispatch({
                type: "set",
                field: "currentPage",
                payload: 0,
            });
        }, 1500);
    }, []);
    return (
        <>
            <Text
                text="Submission Complete! I'll get back to you soon"
                color="text-green-500"
            />
        </>
    );
};

export default CompletePage;
