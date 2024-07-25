import { NextApiRequest, NextApiResponse } from 'next';

const calls = [
  { id: 1, description: 'Call with client A' },
  { id: 2, description: 'Call with client B' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(calls);
      break;
    case 'POST':
      const newCall = req.body;
      calls.push(newCall);
      res.status(201).json(newCall);
      break;
    case 'PUT':
      const { id, description } = req.body;
      const callIndex = calls.findIndex((call) => call.id === id);
      if (callIndex !== -1) {
        calls[callIndex].description = description;
        res.status(200).json(calls[callIndex]);
      } else {
        res.status(404).json({ message: 'Call not found' });
      }
      break;
    case 'DELETE':
      const { callId } = req.body;
      const deleteCallIndex = calls.findIndex((call) => call.id === callId);
      if (deleteCallIndex !== -1) {
        const deletedCall = calls.splice(deleteCallIndex, 1);
        res.status(200).json(deletedCall);
      } else {
        res.status(404).json({ message: 'Call not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
