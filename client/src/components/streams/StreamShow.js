import React,{useEffect} from 'react';
import flv from 'flv.js';
import {useParams} from 'react-router-dom';
import {connect,useSelector} from 'react-redux';
import {fetchStream} from '../../actions';

const StreamShow = (props) => {
  const {id} = useParams();

  const videoRef = React.createRef();

  useEffect(() => {
    props.fetchStream(id);
    buildPlayer();
  },[]);

  const buildPlayer = () => {
    if(!stream){
      return;
    }
    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  }

  const stream = useSelector((state) => state.streams[id]);

  if(!stream){
    return(<div>Loading...</div>);
  }else{
    return(
      <div>
        <video ref={videoRef} style={{width:'100%'}} controls={true}/>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
};

export default connect(null,{fetchStream})(StreamShow);
