
const fetchTestimonials=(state={
    fetchTestimonials:[],
    fetched: false,
   
    }, action)=>{
        if(action.type === "FETCH_TESTIMONIALS"){
            
            state= {...state, fetchTestimonials: action.payload}
        }
    
        return state;   
    };
export default fetchTestimonials;