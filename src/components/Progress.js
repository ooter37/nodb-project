import React from "react";


export default class Progress extends React.Component {



  render() {

    const { setImage } = this.props;

return(
    
    <div>
        <img src={setImage}/>
    </div>
)
  }
 
    

    //   <div className='image-container'>
    //     {cardsLength = 9 ? (
    //       <img
    //         className="treasure-box1"
    //         width="100px"
    //         src={require("../media/treasure-box1.png")}
    //       />
    //     ) : null}
    //   </div>
    //   <div>
    //     {cardsLength = 7 ? (
    //       <img
    //         className="diamond"
    //         width="100px"
    //         src={require("../media/diamond.png")}
    //       />
    //     ) : null}
    //   </div>
    //   <div>
    //     {cardsLength = 6 ? (
    //       <img
    //         className="pizza"
    //         width="50px"
    //         src={require("../media/pizza.png")}
    //       />
    //     ) : null}
    //   </div>
    //   <div>
    //     {cardsLength = 8 ? (
    //       <img
    //         className="egg"
    //         width="100px"
    //         src={require("../media/golden-egg.png")}
    //       />
    //     ) : null}
    //   </div>
    //   <div>
    //     {cardsLength = 10 ? (
    //       <img
    //         className="cash"
    //         width="130px"
    //         src={require("../media/cash.png")}
    //       />
    //     ) : null}
    //   </div>
    //   <div>
    //     {cardsLength >= 11 ? (
    //       <img
    //         className="yacht"
    //         width="450px"
    //         src={require("../media/yacht.png")}
    //       />
    //     ) : null}
    //   </div>
    // </div>

}
