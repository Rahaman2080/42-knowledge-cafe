import './App.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime]= useState(0);

const handleAddBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

const handleReadTime = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
}
  return (
   <>
   <Header></Header>
   <div className='md:flex max-w-5xl mx-auto gap-12'>
   <Blogs handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime}></Blogs>
   <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
   </div>
   
   </>
  )
}

export default App
