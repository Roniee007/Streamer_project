import React from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
  const navigate = useNavigate();

  const onSubmitForm = (formValues) => {
    props.createStream(formValues);
    navigate('/');
  }

  return(
    <div>
      <h3> Create a Stream </h3>
      <StreamForm onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default connect(null, {createStream})(StreamCreate);
