const isIOS = () => {
    return (
        (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(window as any).MSStream) ||
        !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/)
    );
};

export default isIOS;
