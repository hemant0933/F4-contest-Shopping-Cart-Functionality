import React, { useEffect} from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
  
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
      dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //         const res = await fetch('https://fakestoreapi.com/products')

    //         const data = await res.json();

    //         // console.log(data);

    //         setProducts(data);
    // }
    // fetchProducts();

  },[]);

  const handleAdd = (product) => {
      dispatch(add(product));
  }

  if( status === STATUSES.LOADING){
    return (<div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>)
  }
  if(status === STATUSES.ERROR){
    return <h1>Something went wrong....</h1>
  }
    return (
        <div className='productsWrapper'> 
                {
                    products.map((product) => (
                        <div className='card' key={new Date().getDate + Math.random()}>
                            <img src={product.image} alt='productImage'/>
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleAdd(product)} >Add to Cart</button>
                        </div>
                    ))
                }
        </div>
  );
}

export default Products;
