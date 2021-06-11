import React from 'react'
import { Link } from 'react-router-dom'

function PressArticle({link, img, brand, preview}) {
    return (
        <Link to={link} className="article" style={{textDecoration: "none"}}>
            <img width="150" src={img} alt={brand} />
            <p id="preview">{preview}</p>
            <div>READ MORE ...</div>
        </Link>
    )
}

export default PressArticle
