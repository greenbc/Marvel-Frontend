import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string,
    description: string,
    comics_appeared_in: number,
    super_power: string
}

export const CreateCharacter = () => {

    {/* Creating a deconstructed value for useForm Hook */}
    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit = (data:any) => {
        console.log(data)
        server_calls.create(data)
    }

    return (
        <Container>
            <h1>Create Your New Character!</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Character Name</label>
                <input type="text" name="name" id="name" placeholder="Add Character Name" ref={ register }/>
                
                <label htmlFor="description">Character Description</label>
                <input type="text" name="description" id="description" placeholder="Add Character Description" ref={ register }/>
                
                <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                <input type="text" name="comics_appeared_in" id="comics_appeared_in" placeholder="Add Comics" ref={ register }/>
                
                <label htmlFor="super_power">Super Power</label>
                <input type="text" name="super_power" id="super_power" placeholder="Add Super Power" ref={ register }/>

                <button type="submit" className="button-styles">Submit Character</button>
            </form>
        </Container>
    )
}