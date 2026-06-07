import { Image as IKImage } from '@imagekit/react'; // Importing the ImageKit component for optimized image rendering

const Image = ({path, alt, className, w, h}) => {
    return (
            <IKImage
                urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT} // Replace with your ImageKit URL endpoint
                src={path} // The path to the image in your ImageKit media library
                transformation={[
                    { 
                        height: h,
                        width: w,
                        quality: 20 
                    },
                ]}
                loading="lazy"
                alt={alt}
            />
    )
}

export default Image;