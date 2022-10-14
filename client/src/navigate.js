import {useNavigate} from 'react-router-dom';

const Navigate = (props) => {
  const navigate = useNavigate();

  return navigate(props.dest);
}

export default Navigate;
