import { Dispatch, FC, SetStateAction } from 'react'
import {IState as Props} from '../../App'
import AddForm from '../AddForm/AddForm'

interface IProps {
  people: Props['people'],
  setPeople: Dispatch<SetStateAction<Props['people']>>
}

const AddPlayer: FC<IProps> = ({ people, setPeople }) => {
  return (
    <>
      <AddForm people={people} setPeople={setPeople}/>
    </>
  )
}

export default AddPlayer
