import '../styles/Gallery.css'

const photos = [
    { src: "/assets/photo1.jpg", title: "Sunset Reflection", description: "A reminder to slow down and appreciate the moment." },
    { src: "/assets/photo2.jpg", title: "Mountain Serenity", description: "A place of peace and stillness." },
  ];
  
  function Gallery() {
    return (
      <div className='gallery-page' style={{ textAlign: "center", padding: "20px" }}>
        <h1>My Photo Gallery</h1>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {photos.map((photo, index) => (
            <div key={index} style={{ margin: "10px", maxWidth: "300px" }}>
              {/* <img src={photo.src} alt={photo.title} width="100%" /> */}
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Gallery;
  