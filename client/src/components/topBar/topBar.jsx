import UserButton from '../userButton/userButton';
import Image from '../image/image';
import './topBar.css';

const TopBar = () => {
    return (
        <div className="topBar">
            {/* Search */}
            <div className='search'>
                <Image path="/general/search.svg" alt="Search" />
                <input type="text" placeholder='Search' />
            </div>
            <UserButton/>
        </div>
    )
}

export default TopBar;