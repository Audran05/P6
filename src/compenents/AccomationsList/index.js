import React, { useEffect, useState } from 'react';
import Card from '../Card';
import './accomodationlist.scss'

import { Link } from 'react-router-dom';

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Simuler une requête HTTP asynchrone pour charger les données du fichier JSON
    // Remplacez cet exemple par votre propre logique de chargement de données
    const fetchAccommodations = async () => {
      try {
        // Chargez les données JSON depuis le fichier local
        // Ici, nous supposons que le fichier JSON est importé en tant que module (par exemple, via Webpack)
        const response = await import('../../data/accommodationData.json');
        setAccommodations(response.default);
      } catch (error) {
        console.error('Erreur lors du chargement des données d\'hébergement :', error);
      }
    };

    fetchAccommodations();
  }, []);

  const displayedAccommodations = accommodations.slice(0, 6);

  return (
    <div className="accommodation-list">
      {displayedAccommodations.map((accommodation) => (
        <Link key={accommodation.id} to={`/logement/${accommodation.id}`}>
          <Card title={accommodation.title} cover={accommodation.cover} />
        </Link>
      ))}
    </div>
  );
};

export default AccommodationList;