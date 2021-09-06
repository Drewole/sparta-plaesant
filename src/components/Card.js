import React from 'react'

const Card = ({ src, date, title, author }) => {
    return (
        <article>
            <img src={src ? src : "https://via.placeholder.com/400x600"} alt="Post Image" />
            <p className="date">{date ? date : "No Date Specified"}</p>
            <h2>{title ? title : "This is the post title dummy text."}</h2>
            <p>Presented By <a className="author" href="#">{author ? author : "Joe Williams"}</a></p>
        </article>
    )
}

export default Card
