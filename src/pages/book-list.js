import React from 'react'
// import ReactDom from 'react-dom/client'
// import {rato} from '../ratinho.jpg'

const firstBook = {
  author: 'Alice Schertle',
  img: 'https://m.media-amazon.com/images/I/51l34Xy8mwL._SY455_BO1,204,203,200_.jpg',
  title: `Little Blue Truck's Valentine: A Valentine's Day Book For Kids`,
}
const secondBook = {
  author: 'Laura Numeroff',
  img: `https://m.media-amazon.com/images/I/51EyGXJ1lXL._SY498_BO1,204,203,200_.jpg`,
  title: `Happy Valentine's Day, Mouse!: A Valentine's Day Book For Kids (If You Give...)`,
}

const BookList = () => {
  return(
    <section className='book-list'>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
      <EBook/>
      <IBook author={firstBook.author} title={firstBook.title} img={firstBook.img}>
        <p>oonorbanbdbknkni ubibeaibiervib bugyunieffsfbadv eruhhiabfifbjb</p>
      </IBook>
    </section>
  )
}
export default BookList

const Book = (props) => {
  return(
    <article className='book'>
      <img src={props.img} alt={props.title}/>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}
// outra forma de fazer o mesmo

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

const IBook = ({img, author, title, children}) => {
  return(
    <section className='book'>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </section>
  )
}
