import React, { Component } from 'react'

class BlogCard extends Component {

    state = {
        counter: 0
    }

    incrementCounter = () => {
        console.log("clickity click click", this.state.counter)
                        // this just goes in curlies because it's a key/value pair?
        this.setState({ counter: this.state.counter + 1 })
    }


    render() {
        const { blogObject } = this.props
        return (
            <div>
                <h5>{blogObject.title}</h5>
                <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
                <h4>Counter: {this.state.counter}</h4>
                <button onClick={this.incrementCounter}>Save</button>
                <button>Visit</button>
            </div>
        )
    }
}

// have to define BlogCard as class because functions can't hold state? I think?

// function BlogCard(props) {
//     const { blogObject } = props
//     return (
//         <div>
//             <h5>{blogObject.title}</h5>
//             <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
//             <button>Save</button>
//             <button>Visit</button>
//         </div>
//     )
// }

export default BlogCard