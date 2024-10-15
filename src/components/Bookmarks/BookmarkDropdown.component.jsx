import { Dropdown } from 'react-bootstrap';
import { BsBookmarks } from 'react-icons/bs';
import { useContext } from 'react';
import BookmarkItem from './BookmarkItem.component';
import { CategoriesContext } from '../../context/Categories.context';
import { BookmarkContext } from '../../context/Bookmark.context';
import Card from '../Card.component';

const BookmarkDropdown = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { bookmarkItems } = useContext(BookmarkContext);

  // Only show bookmark items if they exist
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="m-1">
        <BsBookmarks fill='dark' size={25} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
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
                  <Card style={{width: '100%'}} key={bookmarkItem.id} bookmarkItem={bookmarkItem} category={category} item={bookmarkItem} frImg={{display: 'none'}}/>
                  <hr />
                </div>
              );
            }

            return null; // Return nothing if no matching category is found
          })
        ) : (
          <div disabled>No bookmarks added</div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BookmarkDropdown;
