const ImageHolder: React.FC<{ path: string }> = ({ path }) => {
    return (
        <>
            <img src={path} alt="Mohit Nair" className="w-1/2 mt-5 rounded-sm m-auto"/>
        </>
    );
}

export default ImageHolder;