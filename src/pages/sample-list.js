import React from 'react'
// import ReactDom from 'react-dom/client'
// import {rato} from '../ratinho.jpg'

const books = [
  {
    id: 1,
    author: 'Alice Schertle',
    img: 'https://m.media-amazon.com/images/I/51l34Xy8mwL._SY455_BO1,204,203,200_.jpg',
    title: `Little Blue Truck's Valentine: A Valentine's Day Book For Kids`,
  },
  {
    id: 2,
    author: 'Laura Numeroff',
    img: `https://m.media-amazon.com/images/I/51EyGXJ1lXL._SY498_BO1,204,203,200_.jpg`,
    title: `Happy Valentine's Day, Mouse!: A Valentine's Day Book For Kids (If You Give...)`,
  },
]


const BukList = () => {
  return(
    <section className='book-list'>
      {/* primeira forma muito mais trabalhosa
      {books.map((book)=>{
        return( 
        <div>
          <img src={book.img} alt={book.title}/>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div>
        )
      })}
      Uma terceira forma de fazer este processo é passar o objeto como uma props, vejamos:
      {books.map((book)=>{
        return( 
        <Book book={book} key={book.id}/>
        )
      })}
      Uma quarta forma de fazer este processo é usar spread operator, vejamos:
      {books.map((book)=>{
        return( 
        <Book book {...book} key={book.id}/>
        )
      })}
      */}
      {books.map((book)=>{
        const {author, img, title, id} = book
        return(
          <EBook author={author} title={title} img={img} key={id}/>
        )
      })}
    </section>
  )
}
export default BukList

// const Book = (props) => {
//   return(
//     <article className='book'>
//       <img src={props.img} alt={props.title}/>
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }
// // outra forma de fazer o mesmo
// Terceiro método que funciona para o quarto método também.
// const Book = (props) => {
//   const {img, title, author}=props.book
//   return(
//     <article className='book'>
//       <img src={img} alt={title}/>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }
// Pode ser feito desta forma também:
// const Book = ({book: {img, author, title}}) => {
//   return(
//     <article className='book'>
//       <img src={img} alt={title}/>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

const EBook = (props) => {
  const {author, img, title} = props
  return (
    <article className='book'>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

// const IBook = ({img, author, title, children}) => {
//   return(
//     <section className='book'>
//       <img src={img} alt={title}/>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </section>
//   )
// }
