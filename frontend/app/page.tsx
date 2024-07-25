'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import AgentForm from '../components/AgentForm';


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
        <div className="max-w-[1024px] mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Agents</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardBody>
                        <AgentForm />
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold">Agent List</h2>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            {agents.map((agent) => (
                                <li key={agent._id}>
                                    {agent.name} - {agent.email} - {agent.phoneNumber}
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default AgentsPage;