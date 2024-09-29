import {Dropdown} from 'react-bootstrap';
import {BsBookmarks} from 'react-icons/bs';
import {useContext} from 'react';
import BookmarkItem from './BookmarkItem.component';
import { BookmarkContext } from '../../context/Bookmark.context';
import {BookmarkProvider} from '../../context/Bookmark.context';
const BookmarkDropdown = () =>{
    const {bookmarkItems} = useContext(BookmarkContext)
    return(
        <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic" className="m-1"> 
        <BsBookmarks fill='dark'  size ={25}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          
          {bookmarkItems.length ? (
                    bookmarkItems.map((item) => (
                        <Dropdown.Item key={item.id} href="#/action-3">
                            <BookmarkItem bookmarkItem={item} />
                            <hr/>
                        </Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.Item disabled>No bookmarks added</Dropdown.Item>
                )}
        </Dropdown.Menu>
        </Dropdown>
    )
}
export default BookmarkDropdown;