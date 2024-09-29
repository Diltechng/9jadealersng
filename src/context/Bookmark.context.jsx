import {createContext, useState, useEffect} from 'react';
const removeBoomarkItem = (bookmarkItems, productToRemove) =>{
    return bookmarkItems.filter((bookmarkItem) => bookmarkItem.id !== productToRemove.id);
}
const addBookmarkItem = (bookmarkItems, productToAdd) => {
    const existingBookmarkItem = bookmarkItems.find(
        (bookmarkItem) => bookmarkItem.id === productToAdd.id
    );
    if(existingBookmarkItem){
        return bookmarkItems;
        /* if (bookmarkItems.category === ""){
        bookmarkItems.map((bookmarkItem) => bookmarkItem.id === productToAdd.id ?
    {...bookmarkItem, quantity: bookmarkItem.quantity + 1}
    : bookmarkItem}*/
    
    }
    return [...bookmarkItems, {...productToAdd, quantity: 1}]
}
export const BookmarkContext = createContext({
    bookmarkItems: [],
    addItemBookmarks: () =>{},
    removeItemBoomark: () =>{},
});

export const BookmarkProvider = ({children}) =>{
    const [bookmarkItems, setBookmarkItems] = useState(() => {
        // Load bookmarks from local storage on initial render
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkItems'));
        return storedBookmarks || [];
    });
    useEffect(() => {
        localStorage.setItem('bookmarkItems', JSON.stringify(bookmarkItems));
    }, [bookmarkItems]);
    const addItemBookmarks = (productToAdd, items) => {
        setBookmarkItems(addBookmarkItem(bookmarkItems, productToAdd));
             
    };
    const removeItemBookmark = (productToRemove) =>{
        setBookmarkItems(removeBoomarkItem(bookmarkItems, productToRemove));

    }
    const value = { bookmarkItems, addItemBookmarks, removeItemBookmark };
    return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>
}