import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../../context/GalleryContext";

import "../GalleryDetails/GalleryDetails.css";

function GalleryDetails() {
    const galleryes= useContext(GalleryContext);
    const { galleryId } = useParams();
    const gallery = galleryes.find((g) => g.id === galleryId);
    console.log(gallery)

    console.log(gallery.artist.image);

    return (
      <>
    <div className="container">
      <div className="gallery-box">
        <div className="galleryTitle">
          <img
            src={gallery.images.hero.small}
            alt={gallery.name}
            className="hero"
          ></img>
          <img
            src={gallery.images.hero.large}
            alt={gallery.name}
            className="heroLarge"
          ></img>


          <div className="artist">
            <h1>{gallery.name}</h1>
            <p>{gallery.artist.name}</p>
          </div>
          <img
            src={gallery.artist.image}
            alt={gallery.artist.name}
            className="portrait"
          />
        </div>

        <div className="right">
          <div className="description-box">
            <p className="description">{gallery.description}</p>
            <p className="bigText">{gallery.year}</p>
          </div>
          <a className="sourceLink" href={gallery.source}>
            Go to source
          </a>
        </div>
      </div>



    </div>
        </>
    );
}

export default GalleryDetails;