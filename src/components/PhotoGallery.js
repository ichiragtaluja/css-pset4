export function PhotoGallery() {
  return (
    <div className="photo-gallery-container">
      <h1>Photo Gallery</h1>
      <div className="links-container">
        <a href="">All</a>
        <a href="">Nature</a>
        <a href="">Birds</a>
        <a href="">Animals</a>
      </div>
      <div className="photo-container">
        <img src="https://dummyimage.com/500x500/000/fff&text=Dummy" />
        <img src="https://dummyimage.com/500x500/000/fff&text=Dummy" />
        <img src="https://dummyimage.com/500x500/000/fff&text=Dummy" />
      </div>
    </div>
  );
}
