import Carousel from 'react-bootstrap/Carousel';
import Valle from '../assets/valleCocora.jpg';
import Baile from '../assets/adultos-jovenes-disfrutan-festival-tradicional-bailando-al-aire-libre-generado-ia.jpg';
import Calles from '../assets/arquitectura-aire-libre-mezclan-ciudad-mediterranea-historica-ia-generativa.jpg';
import { useState } from 'react';
import '../styles/carousel.css';
function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="SlidesPics" src={Baile}/>
        <Carousel.Caption>
          <h3 className='slideName'>Conoce nuestra Cultura</h3>
          <p className='slideText'>Nuestra gente te recibe con brazos abiertos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="SlidesPics" src={Valle}/>
        <Carousel.Caption>
          <h3 className='slideName'>Conoce nuestros paisajes</h3>
          <p className='slideText'>Un ambiente rico en biodiversidad y naturaleza</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="SlidesPics" src={Calles}/>
        <Carousel.Caption>
          <h3 className='slideName'>Conoce nuestras ciudades</h3>
          <p className='slideText'>
            Sus calles llenas de vida y su arquitectura te sorprenderán
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;