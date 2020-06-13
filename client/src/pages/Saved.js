import React, { Component } from 'react';
import { Container, ListGroupItem, ListGroup } from 'reactstrap';
import AppNavbar from '../components/AppNavbar/index';
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
          .then(res => {
            this.setState({ books: res.data })
            console.log("hello from line 19");
          })
          .catch(err => console.log(err.response));
      };

    render() {
        return (
            <div>
                <AppNavbar/>
                <Container>
                    <ListGroup>
                        <h1>Did this load?</h1>
                        {this.state.books.map(savedBook => (
                            <ListGroupItem>
                                { savedBook.title }
                            </ListGroupItem>
                        ))}
                        { this.state.books.length }
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Saved;