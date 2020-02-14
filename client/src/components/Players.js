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
                <div className="player-container">
                  
                    <h1 className="players">Players: </h1>
                   {this.state.players.map((item) => 
                   <>
                   <div className="player-card">
                   <h1>{item.name}</h1>
                   <p>From: {item.country}</p>
                   </div>
                   </>
                   )}
                </div>
        )
    }

}

export default Players;