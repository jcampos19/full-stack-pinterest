import './galleryItem.css';
import {Link} from "react-router";  // React Router component for linking to different routes
import { Image } from '@imagekit/react'; // Importing the ImageKit component for optimized image rendering

const GalleryItem = ({item}) => {
    return (
        <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
            {/* <img src={item.media} alt="" /> */}
            <Image
                urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT} // Replace with your ImageKit URL endpoint
                src={item.media} // The path to the image in your ImageKit media library
                transformation={[{ width: 500, height: 500 }]}
                loading="lazy"
                alt="Gallery Item"
            />
            <Link to={`/pin/${item.id}`} className="overlay"/>
            <button className="saveButton">Save</button>
            <div class="overlayIcons">
                <button>
                    <img src="/general/share.svg" alt="Share" />
                </button>
                <button>
                    <img src="/general/share.svg" alt="Share" />
                </button>
            </div>
        </div>
    )
}

export default GalleryItem;