'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react";

const AgentForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [twilioNumber, setTwilioNumber] = useState<string>(process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER || '');
    const [testNumber, setTestNumber] = useState<string>('1-405-308-0560');
    const [script, setScript] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [twilioNumbers, setTwilioNumbers] = useState<string[]>([]);

    useEffect(() => {
        const fetchTwilioNumbers = async () => {
            try {
                const response = await axios.get('/api/twilio/numbers');
                setTwilioNumbers(response.data);
                if (!process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER && response.data.length > 0) {
                    setTwilioNumber(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching Twilio numbers:', error);
            }
        };

        fetchTwilioNumbers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('twilioNumber', twilioNumber);
        formData.append('testNumber', testNumber);
        formData.append('script', script);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        try {
            const response = await axios.post('/api/agents', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response);
            setMessage('Agent created successfully');
            // Reset form fields
            setName('');
            setEmail('');
            setPhoneNumber('');
            setTwilioNumber(process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER || '');
            setTestNumber('1-405-308-0560');
            setScript('');
            setProfilePicture(null);
        } catch (error) {
            setMessage('Error creating agent');
            console.error('Error:', error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl font-bold">Create Agent</h2>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <Select
                        label="Twilio Number"
                        value={twilioNumber}
                        onChange={(e) => setTwilioNumber(e.target.value)}
                    >
                        {twilioNumbers.map((number) => (
                            <SelectItem key={number} value={number}>
                                {number}
                            </SelectItem>
                        ))}
                        {twilioNumbers.length === 0 && (
                            <SelectItem value="">No numbers available</SelectItem>
                        )}
                    </Select>
                    <Input
                        label="Test Number"
                        value={testNumber}
                        onChange={(e) => setTestNumber(e.target.value)}
                        required
                    />
                    <Textarea
                        label="Script"
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                        required
                    />
                    <Input
                        type="file"
                        label="Profile Picture"
                        onChange={(e) => setProfilePicture(e.target.files ? e.target.files[0] : null)}
                    />
                    <Button type="submit" color="primary">
                        Create Agent
                    </Button>
                </form>
                {message && <p className="mt-4 text-center">{message}</p>}
            </CardBody>
        </Card>
    );
};

export default AgentForm;