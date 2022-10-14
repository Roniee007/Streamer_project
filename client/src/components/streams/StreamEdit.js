import _ from 'lodash';
import React,{useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchStream(id);
  }, []);

  const onSubmitForm = (formValues) => {
    props.editStream(id, formValues);
    navigate('/');
  }

  const stream = useSelector((state) => state.streams[id]);
  if(!stream){
    return(<div>Loading...</div>);
  }else{
    return(
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmitForm={onSubmitForm} />
      </div>
    );
  }
};

export default connect(null,{fetchStream, editStream})(StreamEdit);
