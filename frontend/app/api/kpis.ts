import { NextApiRequest, NextApiResponse } from 'next';

const kpis = [
  { id: 1, metric: 'Sales', value: 100 },
  { id: 2, metric: 'Customer Satisfaction', value: 90 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(kpis);
      break;
    case 'POST':
      const newKpi = req.body;
      kpis.push(newKpi);
      res.status(201).json(newKpi);
      break;
    case 'PUT':
      const { id, metric, value } = req.body;
      const kpiIndex = kpis.findIndex((kpi) => kpi.id === id);
      if (kpiIndex !== -1) {
        kpis[kpiIndex].metric = metric;
        kpis[kpiIndex].value = value;
        res.status(200).json(kpis[kpiIndex]);
      } else {
        res.status(404).json({ message: 'KPI not found' });
      }
      break;
    case 'DELETE':
      const { kpiId } = req.body;
      const deleteKpiIndex = kpis.findIndex((kpi) => kpi.id === kpiId);
      if (deleteKpiIndex !== -1) {
        const deletedKpi = kpis.splice(deleteKpiIndex, 1);
        res.status(200).json(deletedKpi);
      } else {
        res.status(404).json({ message: 'KPI not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
