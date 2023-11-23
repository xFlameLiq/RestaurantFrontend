import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Home.css'
const CarruselComidaMexicana = () => {
  // Datos de ejemplo, puedes reemplazarlos con tus propias imágenes de comida mexicana
  const imagenesComidaMexicana = [
    'https://laroussecocina.mx/wp-content/uploads/2022/08/5Platillos_portada.jpg.webp',
    'https://www.cardamomo.news/__export/1614180976079/sites/debate/img/2021/02/24/comida_mexicana_crop1614180898556.jpeg_1217713605.jpeg',
    'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/230321110047-06-body-mexican-foods-chilaquiles.webp',
    // Agrega más URLs de imágenes según sea necesario
  ];

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imagenesComidaMexicana.map((imagen, index) => (
        <div key={index}>
          <img className="comida" src={imagen} alt={`Comida Mexicana ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default CarruselComidaMexicana;
