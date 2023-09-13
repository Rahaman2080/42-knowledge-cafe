import PropTypes from 'prop-types';

const Blog = ({blog}) => {
      
      const {title, cover,reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='w-9/12'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 mt-7'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}> <a href=""> #{hash}</a></span>)
                }</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;