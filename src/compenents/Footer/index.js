import logo from '../Footer/white-logo.svg'
import '../Footer/footer.scss'
function Footer() {
    return(
        <footer>
            <div>
                <img src={logo} alt="Kasa" />
                <p>
                    2020 Kasa.All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer