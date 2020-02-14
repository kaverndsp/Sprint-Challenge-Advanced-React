import React from "react";
import axios from "axios";

class Players extends React.Component{
    state={
        players: []
    }

componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then( res => {
        console.log(res);
        this.setState({
          players: res.data
        })
       })
      .catch(err => {
        console.log("The data could not be returned", err)
      })
}

    render() {
        return(
                <div>
                    <h1>Players: </h1>
                   {this.state.players.map((item) => 
                   <p>{item.name}</p>)}
                </div>
        )
    }

}

export default Players;