import '../styles/Gallery.css'

const photos = [
    { src: "/assets/photo1.jpg", title: "Sunset Reflection", description: "A reminder to slow down and appreciate the moment." },
    { src: "/assets/photo2.jpg", title: "Mountain Serenity", description: "A place of peace and stillness." },
  ];
  
  function Gallery() {
    return (
      <div className='gallery-page' style={{ textAlign: "center", padding: "20px" }}>
        <div>
          {photos.map((photo, index) => (
            <div key={index} style={{ margin: "auto", maxWidth: "400px" }}>
              {/* <img src={photo.src} alt={photo.title} width="100%" /> */}
              {/* <h3>{photo.title}</h3> */}
              <p style={{marginTop: "40px"}}>{photo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Gallery;
  