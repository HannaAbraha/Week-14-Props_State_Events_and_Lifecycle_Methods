import React from 'react';
import { Button } from 'reactstrap';
import ReviewList from './ReviewList';

function ReviewForm() {
    const [newReview, setNewReview] = useState({info:
    "Random"})

    return (
        <div>RiviewForm
            <FormGroup className="form">
                <Label for="exampleText">
                    <h2>Give us your review!</h2>
                </Label>
                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <Button color="success"> Submit Form</Button>
            </FormGroup>

            
            <ReviewList></ReviewList>
        </div>
    )
}

export default ReviewForm 