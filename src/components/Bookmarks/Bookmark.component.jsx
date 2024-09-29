import { useContext } from 'react';
import BookmarkItem from './BookmarkItem.component';
import { BookmarkContext } from '../../context/Bookmark.context';
import Sidebar from '../../hearders/Sidebar';
import SidebarLeft from '../../hearders/SidebarLeft';
import Addpost from '../../home/AddPost/Addpost';
import Footer from '../../footer/Footer.component';
import Card from '../Card.component';

const Bookmark = () => {
    const { bookmarkItems } = useContext(BookmarkContext);
    
    return (
        <>
           <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Sidebar />
                    <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center" style={{ minHeight: '100vh' }}>
                        {bookmarkItems.length ? (
                            bookmarkItems.map((item) => (
                                <div key={item.id} className="mb-3">
                                    <BookmarkItem bookmarkItem={item} />
                                </div>
                            ))
                        ) : (
                            <div>No bookmarks added</div>
                        )}
                    </main>
                    <SidebarLeft />
                    <Addpost />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Bookmark;
