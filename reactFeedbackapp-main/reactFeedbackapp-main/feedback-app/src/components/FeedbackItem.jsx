//import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {


    /*    const handleClick  = ()=>{
        setRating((prev)=>{
        console.log(prev)
        return prev + 1
       }) 
    }*/
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of feedback item')
  return (
    <Card reverse={false}>
          <div className="num-display">{item.rating}</div>
          <div onClick={() => handleDelete(item.id)} 
          className="close">
            <FaTimes color='purple'/>
          </div>
          <div className="text-display">{item.text}</div>
    </Card>
           
            /* <button onClick={handleClick}>Click</button>     */
    
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
