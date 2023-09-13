import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

    return (
        <div className="md: full lg:w-4/6 p-4 lg:p-0">
            <h1 className="text-xl lg:text-2xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleReadTime ={handleReadTime}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.object.isRequired,
    handleReadTime: PropTypes.object.isRequired
}
export default Blogs;