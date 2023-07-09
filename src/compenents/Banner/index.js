import img from './IMG.svg'
import './banner.scss'
function Banner (){
    const titleStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontSize: '30px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      };
    return(
        <div className='banner'>
            <img src={img} alt="Kasa"></img>
            <h1 className="banner__title" style={titleStyle}>
                Chez vous, partout et ailleurs
            </h1>
        </div>
    )
}


export default Banner