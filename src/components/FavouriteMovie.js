
import React, {Component} from "react"

class FavouriteMovie extends Component {
	render(){
      const allMovieIds = Object.keys(this.props.movies)
      console.log(allMovieIds)
      const favMovIds = Array.from(new Set(this.props.profiles.map(profile=>profile.favoriteMovieID)))
      return (allMovieIds.map((id) => {
            const movieId = id
            const movieName = this.props.movies[movieId].name
            const listOfProfiles =  this.props.profiles.filter(profile => profile.favoriteMovieID === movieId ) 
            let favored
            if (!favMovIds.includes(movieId)){
              	favored = <p>Not favored</p>
              }
      		else{
              	favored = <div><p>Liked By : </p><ul>{listOfProfiles.map(prof=>(<li>{this.props.users[prof.userID].name}</li>))}</ul></div>
            }

            const obj = {
              movieId : movieId,
              movieName : movieName,
              listOfProfiles : listOfProfiles
            }
            console.log(obj.listOfProfiles)
            return (
              <div>
              <h2>{obj.movieName}</h2>
              {favored}
              </div>
            )
            }
            
      ))
             
      
    }	
}
          
            
        

export default FavouriteMovie