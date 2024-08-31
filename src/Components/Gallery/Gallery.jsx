import "../Gallery/Gallery.css";
import { Link } from "react-router-dom";
import { GalleryContext } from "../../context/GalleryContext";
import { useContext } from "react";


const Gallery = () => {
  const galleryData = useContext(GalleryContext);

  return (
    <div>
      <div className="gallery">
        {galleryData.map((g) => (
          <Link key={g.id} to={`/GalleryDetails/${g.id}/${g.name}`}>
            <div className='card'>
              <img src={g.images.thumbnail} alt={g.artist.name} />
              <div className="gradientWrapper"></div>
              <div className="textContainer">
                <h2>{g.name}</h2>
                <p>{g.artist.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Gallery