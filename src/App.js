import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter>
      <Counters></Counters> */}
      <ExternalUsers></ExternalUsers>
      <User></User>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External Users:</h2>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }

      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
};

function User(props){
  return(
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}





function Counter(){
  const [count, setCount] = useState(50);

  const increaseCount = () =>  setCount(count +1);
   const decreaseCount = () => setCount(count -1);
  
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

 

function Counters(){
  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count +1);
  const decreaseCounts = () => setCount(count -1)
  return(
    <div>
    <h1>Counter1: {count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCounts}>Decrease</button>
    </div>
  )
}

/*
  const products = [
    {name: 'Laptop', price: '74500'},
    {name: 'Phone', price: '4512'},
    {name: 'Watch', price: '45212'},
    {name: 'Tablet', price: '46512'}
  ]
*/

  //  {/* <Product name= 'Laptop' price='45555'></Product>
  //    <Product name= 'Phone' price='1000005'></Product>
  //    <Product name= 'Watch' price='1000005'></Product> */}

  //    {
  //     products.map(product => <Product name={product.name} price={product.price}></Product>)
      
  //     }

// function Product(props){
//   return(
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
