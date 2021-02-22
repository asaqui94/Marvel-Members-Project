import React, {useState,useEffect} from 'react';
import {useGetData} from '../../custom-hooks';
import {Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import superwoman from '../../assets/img/superwoman.svg';

import {useHistory} from 'react-router-dom';
import {server_calls} from '../../api';

export const Marvels = () => {

    const history:any = useHistory();

    const routeChange = (id?:string, path?:string) => {
        history.push({
            pathname: path,
            state: { marvel_id: id}
        })
    }

    let {marvelData, getData} = useGetData();
    console.log(marvelData)

    const handleDeleteMarvel = (id:any) => {
        server_calls.delete(id);
        getData()


    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Hello Marvel</h1>
                        <p>Here are your current collection of characters!</p>
                        <Button onClick = { () => routeChange('','create')}>Create New Character</Button>
                    </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        {marvelData.map( (item:any) => (
                            <div key={item.id}>
                                  <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={superwoman} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.name }
                                        </Card.Title>
                                        <Card.Text>
                                            {item.appeared_in}
                                        </Card.Text>
                                        <Card.Text>
                                            { item.superpower }
                                        </Card.Text>

                                        <Button variant="danger" onClick = { () => handleDeleteMarvel(item.id)}>Delete</Button>
                                        <Button variant="primary" onClick = { () => routeChange(item.id, 'update')}>Update</Button>
                                    </Card.Body>   
                                  </Card>      
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}}