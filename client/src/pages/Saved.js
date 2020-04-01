import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import { removeBooks, getSavedBooks } from "../utils/API";

class Saved extends Component{
  state={
    bookList: []
  }

  componentDidMount(){
    this.handleGetSavedBooks()
  }


  handleGetSavedBooks = () => {
    getSavedBooks().then(({ data: bookList}) => {
      this.setState({bookList})
    }).catch(err => console.log(err))
  }

  handleRemoveBook = bookId => {
    removeBooks(bookId).then(this.handleGetSavedBooks).catch(err => console.log(err))
  }

  render(){
    console.log(this.state.bookList)
    return(
      <>
        <Jumbotron fluid bg={"dark"} color={"light"} pageTitle={"Viewing Saved Books"} />
        <Container>
          <Row>
            {!this.state.bookList.length ? (
              <h2 className="text-center">No Saved Books</h2>
            ): (
              this.state.bookList.map( book => {
                return(
                  <Col key={book._id} md={4}>
                    <Card 
                      bg={"dark"}
                      title={book.title}
                      image={book.image ? book.image : undefined}
                    >
                      <small className="text-muted">
                        {`By: ${book.authors.length ? book.authors.join(', '): null}`}
                      </small>
                      <p>{book.description}</p>
                      <button onClick={() => this.handleGetSavedBooks(book.id)} className="btn btn-danger btn-sm">Remove Book</button>
                    </Card>
                  </Col>
                )
              })
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default Saved;