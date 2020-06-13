import React, { Compartment, Component } from 'react';
import { Container, ListGroupItem, Button, ListGroup } from 'reactstrap';
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
            .then(savedBooks => 
                this.setState({ books: savedBooks.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <Container>
                    <ListGroup>
                        <h1>Did this load?</h1>
                        {/* {this.state.b} */}
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Saved;