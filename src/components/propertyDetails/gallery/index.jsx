import * as React from 'react'

function Gallery ({ id, title}) {
    return (
        <figure className="test">
            <img className="" src={`/server/homes/${id}/1.jpg`} alt="{title}" />
            <figcaption className="figure-cation text-center text-small">{title}</figcaption>
        </figure>
    )
}

export default Gallery