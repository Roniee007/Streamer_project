import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

const App = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Routes>
          <Route exact path="/" element={<StreamList />} />
          <Route exact path="/streams/new" element={<StreamCreate />} />
          <Route exact path="/streams/edit/:id" element={<StreamEdit />} />
          <Route exact path="/streams/delete/:id" element={<StreamDelete />} />
          <Route exact path="/streams/show/:id" element={<StreamShow />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
