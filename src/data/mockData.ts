import { SolutionDetails, IntegrationApp, ChangelogItem } from '../types';

export const COMPANY_INFO = {
  name: 'sample',
  formalName: 'SAMPLE SAAS WEBSITE',
  tagline: 'Work, connected.',
  secondaryTagline: 'From scattered tasks to one intelligent workflow.',
  email: 'hello@samplehq.com',
  salesEmail: 'sales@samplehq.com',
  supportEmail: 'support@samplehq.com',
  phone: '+1 (416) 555-0198',
  address: '410 King Street West, Suite 600, Toronto, ON M5V 1K2, Canada',
  website: 'samplehq.com',
};

export const CORE_METRICS = {
  monthlyAutomatedTasks: '12,482',
  activeWorkflows: '148',
  timeSaved: '1,284 hrs',
  completionRate: '97.8%',
  connectedTools: '24',
  activeTeamMembers: '86',
};

export const INTEGRATIONS_DATA: IntegrationApp[] = [
  {
    id: 'slack',
    name: 'Slack',
    category: 'communication',
    status: 'connected',
    lastSync: '2s ago',
    eventsProcessed: '4,120/hr',
    description: 'Instant notification routing, slash commands, and approval cards.',
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'workspace',
    status: 'connected',
    lastSync: '12s ago',
    eventsProcessed: '1,890/hr',
    description: 'Bi-directional Drive synchronization, Sheets automation, and Calendar reservations.',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    status: 'connected',
    lastSync: '4s ago',
    eventsProcessed: '3,450/hr',
    description: 'Pipeline stage triggers, opportunity creation, and contact reconciliation.',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    status: 'connected',
    lastSync: '18s ago',
    eventsProcessed: '2,110/hr',
    description: 'Inbound lead scoring enrichment and marketing campaign status updates.',
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'workspace',
    status: 'connected',
    lastSync: '1m ago',
    eventsProcessed: '940/hr',
    description: 'Automated database record creation and executive spec synchronization.',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payments',
    status: 'connected',
    lastSync: 'Just now',
    eventsProcessed: '820/hr',
    description: 'Invoice reconciliation, failed payment retries, and contract billing notifications.',
  },
  {
    id: 'ms-365',
    name: 'Microsoft 365',
    category: 'workspace',
    status: 'connected',
    lastSync: '34s ago',
    eventsProcessed: '1,320/hr',
    description: 'Outlook meeting coordination and Excel shared workbook updates.',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'workspace',
    status: 'connected',
    lastSync: '45s ago',
    eventsProcessed: '680/hr',
    description: 'Legacy webhooks fallback bridge and custom connector pipes.',
  },
];

