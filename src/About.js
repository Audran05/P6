import Abanner from "./compenents/About-Banner"
import  Dropdown from "./compenents/Dropdown"
const test = [{
    title : "coucouc",
    content : "geignr"},{
        title : "heher",
        content : "2eme texte"}
]

function About() {
    return(
        <div className="home">
            {test.map(el => <Dropdown title={el.title} content={el.content} /> )}
            <Abanner />
            {/* <MyPage /> */}
        </div>
    )
}



export default About