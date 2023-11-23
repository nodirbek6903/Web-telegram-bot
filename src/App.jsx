import './App.css'
import {getData} from "./constants/db"
import Card from './components/card/card';

const courses = getData()

const App = () => {
  return (
    <>
      <h1 className='heading'>Nodirbek Kurslari</h1>
      {/* {Card} */}
      <div className="cards__container">
        {courses.map(course => (
          <>
            <Card key={course.id} course={course} />
          </>
        ))}
      </div>
    </>
  )
}

export default App
