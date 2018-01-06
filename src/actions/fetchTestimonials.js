import axios from "axios";

export function fetchTestimonials(){
    //return the actual action to do
    return function(dispatch){
    
        axios.get("https://randomuser.me/api/?results=3").then(function (response) {
            console.log(response.data.results);
            dispatch({type:"FETCH_TESTIMONIALS", payload:response.data.results, fetched:true });
          
        });
        
 
  
   }
}