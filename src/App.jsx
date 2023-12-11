import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [book,setData] = useState([])

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(response =>{
      setData(response.data.books)
    }).catch(error=>{
      if(error.response.status==404){
        console.log('Status code:',error.response.status)
        console.log('Website not found')
      }
    })

  },[])
  // console.log(book.map(books => books.titleg))
  console.log(book);

  return (
    <>
    <div>
      {book.map((item)=>{
        return<div key={item.id} className='div'>
          <h1>{item.title}</h1>
          <div className='div2'>
            <img src={item.imageLinks.smallThumbnail} alt="images" />
            <p>{item.description}</p>
          </div>
          <div className='author'>
          {item.authors.map((data,index)=>{
              return(<div key={index}> 
                <span>{data}</span>
              </div>)
          })}
          </div>
          <hr />
        </div>
      })}
    
    </div>
      
    </>
  )
}

export default App
