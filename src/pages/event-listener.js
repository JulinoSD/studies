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

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle Button input')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submited')
  }
  return (
  <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical form</h2>
      <input type='text' name='example' onChange={handleFormInput} style={{margin: '1rem 0'}} />
    </form>
    <button onClick={handleButtonClick}>click me</button>
  </section>
  )
}

function BookList1(){
  return(
    <article className="book-list">
      <EventExamples/>
      {books.map((book)=>{
        return( 
        <EBook book {...book} key={book.id}/>
        )
      })}
    </article>
  )
}

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
export default BookList1