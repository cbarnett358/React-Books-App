import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';



const Book = (props) => (
  //mui row of cards with book info
    <div className="row my-5">
        <div className="col ">
    <div className="Book">


            <div className="card bg-white ">
                <div className="card-body">

                    <h5 className="card-title">{props.title}</h5>
                    <p dangerouslySetInnerHTML={{__html: props.body}}/>
                    <a href="#" className="btn text-white btn-primary">Go somewhere</a>


                </div>


        </div>
    </div></div>
        </div>




);

Book.propTypes = {
    "title": PropTypes.string,
    "body": PropTypes.string,
    "image": PropTypes.string,



};

Book.defaultProps = {
    "title": "Post Title",
    "body": "Post Body",
    "image": "https://via.placeholder.com/150",


};

export default Book;