export const SOLUTIONS_DATA: Record<string, SolutionDetails> = {
  operations: {
    id: 'operations',
    name: 'Operations',
    headline: 'Eliminate manual bottlenecks across distributed teams',
    description:
      'Orchestrate cross-functional vendor approvals, equipment provisioning, and daily operational reporting in one automated stream.',
    kpis: [
      { label: 'Manual steps eliminated', value: '47 / week' },
      { label: 'Weekly cycle acceleration', value: '3.4x' },
      { label: 'Incident response time', value: '-62%' },
    ],
    sampleWorkflow: {
      title: 'Vendor Contract Review & Access Grant',
      trigger: 'New contract submitted in Google Drive',
      actions: ['Verify legal terms', 'Route to Department Head', 'Generate Okta user account'],
      outcome: 'Vendor onboarded in 14 minutes instead of 3 business days',
    },
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    headline: 'Synchronize creative drops, campaigns, and attribution',
    description:
      'Connect lead capture forms directly to CRM routing, Slack sales channel alerts, and executive analytics without messy CSV exports.',
    kpis: [
      { label: 'Lead dispatch latency', value: '< 15 sec' },
      { label: 'Attribution accuracy', value: '99.4%' },
      { label: 'Campaign launch time', value: '-70%' },
    ],
    sampleWorkflow: {
      title: 'High-Intent Inbound Lead Routing',
      trigger: 'MQL threshold crossed via website form',
      actions: ['Score lead signals', 'Enrich company data', 'Assign AE & notify Slack'],
      outcome: 'First outreach happens within 90 seconds of demo request',
    },
  },
  sales: {
    id: 'sales',
    name: 'Sales',
    headline: 'Keep reps selling, not copying data between tools',
    description:
      'Automate contract drafting, deal stage updates, commission estimates, and executive approvals automatically as stages advance.',
    kpis: [
      { label: 'CRM admin time saved', value: '8.5 hrs / rep / wk' },
      { label: 'Quote turnaround', value: '4x faster' },
      { label: 'Pipeline forecast accuracy', value: '+38%' },
    ],
    sampleWorkflow: {
      title: 'Deal Won & Handover Automation',
      trigger: 'Salesforce opportunity stage set to Closed-Won',
      actions: ['Generate Stripe invoice', 'Notify Customer Success', 'Schedule kickoff meeting'],
      outcome: 'Customer provisioned with zero manual handover emails',
    },
  },
  product: {
    id: 'product',
    name: 'Product',
    headline: 'Turn user feedback into groomed engineering tasks',
    description:
      'Group customer tickets, classify bug priority, and feed prioritized specs into sprint boards with contextual transcripts attached.',
    kpis: [
      { label: 'Triage turnaround', value: '-80%' },
      { label: 'Bug escalation speed', value: '< 5 min' },
      { label: 'Spec synchronization', value: '100% automated' },
    ],
    sampleWorkflow: {
      title: 'Customer Bug Escalation & Fix Loop',
      trigger: 'Zendesk ticket marked critical severity',
      actions: ['Analyze stack trace', 'Create GitHub Issue', 'Notify on-call engineer in Slack'],
      outcome: 'Direct line between support triage and engineer assignment',
    },
  },
  finance: {
    id: 'finance',
    name: 'Finance',
    headline: 'Continuous reconciliation and audit-ready ledgering',
    description:
      'Match receipts, manage expense approval workflows, track recurring subscriptions, and flag payment anomalies in real-time.',
    kpis: [
      { label: 'Month-end close time', value: '2 days vs 10 days' },
      { label: 'Reconciliation errors', value: '< 0.01%' },
      { label: 'Expense audit velocity', value: '98% automated' },
    ],
    sampleWorkflow: {
      title: 'Discrepancy Detection & Vendor Payout',
      trigger: 'Stripe monthly invoice reconciliation trigger',
      actions: ['Validate against contract terms', 'Check tax compliance', 'Queue wire approval'],
      outcome: 'Clean financial audit trail without manual spreadsheet matching',
    },
  },
  customer_success: {
    id: 'customer_success',
    name: 'Customer Success',
    headline: 'Proactive account health monitoring and renewal triggers',
    description:
      'Detect declining user activity before churn occurs, dispatch retention plays, and ensure timely executive check-ins.',
    kpis: [
      { label: 'Net Revenue Retention', value: '+14%' },
      { label: 'Churn signal detection', value: '18 days earlier' },
      { label: 'Quarterly review prep', value: '15 min vs 4 hrs' },
    ],
    sampleWorkflow: {
      title: 'Account Health Risk Intervention',
      trigger: 'Product telemetry detects 30% drop in active seats',
      actions: ['Flag high risk in CRM', 'Compile diagnostic report', 'Alert dedicated CSM'],
      outcome: 'Immediate proactive outreach before contract renewal review',
    },
  },
};

export const CHANGELOG_ITEMS: ChangelogItem[] = [
  {
    version: '2.4.0',
    date: 'March 2026',
    badge: 'NEW',
    title: 'Conditional Branching & Visual Templates',
    description:
      'Engineered an overhauled DAG visual canvas supporting dynamic branch evaluation, loop limits, and pre-built operations templates.',
    highlights: [
      'Multi-path logic with fallback handlers',
      '24 pre-built industry templates for Ops & Revenue',
      'Real-time payload inspection panel in debug mode',
    ],
  },
  {
    version: '2.3.0',
    date: 'February 2026',
    badge: 'NEW',
    title: 'Advanced Operational Analytics Engine',
    description:
      'Granular performance profiling across all active automations with P99 latency tracking, failure retrospectives, and cost attribution.',
    highlights: [
      'Time-saved calculation engine with department breakdowns',
      'Step-level latency tracking and bottleneck identification',
      'Scheduled executive email reports with high-density charts',
    ],
  },
  {
    version: '2.2.4',
    date: 'January 2026',
    badge: 'IMPROVED',
    title: 'Sub-50ms Execution Architecture',
    description:
      'Rebuilt execution queue with edge-distributed workers, achieving 4.8x faster trigger dispatch and zero queue lag during traffic spikes.',
    highlights: [
      'Edge worker orchestration for webhook receivers',
      'Zero-loss exponential backoff for external API retries',
      'Enhanced enterprise audit logging compliance export',
    ],
  },
];

export const FICTIONAL_LOGOS = [
  { name: 'Northstar', symbol: '✦' },
  { name: 'Arc Labs', symbol: '◬' },
  { name: 'Monument', symbol: '◼' },
  { name: 'Parallel', symbol: '∥' },
  { name: 'Atlas', symbol: '◈' },
];
