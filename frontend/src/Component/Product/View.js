import React from 'react'

// bootstrap
import { Button ,Card  } from 'react-bootstrap';


const View = ({product}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
              {product.description}
          </Card.Text>
          <Button variant="primary">Price : {product.price}</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default View