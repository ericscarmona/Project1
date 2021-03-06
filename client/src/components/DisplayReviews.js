import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component{

    constructor(props){
        super(props);

        this.renderusercomments = this.renderusercomments.bind(this)
    }



    //function to get specific id 
 renderusercomments() {
    //
    if(!this.props.active_restaurant ) {
        return(
            <p>no active restaurant detected</p>
        )
    }
    else if(this.props.active_restaurant && this.props.active_restaurant.reviews.length){
     return this.props.active_restaurant.reviews
     .map( (review) => {

        return(
        <div key={review.restaurantid} id="comments">
            <p > user: {review.userid}, score: {review.rating} </p>
            <p>comment: {review.comments}</p>
            
            <p>  {review.text} </p>
        </div>
        
        )
        
    } 
    )
    }
 }


    render() {
        return(
            <div className='reviews'>
                {/* {this.props.username} */}
                {this.renderusercomments()}    

            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {active_restaurant: state.active_restaurant} 
};

export default connect(mapStateToProps)(Review);