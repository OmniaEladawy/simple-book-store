import React, {Fragment} from 'react';
import './App.css';
import AddForm from './Components/AddForm';
import BookContainer from './Components/BookContainer';
import Container from './Components/Container';
import Header from './Components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <BookContainer />
        <hr />
        <AddForm />
      </Container>
    </Fragment>
  );
}

export default App;
