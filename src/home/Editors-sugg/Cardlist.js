import React from 'react';

function Cardlist() {
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <div className="container" onWheel={handleScroll}>
        <div className="item">
          {/* Item content */}
          hello
        </div>
        <div className="item">
          {/* Item content */}
          hello
        </div>
        <div className="item">
          {/* Item content */}
          hello
        </div>
      </div>
      <footer>
        {/* Footer content */}
        hello
      </footer>
    </div>
  );
}
export default Cardlist;