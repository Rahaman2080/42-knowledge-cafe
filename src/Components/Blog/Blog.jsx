import PropTypes from 'prop-types';
import {BsBookmarks} from 'react-icons/bs'

const Blog = ({blog, handleAddBookmark, handleReadTime}) => {
      
      const {title, cover,reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center '>
            
                <div className='flex gap-2 my-5'>
                    <img className='w-12 lg:w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold text-sm lg:text-lg'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span> <button onClick={()=>handleAddBookmark(blog)}><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className="text-xl lg:text-3xl font-bold mb-4">{title}</h2>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}> <a href=""> #{hash}</a></span>)
                }</p>
                <button className='pt-4 text-blue-800 font-bold underline' 
                onClick={()=>handleReadTime(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.object.isRequired,
    handleReadTime: PropTypes.func
}

export default Blog;