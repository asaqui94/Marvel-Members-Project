import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string,
    appeared_in: number,
    superpower: string
}

export const CreateMarvel = () => {

    {/* Creating a deconstructed value for useForm Hook */}
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data:any) => {
        console.log(data)
        server_calls.create(data)
    }

    return (
        <Container>
            <h1>Create Your New Marvel Character</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Character Name</label>
                <input type="text" maxLength={100} name="name" id="name" placeholder="Add Character Name" ref={ register }/>

                <label htmlFor="appeared_in">Appeared In</label>
                <input type="text" name="appeared_in" id="appeared_in" placeholder="Add Year Character Appeared" ref={ register }/>

                <label htmlFor="superpower">Super Power</label>
                <input type="text" name="superpower" id="superpower" placeholder="Add Character Super Power" ref={ register }/>

                <button type="submit" className="button-styles">Submit Character</button>
            </form>
        </Container>
    )
}