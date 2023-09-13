import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <>
        <div className="md:w-1/3 h-1/2 bg-gray-200 rounded-xl mt-7 shadow-xl">
            <div className=' bg-white p-4 m-4 rounded-xl'>
                <h3 className='text-xl font-bold text-center'>Total reading: {readingTime} min</h3>
            </div>
            <h2 className="text-xl font-bold text-left pl-4 py-5">Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;