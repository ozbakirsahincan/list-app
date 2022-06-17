import React, { useState } from 'react';
import './App.css';
import Card from './components/card/card';

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      price: 200,
      name: "Ios",
      image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      title: "Iphone 12"
    },
    {
      id: 2,
      price: 150,
      name: "Ios",
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      title: "Iphone 11"
    },
    {
      id: 3,
      price: 100,
      name: "Android",
      image: "https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
      title: "Xiaomi 10"
    },
    {
      id: 4,
      price: 50,
      name: "Android",
      image: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      title: "Xiaomi 11"

    },
  ])
  const [boxProduct, setBoxProduct] = useState([])
  return (
    <div className="App">
      <h3>Ürün Listesi</h3>
      <div className="gridItems">
        {
          productList.map((product, index) => {
            return (
              <Card
                onClick={() => {
                  const arr = [...boxProduct]
                  arr.push(product)
                  setBoxProduct(arr)
                }}
                key={index}
                image={product.image}
                title={product.name}
                info={product.title}
              />
            )
          })
        }
      </div>
      {boxProduct.length > 0 &&
        <div>
          <h4>Aldığınız Ürünler</h4>

          {
            boxProduct.map((boxProduct, index) => {
              return (
                <div key={index}>
                  {JSON.stringify(boxProduct)}

                </div>
              )
            })
          }
        </div>
      }
      <hr />
      {boxProduct.length < 1 && <div>Sepetinizde ürün bulunmamaktadır</div>}

    </div>
  );
}

export default App;
