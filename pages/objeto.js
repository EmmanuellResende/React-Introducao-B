import React from 'react'
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const objeto = () => {

  const carros = [
    { marca: 'Honda', modelo: 'Civic', ano: '1998', cor: 'Branco', foto: 'https://i5.walmartimages.com/asr/6119aa77-d74d-419f-beac-42be86db1f22_1.0bc96f889ebf3d74482a427a50efdc99.jpeg' },
    { marca: 'Nissan', modelo: 'Silvia RX7', ano: '1992', cor: 'Vermelho', foto: 'https://www.motortrend.com/uploads/f/9556065.jpg?w=412' },
    { marca: 'Nissan', modelo: 'Skyline', ano: '1996', cor: 'Azul Royal', foto: 'https://motorshow.com.br/wp-content/uploads/sites/2/2022/06/nissan-skyline-paul-walker-5.jpg' },
    { marca: 'Ford', modelo: 'Galaxye', ano: '1986', cor: 'Cinza Chumbo', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeTjR0uETTStG10vfjU6zbD10oPnVgqumsg&usqp=CAU' }
  ]

  return (
    <Pagina titulo="Objetos">
      <Container>
        {carros.map(item => (
          <div>
            <img style={{ width: "350px" }} src={item.foto} />
            <h1>{item.marca} - {item.modelo}</h1>
            <p>Ano: {item.ano}</p>
            <p>Cor: {item.cor}</p>
          </div>
        ))}
      </Container>
    </Pagina>
  )

}
export default objeto
