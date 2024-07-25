'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, Text } from "@nextui-org/react";
import AgentForm from '../../components/AgentForm';

const AgentsPage: React.FC = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await axios.get('/api/agents');
                setAgents(response.data);
            } catch (error) {
                console.error('Error fetching agents:', error);
            }
        };

        fetchAgents();
    }, []);

    return (
        <Container>
            <Text h1>Manage Agents</Text>
            <Grid.Container gap={2}>
                <Grid xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <AgentForm />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Text h2>Agent List</Text>
                            <ul>
                                {agents.map((agent) => (
                                    <li key={agent._id}>
                                        {agent.name} - {agent.email} - {agent.phoneNumber}
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Container>
    );
};

export default AgentsPage;