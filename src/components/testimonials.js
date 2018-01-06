import React, { Component } from 'react';

//imports needed for the redux store mapping
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import action for this component
import {fetchTestimonials} from "../actions/fetchTestimonials";


class Testimonials extends Component {

//--------- life-cycle functions
componentDidMount(){
    //
    this.props.fetchTestimonialsAction();
}

render() {
    return (
        <section className="testimonials">
        {this.props.fetchTestimonials.map((user)=>{
            return(
            <div className="cards" key={user.email}>
                <div>
                   <div className="icons">
                    <img src={user.picture.large} />
                   </div>
                    <div className="content">
                        <p className="content-title">{user.name.first} {user.name.last}</p>
                        <p className="quote">Vivamus leo nisi, vulputate elementum suscipit ac, fermentum eget arcu. Vestibulum velit dolor, molestie in euismod et, consequat et quam</p>
                        </div>
                    </div>
            </div>
                )
            })
        }
        </section>

    );
  }
}

//-----------------mapping
function mapStateToProps(state){
    return{
        fetchTestimonials: state.FETCH_TESTIMONIALS.fetchTestimonials
    }
}

function matchDispatchToProps(dispatch){
    //match the action imported to a new prop
    return bindActionCreators({fetchTestimonialsAction:fetchTestimonials}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(Testimonials);
