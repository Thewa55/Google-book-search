import React, { Component } from "react";
import { saveBook, getSavedBooks, searchGoogleBooks } from "../utils/API";
import Jumbotron from "../components/Jumbotron.js";
import Container from "../components/Container.js";
import Row from "../components/Row.js";
import Col from "../components/Col.js";
import Card from "../components/Card.js";

class Search extends  Component{
  state = {
    searchTerm: "",
    bookList: [],
    savedBookIds: [],
    error: null
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.searchTerm === ""){
      return this.setState({error: "Please enter a title"})
    }
    
    searchGoogleBooks(this.state.searchterm).then(res => {
      console.log(res.data)
      const { items } = res.data
      this.setState({error: null})
      const booklistCleaned = items.map(book =>{
        return {
          bookId: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
        }
      })

      return this.setState({bookList: booklistCleaned, searchTerm: ""})
    }).then(this.retrieveSavedBooks)    
    .catch(err => this.setState({ error: err }))
  };

  retrieveSavedBooks = () => {
    getSavedBooks().then(res => {
      const savedBookIds = res.data.map(book => book.bookId);
      this.setState({ savedBookIds })
    })
    .catch(err => this.setState({ error: err }))
  }

  handleBookSave = bookId => {
    const book = this.state.bookList.find(book => book.bookId === book.id)
    saveBook(book).then(() => {
        const savedBookIds = [...this.state.savedBookIds, bookId];
        this.setState({ savedBookIds})
    }).catch(err => this.setstate({error: err}))
  };

  render(){
    return(
      <>
        <Jumbotron fluid bg={"dark"} color={"light"} pageTitle={"Search for Books"} />
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card title={"Search for a book"}>
                <form onSubmit={this.handleFormSubmit}>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="search for a book"
                    onChange={this.handleInputChange}
                    value={this.state.searchTerm}
                    name="searchTerm"
                  />
                  {this.state.error && !this.state.searchTerm.length && <div className="alert-danger my-2">{this.state.error}</div>}
                  <button type="submit" className="btn btn-block btn-dark mt-2">
                    Search for a book
                  </button>
                </form>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              {!this.state.bookList.length ?(
                <h2 className="text-center">Search for book to begin</h2>
              ): (
                this.state.bookList.map(book => {
                  return(
                    <Col key={book.id} md={4}>
                      <Card 
                        title={book.title}
                        image={book.image ? book.image : undefined}  
                      >
                        <small className="text-muted">
                          {`By: ${book.authors.length ? book.authors.join(', '): null}`}
                        </small>
                        <p>{book.description}</p>
                        <button
                          disabled={this.state.savedBookIds.includes(book.bookId) ? true : undefined}
                          className="btn btn-success"
                          onClick={() => this.handleBookSave(book.bookId)}
                        >Save Book</button>
                      </Card>
                    </Col>
                  )
                })
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Search;