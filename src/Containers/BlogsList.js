import React from 'react'
import apiResponse from '../fakeAPI'
import BlogCard from '../Components/BlogCard'

class BlogsList extends React.Component {

    arrayOfBlogCards = () => {
        return apiResponse.map(blogElement => <BlogCard blogObject={blogElement} /> )
    }

    render() {
        return (
            <>
                {this.arrayOfBlogCards()}
            </>
        )
    }
}

export default BlogsList