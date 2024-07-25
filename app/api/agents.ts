import { NextApiRequest, NextApiResponse } from 'next';

const agents = [
  { id: 1, name: 'Agent Smith' },
  { id: 2, name: 'Agent Johnson' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(agents);
      break;
    case 'POST':
      const newAgent = req.body;
      agents.push(newAgent);
      res.status(201).json(newAgent);
      break;
    case 'PUT':
      const { id, name } = req.body;
      const agentIndex = agents.findIndex((agent) => agent.id === id);
      if (agentIndex !== -1) {
        agents[agentIndex].name = name;
        res.status(200).json(agents[agentIndex]);
      } else {
        res.status(404).json({ message: 'Agent not found' });
      }
      break;
    case 'DELETE':
      const { agentId } = req.body;
      const deleteAgentIndex = agents.findIndex((agent) => agent.id === agentId);
      if (deleteAgentIndex !== -1) {
        const deletedAgent = agents.splice(deleteAgentIndex, 1);
        res.status(200).json(deletedAgent);
      } else {
        res.status(404).json({ message: 'Agent not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
