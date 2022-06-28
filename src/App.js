import Axios from 'axios';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

function App() {
  const userID = 'dLhcDBAcGu6SxucaVETV3dfdZiGi1SghBdfsvr-4A2c';
  const url = `https://api.unsplash.com/photos/random?client_id=${userID}&count=30`;
  const [images, setImages] = useState([]);

  const getImages = () => {
    Axios.get(url).then((res) => {
      setImages(res.data);
    })
  }

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!images) {
    return <h2>Loading.....</h2>
  }
  console.log(images);
  return (
    <div className="App">
      {(images || []).map((val) => {
        return (
          <LazyLoadImage
            alt={val?.alt_description}
            effect="blur"
            height="500px"
            key={val.id}
            loading="lazy"
            src={val?.urls?.regular}
            width="400px"
          />
        );
      }
      )}
    </div>
  );
}

export default App;
