import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart)

  const removeFromCart = id => {
    dispatch(removeProduct(id))
  }

  const cards = cartProducts.map(product => (
    <div className='col-md-4' key={product.id} style={{ marginBottom: '10px' }}>
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
          <Button variant='danger' onClick={() => removeFromCart(product.id)}>
            Remove
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

export default Cart
