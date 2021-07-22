import { ChangeEvent, Dispatch, FC, SetStateAction, SyntheticEvent, useState } from 'react'
import {IState as Props} from '../../App'
import './AddForm'

interface IProps {
  people: Props['people']
  setPeople: Dispatch<SetStateAction<Props['people']>>
}

// Initial State
const initialState = {
  name: '',
  age: '',
  imageUrl: '',
  notes: ''
}

const AddForm: FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState(initialState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInput({
      ...input,
      [name] : value,
    })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    if (!input.name || !input.age || !input.imageUrl) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.imageUrl,
        notes: input.notes
      }
    ])
    setInput(initialState)
  }

  return (
    <div className="col-md-6 mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <input type="text" className="form-control" placeholder="Name" name="name" value={input.name} onChange={handleInputChange}/>
        </div>
        <div className="form-group my-2">
          <input type="text" className="form-control" placeholder="Age" name="age" value={input.age} onChange={handleInputChange}/>
        </div>
        <div className="form-group my-2">
          <input type="text" className="form-control" placeholder="Image Url" name="imageUrl" value={input.imageUrl} onChange={handleInputChange}/>
        </div>
        <div className="form-group my-2">
          <textarea className="form-control" placeholder="Notes" name="notes" value={input.notes} onChange={handleInputChange}/>
        </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Add Player</button>
      </form>

    </div>
  )
}

export default AddForm
