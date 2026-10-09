export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'condition' | 'action' | 'notification' | 'complete';
  title: string;
  subtitle: string;
  status: 'idle' | 'running' | 'completed' | 'queued';
  icon: string;
  meta: string;
  details?: Record<string, string>;
}

export interface MetricCard {
  label: string;
  value: string;
  change?: string;
  subtext: string;
  isLime?: boolean;
}

export type SolutionRole =
  | 'operations'
  | 'marketing'
  | 'sales'
  | 'product'
  | 'finance'
  | 'customer_success';

export interface SolutionDetails {
  id: SolutionRole;
  name: string;
  headline: string;
  description: string;
  kpis: { label: string; value: string }[];
  sampleWorkflow: {
    title: string;
    trigger: string;
    actions: string[];
    outcome: string;
  };
}

export interface IntegrationApp {
  id: string;
  name: string;
  category: 'crm' | 'communication' | 'workspace' | 'payments';
  status: 'connected' | 'syncing' | 'ready';
  lastSync: string;
  eventsProcessed: string;
  description: string;
}

export interface ChangelogItem {
  version: string;
  date: string;
  badge: 'NEW' | 'IMPROVED' | 'FIXED';
  title: string;
  description: string;
  highlights: string[];
}
