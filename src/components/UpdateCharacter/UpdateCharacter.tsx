import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    description: string,
    comics_appeared_in: number,
    super_power: string
}

export const UpdateCharacter = () => {

    {/* Set up communication of state via the router location */}
    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.character_id,data)
    }
    return (
        <Container>
            <h1>Update Your Character</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Character Name</label>
                <input type="text" name="name" id="name" placeholder="Update Your Character" ref={ register }/>
                
                <label htmlFor="description">Character Description</label>
                <input type="text" name="description" id="description" placeholder="Update Your Description" ref={ register }/>
                
                <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                <input type="text" name="comics_appeared_in" id="comics_appeared_in" placeholder="Update Your Comics Appeared In" ref={ register }/>
            
                <label htmlFor="super_power">Super Power</label>
                <input type="text" name="super_power" id="super_power" placeholder="Update Your Super Power" ref={ register }/>
            
                <button type="submit" className="button-styles"> Submit </button>
            </form>
        </Container>
    )
}