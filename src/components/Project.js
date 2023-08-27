import React from 'react';

export default function Project({id, title, repoLink, deployedLink, screenshot, alt}) {
    return (
        <div key={id}>
            <h4>{title}</h4>
        </div>
    );
}
