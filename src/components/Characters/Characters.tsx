import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import captain_america from '../../assets/img/captain_america.jpg';
import { server_calls } from '../../api'

import { useHistory } from 'react-router-dom';

export const Characters = () => {

    const history:any = useHistory();

    {/* Creating history route function -- routeChange */}
    const routeChange = (id?:string, path?:string) => {
        history.push({
            pathname: path,
            state: { character_id: id}
        })
    }

    let { characterData, getData} = useGetData();
    console.log(characterData)

    const handleDeleteCharacter = (id:any) => {
        server_calls.delete(id);
        getData()
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                    <h1> Hello Marvel Fans </h1>
                    <p>Here are your current collection of characters!</p>
                    <Button onClick = { () => routeChange('','create')}>Create New Character</Button>
                    </Jumbotron>
                </Col>
            </Row>

            {/* Row to display Data */}
            <Row>
                <Col>
                    <div>
                        {characterData.map( (item:any) => (
                            <div key="item.id">
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={captain_america} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.name }
                                        </Card.Title>
                                        <Card.Text>
                                            { item.description }
                                        </Card.Text>
                                        <Card.Text>
                                            { item.comics_appeared_in }
                                        </Card.Text>
                                        <Card.Text>
                                            { item.super_power }
                                        </Card.Text>

                                        <Button variant="danger" onClick = { () => handleDeleteCharacter(item.id)}>Delete</Button>
                                        <Button variant="primary" onClick= { () => routeChange(item.id, 'update')}>Update</Button>
                                    </Card.Body>
                                </Card>    
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        
        
    )
}