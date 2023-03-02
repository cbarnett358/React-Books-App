
import React, {Component} from 'react';
import "./Posts.scss"
import Post from "../Post/Post"
import axios from "axios";
class Posts extends Component {
    //posts endpoint
    postsEndpoint = "//localhost/wp-json/wp/v2/pages";
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
           <div className="Posts">
        {this.state.isLoaded ? '' : <p>Loading...</p>}
        {this.state.posts.map( post =>
            <Post
            title={post.title.rendered}
            body={post.content.rendered}
            key={post.id}
            />
        )}
           </div>
    );
    }

}

               Posts.propTypes = {};

               export default Posts;