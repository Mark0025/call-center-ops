import { NextApiRequest, NextApiResponse } from 'next';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(users);
      break;
    case 'POST':
      const newUser = req.body;
      users.push(newUser);
      res.status(201).json(newUser);
      break;
    case 'PUT':
      const { id, name } = req.body;
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex].name = name;
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    case 'DELETE':
      const { userId } = req.body;
      const deleteUserIndex = users.findIndex((user) => user.id === userId);
      if (deleteUserIndex !== -1) {
        const deletedUser = users.splice(deleteUserIndex, 1);
        res.status(200).json(deletedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
