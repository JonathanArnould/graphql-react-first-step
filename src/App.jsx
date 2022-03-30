import { useQuery, gql } from "@apollo/client";
import "./App.css";
import Card from "./component/Card";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 10) {
      static_fire_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
      details
      id
      mission_name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  console.log(data);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong.</p>
  return (
    <div className="App">
      <div className="header">
        <h1>SpaceX Launches</h1>
      </div>
      <div className="launches-container">
        {data.launches.map((launchData) => (
          <Card key={launchData.id} launch={launchData} />
              //^^^                 ^^^^^^
              //ici clé unique    |  ici tu passes la data en "props" au composant enfant,
              //pour que chaque   |  props =~ principe de Input/Output d'Angular
              //instance du       |
              //composant puisse  |
              //être identifiée
              //étant donné qu'on
              //est dans un .map()

        ))}
      </div>
    </div>
  );
};

export default App;
