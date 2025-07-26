import CanvasWrapper from "../CanvasWrapper";
import Galaxy3D from "./Galaxy3D";

interface BackgroundProps {
    progress: number;
}

const Background = ({ progress }: BackgroundProps) => {
    return (
        <div className="absolute top-0 w-screen h-screen -z-10">
            <CanvasWrapper>
                <Galaxy3D progress={progress} />
            </CanvasWrapper>
        </div>
    );
};

export default Background;
