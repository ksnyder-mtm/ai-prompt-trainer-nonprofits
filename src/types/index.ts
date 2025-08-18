export interface Scenario {
  id: string;
  title: string;
  description: string;
  context: string;
  materialsAvailable: string[];
  icon?: string;
}

export interface MaterialCombination {
  id: string;
  name: string;
  description: string;
  materials: string[];
}

export interface FrameworkExample {
  framework: string;
  promptStructure: string;
  prompt: string;
  output: string;
  explanation: string;
}

export interface PlatformExample {
  platform: string;
  platformName: string;
  description: string;
  prompt: string;
  output: string;
  explanation: string;
  setupInstructions: string;
}

export interface PromptLevel {
  level: number;
  name: string;
  description: string;
  promptStructure: string;
  kccExample: string;
  outputQuality: string;
  timeInvestment: string;
  bestFor: string;
  kccUseCases: string[];
  workflowVisual: string;
  prompt?: string;
  output?: string;
  explanation?: string;
  frameworks?: FrameworkExample[];
  platforms?: PlatformExample[];
}

export interface ScenarioData {
  scenario: Scenario;
  materialCombinations: MaterialCombination[];
  levels: PromptLevel[];
}

export interface CompletionData {
  scenarioId: string;
  completedLevels: number[];
  timeSaved: string;
  nextSteps: string[];
}