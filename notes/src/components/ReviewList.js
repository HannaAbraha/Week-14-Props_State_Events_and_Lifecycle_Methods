import React from 'react';
import "./ReviewList.css";


export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.reviews = props.enteredReview;
        console.log(this.reviews);
    }

    render() {
    return(
        <div>
            {this.reviews.map((review, i) =>
                <div Key={i}>
                    <p>User Review: {review}</p>
                        starRating = {starRating}
                        reviewName = {reviewName}
                        reviewText = {reviewText}
                    </div>
            )}
        </div>
    )
    }
};

