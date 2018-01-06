import {combineReducers} from "redux";

//reducers
import fetchTestimonials from "./fetch_testimonials";


//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    FETCH_TESTIMONIALS: fetchTestimonials,
});

export default reducers;