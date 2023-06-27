import { Link } from "react-router-dom";
const Pets = () => {

  return (
    <div>
      <h1>Pets</h1>
      <Link to='/pets/create_pet'>Create pet</Link>
    </div>
  );
};

export default Pets;