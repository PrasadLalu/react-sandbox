import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const Product = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const handleAddToCart = product => {
    dispatch(addToCart(product))
  }

  const cards = products.map(product => (
    <div className='col-md-3' key={product.id} style={{ marginBottom: '10px' }}>
      <Card style={{ width: '16rem' }}>
        <div className='text-center'>
          <Card.Img
            variant='top'
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title.substring(0, 0)}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant='primary' onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
      <div className='row'>{cards}</div>
    </>
  )
}

export default Product
