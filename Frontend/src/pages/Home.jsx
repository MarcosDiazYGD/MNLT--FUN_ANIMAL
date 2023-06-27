import { Link } from "react-router-dom"

const Home = () => {
  return(
  <>
    <h1>Home</h1>
    <Link to="/pets" > Go to Pets</Link>
  </>
  )
}

export default Home