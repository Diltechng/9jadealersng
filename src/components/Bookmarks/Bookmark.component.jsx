import { useContext } from 'react';
import BookmarkItem from './BookmarkItem.component';
import { BookmarkContext } from '../../context/Bookmark.context';
import { CategoriesContext } from '../../context/Categories.context';
import Sidebar from '../../hearders/Sidebar';
import SidebarLeft from '../../hearders/SidebarLeft';
import Addpost from '../../home/AddPost/Addpost';
import Footer from '../../footer/Footer.component';
import Card from '../Card.component';

const Bookmark = () => {
    const { bookmarkItems } = useContext(BookmarkContext);
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
           <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Sidebar />
                    <main className="col ps-md-2 pt-2 w-75 d-flex flex-wrap justify-content-center" style={{ minHeight: '100vh' }}>
                       {/* Check if bookmarkItems exist */}
        {bookmarkItems.length ? (
          bookmarkItems.map((bookmarkItem) => {
            // Find the corresponding category for the bookmarked item
            const category = categoriesMap.find(category =>
              category.items.some(item => item.id === bookmarkItem.id)
            );
            const image = null;
            // If category is found, pass the category and the item to the Card
            if (category) {
              return (
                <div key={bookmarkItem.id}>
                  <Card style={{width: '100%'}} key={bookmarkItem.id} bookmarkItem={bookmarkItem} category={category} item={bookmarkItem}/>
                  <hr />
                </div>
              );
            }

            return null; // Return nothing if no matching category is found
          })
        ) : (
          <div disabled>No bookmarks added</div>
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
