import React, {Component} from "react";
import alumni from "./../../json-files/advisorField.json";
import ProgressiveImage from "react-progressive-image"
class Alumni extends Component {

  renderFields(){
    return alumni.map(({name, img, position, place, opImg})=>{
            return  (<div className="grid-responsive">
                <ProgressiveImage src={"/assets/img/alumni/" + img} placeholder={"/assets/opImg/alumni/" + img}>
                  {(src, loading) => 
                    <img src={src}
                      alt="alumni" 
                      height="230" width="250px"
                      style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        objectPosition: "50% 20%",
                        filter: loading ? "blur(8px)" : "blur(0)" 
                      }}
                    />
                  }
                </ProgressiveImage>
                <center>
                  <h4 className="person-name">{name}</h4>
                  <h6 className="person-position">{position}<br/>{place}</h6>
                </center>
              </div>)
    })
  }
  render() {
    return (
      <div id="Alumni">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Alumni</h1>
            </center>
          </div>
        </div>
        <div className="container">
            <div className="portfolio-grid">
              {this.renderFields()}
            </div>
        </div>
      </div>
    )
  }
}

export default Alumni;