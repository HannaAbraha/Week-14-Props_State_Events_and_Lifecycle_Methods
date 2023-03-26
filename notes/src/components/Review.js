import React, {useId, useState} from 'react';

export const Review = ({Reviews}) => {

    Review = {
        startRating: '',
        reviewName: '',
    }

    return (
        <form>
            <label>Name: </label>
            <input type="text" maxLength="10" required name="name-input" id="name-text"></input>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="4" required name="review-input" id="review-text"></textarea>
            <br/>
            <button onClick={addReview()}>Submit</button>
        </form>
    )
    function addReview() {
        (Reviews.push({startRating, reviewName, reviewText}))
    }

}

export default Review;

