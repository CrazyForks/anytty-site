export const cloudPlans = [
  { name: 'Cloud Free', monthly: 0, daemons: 2, relay: 1, data: '200 MB', featured: false },
  { name: 'Lite', monthly: 9.9, daemons: 10, relay: 3, data: '20 GB', featured: true },
  { name: 'PRO', monthly: 19.9, daemons: 30, relay: 8, data: '100 GB', featured: false },
] as const
