
import React, {Component} from 'react';
import "./Books.scss"
import Book from "../Book/Book"
import axios from "axios";
class Books extends Component {
    //posts endpoint
    postsEndpoint = "//localhost/wp-json/wp/v2/book";
    //this class component we are extending gives us "state" and "setState()"
    //state is similar to data in Vue
    state = {
        posts: [],
        isLoaded: false,
    }


    //run when component is added to the DOM
    //like mounted() in Vue
    componentDidMount() {
        axios
            //get featured images

            .get(this.postsEndpoint)



            .then(response => {
                console.log('API Response: ', response)

                //replace the array in our state
                //don't do this!
                //!this.state.posts = response.data

                //we use setState() to let React know we are changing a property
                this.setState({
                    posts: response.data,

                    isLoaded: true,
                })
            })

            .catch(error => {
                console.log('API ERROR: ', error)
            })
        ;
    }

    render() {
        return (
            <div className="Books">

                {this.state.isLoaded ? '' : <p>Loading...</p>}


                {this.state.posts.map( post =>
                    <Book

                        title={post.title.rendered}
                        body={post.content.rendered}
                        image={post._links['wp:featuredmedia'][0].href}

                        key={post.id}
                    />
                )}
            </div>
        );
    }

}

Books.propTypes = {};

export default Books;