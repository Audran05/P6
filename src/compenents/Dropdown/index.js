import React, { useState } from 'react';
import './dropdown.scss'

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown'>
      <div onClick={toggleDropdown} className="dropdown-title">
        {title}
        <button className={`dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <span className="arrow"></span>
      </button>
      </div>
      {isOpen && <p>{content}</p>}
    </div>
  
  );
};

const MyPage = () => {
  return (
    
    <div>
      <details>
    <summary>More Information</summary>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</details>
      <Dropdown title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes." />
      <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
  );
};

/* export default MyPage; */
export default Dropdown;