import ProfileThumb from '../funtctionalComp/ProfileThumb';
import { Row, Col } from 'react-bootstrap';
import {Fragment} from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../context/Categories.context';
import { BookmarkContext } from '../context/Bookmark.context';
import { BsEye, BsBookmarkPlus, BsHandThumbsUp, BsActivity, BsBookmarkDashFill } from 'react-icons/bs';
import { FcShare } from 'react-icons/fc';
import { FaRegComments } from 'react-icons/fa';

const Card = ({ children, style,  key, category, bookmarkItem, frImg }) => {
  const { addItemBookmarks, removeItemBookmark, bookmarkItems } = useContext(BookmarkContext);
  const { categoriesMap } = useContext(CategoriesContext);

  // Check for empty categoriesMap
  /*if (!Object.keys(categoriesMap).length) {
    return <div>Loading...</div>;
  }*/
            const {items, Category} = category;

  return (
    
          <>
         
            {items.map(({ id, Text, author, image, title, price }) => {
              const isBookmarked = bookmarkItems.some((bookmarkItem) => bookmarkItem.id === id)
              return (
                <div className="col-12 col-sm-6 col-md-7 col-lg-7 mb-3" key={id} style={style}>
                  {children}
                  <div className="p-3 border bg-light h-100 d-flex" style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="profile text-secondary d-flex mb-3 justify-content-evenly align-content-center h-25 w-100">
                      <ProfileThumb />
                      <span className="w-75 h-100 text-center d-flex justify-content-start p-2 align-items-center" style={{ fontWeight: 700 }}>
                        {author}
                      </span>
                    </div>
                    <p className="text-start p-2 h-100 w-100">{Text}</p>
                    <div className="container" style={frImg}>
                      {image && image.length > 0 && (
                        <Row>
                          {(() => {
                            switch (image.length) {
                              case 1:
                                return (
                                  <Col xs={12}>
                                    <img src={image[0]} alt="img-1" className="img-fluid rounded w-100" />
                                  </Col>
                                );
                              case 2:
                                return (
                                  <>
                                    <Col xs={6}>
                                      <img src={image[0]} alt="img-1" className="img-fluid rounded w-100" />
                                    </Col>
                                    <Col xs={6}>
                                      <img src={image[1]} alt="img-2" className="img-fluid rounded w-100" />
                                    </Col>
                                  </>
                                );
                              case 3:
                                return (
                                  <>
                                    <Col xs={12} className="mb-1">
                                      <img src={image[0]} alt="img-1" className="img-fluid rounded w-100" />
                                    </Col>
                                    <Col xs={12} className="d-flex flex-wrap">
                                      <img src={image[1]} alt="img-2" className="img-fluid rounded w-50 h-100 p-1" />
                                      <img src={image[2]} alt="img-3" className="img-fluid rounded w-50 h-100 p-1" />
                                    </Col>
                                  </>
                                );
                              case 4:
                                return (
                                  <Col xs={12} className="d-flex flex-wrap">
                                    <img src={image[0]} alt="img-1" className="img-fluid w-50 p-1 rounded" />
                                    <img src={image[1]} alt="img-2" className="img-fluid rounded w-50 p-1" />
                                    <img src={image[2]} alt="img-3" className="img-fluid rounded w-50 p-1" />
                                    <img src={image[3]} alt="img-4" className="img-fluid rounded w-50 p-1" />
                                  </Col>
                                );
                              default:
                                return (
                                  <Row key={0} className="image-grid">
                                    <img src={image[0]} alt="img" />
                                  </Row>
                                );
                            }
                          })()}
                        </Row>
                      )}
                    </div>
                    <div className="container w-100 p-2">
                      <div className="row flex-nowrap justify-content-evenly align-content-center">
                        <span className="col-2">
                          <BsHandThumbsUp fill={'#808080'} size={25} />
                        </span>
                        <span className="col-2">
                          <FaRegComments fill={'#43a047'} size={25} />
                        </span>
                        <span key={id}
                          className="col-2"
                          onClick={() => {
                            if (isBookmarked) {
                              removeItemBookmark({ id }); // Remove bookmark if already bookmarked
                            } else {
                              addItemBookmarks({ id, title, author, image, Text, price }); // Add bookmark if not bookmarked
                            }
                          }}
                        >
                          {isBookmarked ? <BsBookmarkDashFill fill={'#4caf50bd'} size={20} /> : <BsBookmarkPlus size={20} />}
                        </span>
                        <span className="col-2">
                          <BsEye fill={'#663399'} size={25} />
                        </span>
                        <span className="col-2">
                          <BsActivity fill={'#ffa000'} size={25} />
                        </span>
                        <span className="col-2">
                          <FcShare size={25} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
          


  );
};
    export default Card;