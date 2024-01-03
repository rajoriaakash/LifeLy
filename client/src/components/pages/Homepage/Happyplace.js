import React from 'react'
import './happyplace.css'
import session from '../../../images/session.jpg'
import SingleHp from './SingleHp'
import vacation from '../../../images/vacation.jpg'
import meditation from '../../../images/meditation.jpg'
import { useNavigate, Link } from 'react-router-dom'
const Happyplace = () => {
  const searchItem = [
    {
      id: 0,
      name: 'Sessions',
      image: session,
      url: 'https://www.cdc.gov/childrensmentalhealth/parent-behavior-therapy.html'
    },
    {
      id: 1,
      name: 'Vacation',
      image: vacation,
      url: 'https://davidnbrace.com/blog/better-travels/how-traveling-improves-kids-mental-health/'
    },
    {
      id: 2,
      name: 'Meditation',
      image: meditation,
      url: 'https://ezyschooling.com/parenting/expert/how-can-meditation-help-children'
    }
  ]

  return (
    <div style={{ padding: '3% 0%' }}>
      <div style={{ padding: '2% 0%' }} className='problem-div-que'>
        Your <span className='logo'>Happy Place</span>
      </div>

      <div className='hp-card-outer'>
        {searchItem.map(ex => {
          return (
            <div className='hp-card-outer-div'>
              <Link  style={{textDecoration:'none'}} to={ex.url}>
                <SingleHp key={ex.id} {...ex} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Happyplace
