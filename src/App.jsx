import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Searchbar(){
  return (

   
    
    <div className="searchbar-container">
    <input type="text" placeholder="search..." className="searchbar" />
    <br/> 

    
     <div>
    <input type = "checkbox" className="checkbox"  />

    <span>Only show products in stock</span>

    </div>

    </div>

  

  )
}

function ProductCategoryRow({category, items}){

  return(
    <div className="product-category-row">
      <span className="product-category">{category}</span>
      <table>
        <tbody>
          {items.map(item=><tr className="product-row"><td style={item.stocked? {color:'black'} : {color: 'red'}}>{item.name}</td><td>{item.price }</td></tr>)}
        </tbody>
      </table>
    </div>
  )

}

function ProductTable(){

    return(
      <>
      <div className="product-table">
        
        <div className="product-table-header">
          <span>Name</span>
          <span>Price</span>
        
        </div>
        

        
      </div>
      </>
    )


}



function App() {
  const [count, setCount] = useState(0)

  const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

  return (
    <>
      <Searchbar />

      <ProductTable />

      <ProductCategoryRow category="Fruits" items={products.filter(p => p.category === "Fruits")} />

      <ProductCategoryRow category="Vegetables" items={products.filter(p => p.category === "Vegetables")} />  

       
    </>
  )
}

export default App
