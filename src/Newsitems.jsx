import React from 'react'
import "./newscss.css"
const NewsItem = ({ title, description, image, url }) => {
    return (
        <div style={{display : 'flex',flexDirection : 'row'}}>
        <div style={{justifyContent : 'flex-start',alignItems : 'center',display  : 'flex',flexDirection : 'column'}}>
            <img className='image'  src={image ? image : 'https://static.gva.be/Assets/Images_Upload/2025/01/22/088caa46-ee77-4d0d-938c-1ff331b05f3b.jpg?maxheight=460&maxwidth=629'} alt={title} />
            <h2 className='titleclass' style={{width : "500px"}}>{title}</h2>
            <p style={{width : "500px"}}>{description}</p>
            <a  style={{}} href={url}>go to this article</a>
        </div>
        </div>
    )
}

export default NewsItem