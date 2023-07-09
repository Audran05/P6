import { useParams } from 'react-router-dom';

const LogementDetails = ({ accommodations }) => {
  const { id } = useParams();
  /* const logement = accommodations.find((accommodation) => accommodation.id === parseInt(id)); */
  console.log('useParams', useParams());
  console.log('logement', accommodations);
 /*  if (!logement) {
    return <div>Logement introuvable.</div>;
  } */

  return (
    <div>
      <h2>Détails du logement </h2>
{/*       <h3>{logement.title}</h3>
      <img src={logement.cover} alt={logement.title} />

      <div className="gallery">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={logement.picture} alt={`Image ${index + 1}`} />
        ))}
      </div> */}
    </div>
  );
};

export default LogementDetails;