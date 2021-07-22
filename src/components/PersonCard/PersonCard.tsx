import { FC } from 'react'
import {IState as IProps} from "../../App"
import './PersonCard.css'

const PersonCard: FC<IProps> = ({ people }) => {

  const renderPeople = () => {
    return(
      people.map((person, index) => {
        const {name, age, url, notes} = person;
            return (
                <div className="col-sm" key={index}>
                  <div className="card my-2" style={{
                    width: '18rem'
                  }}>
                    <img className="card-img-top" src={url} alt="player" />
                    <div className="card-body">
                      <h5 className="card-title">{name} - <small>{age} years old</small></h5> 
                      <p className="card-text">{notes}</p>
                    </div>
                  </div>
                </div>
            )
          })
    )
  }
  

  if (people.length === 0) {
    return (
      <>
        <h3 className="text-center">No person to display</h3>
      </>
    )
  }

  return (
    <>
      {renderPeople()}
    </>
  )
}

export default PersonCard
