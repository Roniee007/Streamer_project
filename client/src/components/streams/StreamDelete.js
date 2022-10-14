import React,{useEffect} from 'react';
import Modal from '../Modal';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';

const StreamDelete = (props) => {
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchStream(id);
  }, []);

  const onClick = () => {
    props.deleteStream(id);
    navigate('/');
  };

  const actions = (
    <div className="actions">
      <button onClick={onClick} className="ui negative button">Delete</button>
      <Link to="/" className="ui primary button">Cancel</Link>
    </div>
  );

  const stream = useSelector((state) => state.streams[id]);
  console.log(id);
  console.log(stream);

  const content = () => {
    if(!stream){
      return("Loading");
    }else{
      return(`Are you sure, you want to delete stream with title: "${stream.title}"`);
    }
  };

  return(
    <Modal
      title="Delete Stream"
      content={content()}
      actions= {actions}
      onDismiss = {() => navigate('/')}
    />
  );
};

export default connect(null,{fetchStream, deleteStream})(StreamDelete);
