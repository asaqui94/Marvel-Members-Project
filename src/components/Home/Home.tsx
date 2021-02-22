import React from 'react';



export const Home = (props:any) => {
    return (
        <div>
            <h1>Hello Marvel World</h1>
            <h4>{props.title}</h4>
        </div>
    )
}