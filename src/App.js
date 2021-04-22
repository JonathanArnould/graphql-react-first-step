import { useQuery, gql } from "@apollo/client";
import "./App.css";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <div className="App">
      <div className="header">
        <h1>SpaceX Launches</h1>
      </div>
      <div className="launches-container">
        {data.launches.map((launche) => (
          <div key={launche.id} className="launches-card">
            <h2>{launche.mission_name}</h2>
            <h3>{launche.rocket.rocket_name}</h3>
            <div className="launches-card-frame">
              <img
                src={launche.links.flickr_images}
                alt={launche.mission_name}
                className="launches-card-image"
              />
            </div>
            <p>{launche.details}</p>
            <div className="fade-bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
