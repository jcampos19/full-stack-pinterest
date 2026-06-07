import './galleryItem.css';
import {Link} from "react-router";  // React Router component for linking to different routes
// import { Image } from '@imagekit/react'; // Importing the ImageKit component for optimized image rendering
import Image from '../image/image';

const GalleryItem = ({item}) => {
    const optimizedHeight = (372 / item.height) / item.width; // Calculate the optimized height based on the original aspect ratio

    return (
        <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
            <Image path={item.media} alt="" w={372} h={optimizedHeight} />
            <Link to={`/pin/${item.id}`} className="overlay"/>
            <button className="saveButton">Save</button>
            <div className="overlayIcons">
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