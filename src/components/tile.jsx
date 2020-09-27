import React from 'react';
import { useDispatch } from 'react-redux';
import {revealTile} from '../helpers/redux/actions'
import './Tile.scss'

const Tile = function (props) {
  const dispatch = useDispatch();
  const {danger, id, revealed} = props;
  //const [revealed, setRevealed] = useState(props.revealed)


  const className = revealed ? `tile revealed danger_${danger}` : "tile hidden";


  return <td key={id} className={className} onClick={() => dispatch(revealTile(id))}>
    {revealed ? danger : ' '}
  </td>;
};

export default Tile;
