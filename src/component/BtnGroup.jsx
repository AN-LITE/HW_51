import React from "react";

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            active : ""
        }
    }

    handlerClick = ({target}) =>{
       if(target.name ==='left') this.setState ({active : 'left'})
        else if(target.name ==='right') this.setState({active :'right'})
    }


   render() {

        let id = 0;

           return (
               <div class="btn-group" role="group">

                   <button onClick={this.handlerClick}
                           key = {id++}
                           name = 'left'
                           className={this.state.active === "left" ? "btn btn-success left" : "btn btn-secondary left"}
                       >Left
                   </button>

                   <button onClick={this.handlerClick}
                           key = {id++}
                           name = 'right'
                           className={this.state.active === "right" ? "btn btn-success right" : "btn btn-secondary right"}
                   >Right
                   </button>
               </div>

           )
       }

   }

export default BtnGroup;




