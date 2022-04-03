import { Link } from 'react-router-dom';
import { Star } from 'react-bootstrap-icons';

const Cards = ({ data }) => {



    return (
        <div>
            {
                data.map((reg, index) =>
                (
                    <div className="card" key={index} onClick={() => { <Link to="/CardDetail"></Link> }}>
                        <h3 className="cardTitle">{reg.title}
                            <button className="btnFav"><Star /></button>
                        </h3>
                        <h4 className="cardDes">{reg.description}</h4>
                        <h4 className="cardSpe">{reg.speakers[0]} - {reg.speakers[1]} - {reg.speakers[2]}</h4>
                        <div className="cardSeg">Industry segment:
                            <h4 className="cc"> {reg.industry_segment}</h4>
                        </div>
                        <div className="cardTop">Primary topic:
                            <h4 className="cc">{reg.primary_topic}</h4>
                        </div>
                        {/* <button>
                                  <Link Link to="/CardDetail"> 
                                      Ver mas
                                  </Link>
                              </button> */}
                    </div>
                )
                )
            }
        </div>
    )
}

export default Cards