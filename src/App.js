import Toolbar from './Toolbar';
import React, { createRef, useState } from 'react';

const Item = ({ name, price }) => (
  <li>{name}, ${price}</li>
  )
  
const App = props => {
    let [ items, setItems ] = useState([
      { id: 1, name: 'Apple', price: 0.99 },
      { id: 2, name: 'Orange', price: 0.89 },
    ]);
    let nameRef = createRef();
    let priceRef = createRef();
    let add = () => {
      let id = items.length + 1;
      let name = nameRef.current.value;
      let price = priceRef.current.value;
      setItems([
        ...items,
        { id, name, price }
      ]);
    }
    return (
      <div>
        <Toolbar>
          <h1>React</h1>
          <h2>Component composition</h2>
          <p>Hello</p>
        </Toolbar>
        <ul>
        {items.map(i => (
          <Item 
          key={i.id}
          name={i.name}
          price={i.price}
          />
          ))}
          </ul>
          <input type="text" ref={nameRef} /><br />
          <input type="text" ref={priceRef} /><br />
          <button onClick={add}>Add</button>
        </div>
        )
      }
      
      // class Item extends React.Component {
      //   render() {
      //     return (
      //       <li>
      //       {this.props.name},
      //       ${this.props.price}
      //       </li>
      //       );
      //     }
      //   }
      //   class AddForm extends React.Component {
      //     nameRef = React.createRef();
      //     priceRef = React.createRef();
      //     add = () => {
      //       let name = this.nameRef.current.value;
      //       let price = this.priceRef.current.value;
      //       this.props.add(name, price);
      //     }
      //     render() {
      //       return (
      //         <div>
      //         <input type="text" ref={this.nameRef} /><br />
      //         <input type="text" ref={this.priceRef} /><br />
      //         <button onClick={this.add}>Add</button>
      //         </div>
      //         )
      //       }
      //     }
      
      
      //     class App extends React.Component {
      //       state = {
      //         items: [
      //           { id: 1, name: 'Apple', price: 0.99 },
      //           { id: 2, name: 'Orange', price: 0.89 },
      //         ]
      //       }
      //       add = (name, price) => {
      //         let id = this.state.items.length + 1;
      //         this.setState({
      //           items: [
      //             ...this.state.items,
      //             { id, name, price }
      //           ]
      //         });
      //       }
      //       render() {
      //         return (
      //           <div>
      
      
      //             <Toolbar>
      //             <h1>Logo</h1>
      //             <h2>Component composition</h2>
      //             <p>Hello</p>
      //             </Toolbar>
      //             <h1>Hello React</h1>
      //             <ul>
      //             {this.state.items.map(i => {
      //               return (
      //                 <Item
      //                 key={i.id}
      //                 name={i.name}
      //                 price={i.price} 
      //                 />
      //                 )
      //               })}
      //               </ul>
      //               <AddForm add={this.add} />
      //               </div>
      //               )
      //             }
      //           }
      
      // class App extends React.Component {
      //   state = {
      //     items: [
      //       { id: 1, name: 'Apple', price: 0.99 },
      //       { id: 2, name: 'Orange', price: 0.89 },
      //     ]
      //   }
      //   nameRef = React.createRef();
      //   priceRef = React.createRef();
      
      //   add = () => {
      //     let id = this.state.items.length + 1;
      //     let name = this.nameRef.current.value;
      //     let price = this.priceRef.current.value;
      
      //     this.setState({
      //       items: [
      //         ...this.state.items,
      //         { id, name, price }
      //       ]
      //     });
      //   }
      //   render() {
      //     return (
      //       <div>
      //       <h1>Hello React</h1>
      //       <ul>
      //       {this.state.items.map(i => {
      //         return (
      //           <Item key={i.id} name={i.name} price={i.price} />
      //           )
      //         })}
      //         </ul>
      //           <input style={{borderColor: "gray"}} type="text" ref={this.nameRef} /><br />
      //           <input style={{borderColor: "gray"}} type="text" ref={this.priceRef} /><br />
      //           <AddForm add={this.add} />
      
      
      //           </div>
      //           )
      //         }
      //       }
      
      
      export default App;
      