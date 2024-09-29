const isSafari = () => {
    return !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
};

export default isSafari;
