import React from 'react';
import './gallery.scss'

const images = [
  'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886',
  'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
  'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezRbjOGrycZeoTHRd7U57LzEQ1vgyhgwOGA&usqp=CAU',
  'https://cdn.casaeculinaria.com/wp-content/uploads/2023/04/05163949/Hamburguer-artesanal.webp'
];

const ImageGallery = () => {
  const galleryRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      const galleryWidth = galleryRef.current.offsetWidth;

      const aspectRatioSum = images.reduce((sum, image) => {
        const img = new Image();
        img.src = image;
        return sum + img.width / img.height;
      }, 0);

      const desiredImageHeight = galleryWidth / aspectRatioSum;

      galleryRef.current.style.height = `${desiredImageHeight}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="image-gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <div className="image-wrapper" key={index}>
          <img src={image} alt={`${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
