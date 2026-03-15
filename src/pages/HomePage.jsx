import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';


export function HomePage() {

  const [products, setProducts] = useState([products]);

  {/*
  -Axios is much easier and cleaner way of fetching data instead of using fetch(). Same as fetch() code below.
  -We put it in useEffect to control how often we want it to run which is once only */ }


  useEffect(() => {
    setTimeout(() => {
      axios.get('http://localhost:3000/api/products')
        .then(res => setProducts(res.data));
    }, 3000);
  }, []);

  {/*useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  */}

  {/*fetch('http://localhost:3000/api/products')
    .then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
    });*\}
  {/* 
     - .json gives us the data attached to the repsonse, however this is also asynchronous so we have to use .then()
     - now we have access to the data, we can use it as parameter in .then()
  */}
  {/*
    -Called data fetching, gets data from backend
    - fetch is built in function provided by javascript. Put URL where you get data from.
    -Can't save in a variable, also called as ASYNCHRONOUS code
    -fetch() Returns a promise, promise lets us wait for asynch code to finish  
    -method .then --> fetch() takes time to get a response from backend, so code will keep going line by line. When the code finishes that's the time we get response from backend then function in .then() will run.
    -response a parameter from the response of backend
    - when we contact backend using fetch() that's called request. When backend responds with some data that's called response

    */}

  return (
    <>
      <link rel="icon" type="image/png" href="/images/home-favicon.png" />

      <Header />

      <div className="home-page">
        <div className="products-grid">
          {/*This part of code generate HTML using React with map()*/}
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">{/* key prop helps react track changes in this array*/}
                <div className="product-image-container">
                  <img className="product-image"
                    src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)} {/*JS method on the Number prototype that formats a number to a fixed number of decimal places and returns as string */}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            )
          })}

        </div>
      </div>

    </>

  );
}

//1) moved the html content
//6:18 yt