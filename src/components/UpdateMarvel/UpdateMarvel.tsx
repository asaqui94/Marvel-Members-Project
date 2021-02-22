import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    appeared_in: number,
    superpower: string
}

export const UpdateMarvel = () => {

    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.marvel_id,data)
    }
    return (
        <Container>
            <h1>Update Your Character</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"> Character Name</label>
                <input type="text" name="name" id="name" placeholder="Update Your Character" ref={ register }/>

                <label htmlFor="appeared_in">Year Character Appeared</label>
                <input type="text" name="appeared_in" id="appeared_in" placeholder="Update Your Character Year" ref={ register }/>

                <label htmlFor="superpower">Super Power</label>
                <input type="text" name="suoerpower" id="superpower" placeholder="Update Your Character Super Power" ref={ register }/>

                <button type="submit" className="button-styles"> Submit Update </button>
            </form>
        </Container>
    )
}