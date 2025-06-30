interface FooterProps {
    isAbsolute?: boolean;
}

const Footer = ({ isAbsolute = true }: FooterProps) => {
    return (
        <div
            className={`${
                isAbsolute ? "absolute left-0 bottom-0" : ""
            } flex w-screen overflow-hidden h-12 drop-shadow-md text-center`}
        >
            <div className="m-auto font-nunito text-sm">
                &copy; Copyright {new Date().getFullYear()} StarsGFX. All rights
                reserved
            </div>
        </div>
    );
};

export default Footer;
