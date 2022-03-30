import { useState } from 'react';
import './Card.css';

const Card = (props) => {
// ^^^^^^^^^^^^^^^^^^^^^
// ici t'aurais pu déstrucutrer directement de cette manière
//                                             vvvvvvvvvvvvv
//                                         const Card = ({ launch })

// props est l'objet qui contient toutes les données que tu passes
// en props depuis le composant parent
// dans le parent tu a fais <Card launch={launchData} /> 
//                           donc ^^^^^^ est une propriété de l'objet props
//                           qu'on destructure juste ici
//  vvvvvvvvvvvvvvvvvvvvvvvvv---------------------------

    const { launch } = props;

//  ici on utilise le hook useState qui permet de changer le state favorite du composant
//  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    const[favorite, setFavorite] = useState(false);
// on utilise jamais une variable qu'on réassigne directement afin de respecter le principe d'immutabilité
// qui est un principe fondamental de React

    return(
        <div className="launches-card">
            <button onClick={() => setFavorite(!favorite)}>{!favorite ? 'Like': 'Don\'t Like'}</button>
            <h2>{launch.mission_name}</h2>
            <h3>{launch.rocket.rocket_name}</h3>
            <div className="launches-card-frame">
                <img
                src={launch.links.flickr_images}
                alt={launch.mission_name}
                className="launches-card-image"
                />
            </div>
            <p>{launch.details}</p>
            <div className="fade-bottom"></div>
        </div>
    )
};

export default Card;