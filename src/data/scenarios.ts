import { ScenarioData } from '../types';

export const scenariosData: ScenarioData[] = [
  {
    scenario: {
      id: 'meeting-notes-todos',
      title: 'Meeting Notes to To-Do\'s for Participants',
      description: 'Turn meeting transcripts into actionable to-dos assigned to all meeting participants with clear deadlines',
      context: 'KCC\'s weekly staff meeting with 8 participants discussing upcoming kitten season preparations and volunteer coordination',
      materialsAvailable: [
        'Meeting transcript from weekly staff call (strongly recommended - can be generated from Zoom, Teams, or Google Meet recordings)',
        'Participant list with roles (Executive Director, Program Director, Volunteer Coordinator, etc.)',
        'Previous action items still pending',
        'Upcoming deadlines and seasonal priorities',
        'Standard task assignment guidelines',
        'Handwritten notes (if transcript unavailable)'
      ],
      icon: 'check-circle'
    },
    materialCombinations: [
      {
        id: 'basic-transcript',
        name: 'Meeting Transcript Only',
        description: 'Just the meeting transcript (preferred approach)',
        materials: ['Meeting transcript from weekly staff call (strongly recommended - can be generated from Zoom, Teams, or Google Meet recordings)']
      },
      {
        id: 'transcript-plus-context',
        name: 'Notes + Participant Info',
        description: 'Meeting transcript with participant roles and responsibilities',
        materials: ['Meeting transcript', 'Participant list with roles', 'Previous action items']
      },
      {
        id: 'full-context',
        name: 'Complete Assignment Package',
        description: 'All materials including deadlines and assignment guidelines',
        materials: ['Meeting transcript', 'Participant list', 'Previous action items', 'Upcoming deadlines', 'Assignment guidelines']
      }
    ],
    levels: [
      {
        level: 1,
        name: 'Basic Prompt',
        description: 'Simple, conversational request typed directly into an AI chat',
        promptStructure: 'Unstructured, natural language question or request',
        kccExample: 'What tasks came from our staff meeting about kitten season prep?',
        outputQuality: 'Variable, may miss context or forget to assign to specific people',
        timeInvestment: 'Seconds to write, but Susan might need multiple attempts',
        bestFor: 'Quick task summaries, brainstorming (requires paid AI tool - not recommended for free versions)',
        kccUseCases: ['Quick meeting recaps', 'Initial task identification', 'Basic summaries'],
        workflowVisual: 'Susan → Types prompt → AI → Response → Susan manually assigns tasks',
        prompt: 'What tasks came from our staff meeting about kitten season prep?',
        output: `Here are the tasks from your staff meeting:
- Prepare for kitten season
- Update volunteer training
- Review foster family capacity
- Order supplies
- Schedule veterinary visits
- Update website content`,
        explanation: 'This basic prompt gets you started but lacks specificity. The AI doesn\'t know who should do what or by when, requiring Susan to manually assign tasks and deadlines. **Tool Requirements:** Requires a paid AI service - organizational accounts preferred (Microsoft 365 Copilot, Google Gemini, Claude Teams, or ChatGPT Teams). Free versions not recommended for professional use.'
      },
      {
        level: 2,
        name: 'Structured Format',
        description: 'Prompts following a specific framework that includes all necessary context',
        promptStructure: 'Context, Role, Action, Format, Tone',
        kccExample: 'Context: KCC staff meeting notes. Role: Executive Director. Action: Create assigned task list. Format: Person, task, deadline. Tone: Clear and actionable.',
        outputQuality: 'Specific assignments with clear ownership and deadlines',
        timeInvestment: '2-3 minutes to structure, reliable results',
        bestFor: 'Important meetings, task delegation',
        kccUseCases: ['Weekly staff meetings', 'Project planning sessions', 'Committee meetings'],
        workflowVisual: 'Susan → Fills CRAFT template → AI → Assigned task list → Team receives clear assignments',
        prompt: `Context: KCC just completed our weekly staff meeting preparing for kitten season (April-September). 8 staff members attended: Susan Martinez (Executive Director), David Chen (Program Director), Jennifer Thompson (Volunteer Coordinator), Maria Rodriguez (Development Manager), Dr. Sarah Chen (Veterinary Consultant), Marcus Williams (Education Specialist), Lisa Park (Foster Coordinator), and Tom Johnson (Operations Manager). We discussed volunteer training bottlenecks, supply preparation, and outreach strategies.

Role: Executive Director responsible for task delegation and project coordination

Action: Create a comprehensive task assignment list from the meeting with specific assignments and realistic deadlines

Format: Table with columns for Task, Assigned Person, Deadline, Priority Level

Tone: Professional, clear, actionable`,
        output: `# KCC Staff Meeting Action Items - Kitten Season Preparation
## Meeting Date: March 8, 2024 | Next Review: March 15

| Task | Assigned Person | Deadline | Priority |
|------|----------------|----------|----------|
| Develop accelerated volunteer training curriculum to reduce 3-week bottleneck | Jennifer Thompson (Volunteer Coordinator) | March 20 | High |
| Recruit and train 5 additional volunteer trainers | Jennifer Thompson | March 25 | High |
| Complete inventory audit of kitten supplies (blankets, food, medical) | Tom Johnson (Operations Manager) | March 15 | High |
| Place bulk supply orders based on projected 400+ kitten intake | Tom Johnson | March 22 | High |
| Schedule veterinary clinic capacity planning meeting | Dr. Sarah Chen (Veterinary Consultant) | March 12 | High |
| Update foster family recruitment campaign for 30 new families | Lisa Park (Foster Coordinator) | March 18 | High |
| Create kitten season donor communication timeline | Maria Rodriguez (Development Manager) | March 20 | Medium |
| Design educational materials for new foster families | Marcus Williams (Education Specialist) | March 25 | Medium |
| Review and update kitten intake protocols | David Chen (Program Director) | March 18 | Medium |
| Coordinate social media campaign launch for foster recruitment | Maria Rodriguez | March 30 | Medium |
| Schedule all-staff kitten season kickoff meeting | Susan Martinez (Executive Director) | March 28 | Low |

## Follow-up Actions:
- Weekly check-ins scheduled with each department head
- Progress review meeting: March 15 at 2 PM
- Final readiness assessment: April 1`,
        explanation: 'The CRAFT structure ensures all context is provided, resulting in specific, actionable tasks with clear ownership and deadlines. This format eliminates confusion about responsibilities.',
        frameworks: [
          {
            framework: 'CRAFT',
            promptStructure: 'Context, Role, Action, Format, Tone',
            prompt: `Context: KCC just completed our weekly staff meeting preparing for kitten season (April-September). 8 staff members attended: Susan Martinez (Executive Director), David Chen (Program Director), Jennifer Thompson (Volunteer Coordinator), Maria Rodriguez (Development Manager), Dr. Sarah Chen (Veterinary Consultant), Marcus Williams (Education Specialist), Lisa Park (Foster Coordinator), and Tom Johnson (Operations Manager). We discussed volunteer training bottlenecks, supply preparation, and outreach strategies.

Role: Executive Director responsible for task delegation and project coordination

Action: Create a comprehensive task assignment list from the meeting with specific assignments and realistic deadlines

Format: Table with columns for Task, Assigned Person, Deadline, Priority Level

Tone: Professional, clear, actionable`,
            output: `# KCC Staff Meeting Action Items - Kitten Season Preparation
## Meeting Date: March 8, 2024 | Next Review: March 15

| Task | Assigned Person | Deadline | Priority |
|------|----------------|----------|----------|
| Develop accelerated volunteer training curriculum to reduce 3-week bottleneck | Jennifer Thompson (Volunteer Coordinator) | March 20 | High |
| Recruit and train 5 additional volunteer trainers | Jennifer Thompson | March 25 | High |
| Complete inventory audit of kitten supplies (blankets, food, medical) | Tom Johnson (Operations Manager) | March 15 | High |
| Place bulk supply orders based on projected 400+ kitten intake | Tom Johnson | March 22 | High |
| Schedule veterinary clinic capacity planning meeting | Dr. Sarah Chen (Veterinary Consultant) | March 12 | High |
| Update foster family recruitment campaign for 30 new families | Lisa Park (Foster Coordinator) | March 18 | High |
| Create kitten season donor communication timeline | Maria Rodriguez (Development Manager) | March 20 | Medium |
| Design educational materials for new foster families | Marcus Williams (Education Specialist) | March 25 | Medium |
| Review and update kitten intake protocols | David Chen (Program Director) | March 18 | Medium |
| Coordinate social media campaign launch for foster recruitment | Maria Rodriguez | March 30 | Medium |
| Schedule all-staff kitten season kickoff meeting | Susan Martinez (Executive Director) | March 28 | Low |

## Follow-up Actions:
- Weekly check-ins scheduled with each department head
- Progress review meeting: March 15 at 2 PM
- Final readiness assessment: April 1`,
            explanation: 'CRAFT provides a systematic approach ensuring all necessary context is included, resulting in comprehensive and actionable task assignments with clear accountability. **Tool Requirements:** Works best with paid AI services - organizational accounts recommended (Microsoft 365 Copilot, Google Gemini, Claude Teams, or ChatGPT Teams).'
          },
          {
            framework: 'PCTF',
            promptStructure: 'Persona, Context, Task, Format',
            prompt: `Persona: You are an experienced nonprofit executive assistant who specializes in meeting management and task delegation for animal welfare organizations. You understand the seasonal nature of kitten care and the coordination required across multiple departments.

Context: KCC's weekly staff meeting just concluded with 8 department heads present preparing for kitten season (400+ kittens expected April-September). Key challenges discussed: volunteer training bottlenecks creating 3-week delays, supply chain preparation, foster family recruitment needing 30 new families, and veterinary capacity planning. Organization background: KCC serves 400+ kittens annually with 25 staff members and 200+ volunteers, operating on a $480K annual budget with seasonal fluctuations.

Task: Extract and organize all action items from this staff meeting into a comprehensive task assignment matrix with specific deadlines, clear accountability, and realistic workload distribution.

Format: Professional task management matrix with columns for Task Description, Responsible Person, Completion Deadline, Priority Level, and Dependencies. Include a separate section for success metrics and review schedule.`,
            output: `# KCC Kitten Season Preparation - Task Assignment Matrix
## Meeting Date: March 8, 2024 | Next Review: March 15, 2024

| Task Description | Responsible Person | Deadline | Priority | Dependencies |
|------------------|-------------------|----------|----------|--------------|
| Design accelerated volunteer training curriculum (reduce from 3 weeks to 1 week) | Jennifer Thompson | March 20 | High | Previous curriculum review |
| Recruit and onboard 5 experienced volunteer trainers | Jennifer Thompson | March 25 | High | Completed curriculum |
| Complete comprehensive supply inventory audit | Tom Johnson | March 15 | High | Access to all storage areas |
| Execute bulk supply procurement (based on 400+ kitten projection) | Tom Johnson | March 22 | High | Inventory audit results |
| Coordinate veterinary capacity assessment with Dr. Sarah | David Chen | March 12 | High | Dr. Chen's schedule |
| Launch foster family recruitment drive for 30 new families | Lisa Park | March 18 | High | Updated recruitment materials |
| Develop kitten season donor engagement strategy | Maria Rodriguez | March 20 | Medium | Budget approval |
| Create comprehensive foster family education materials | Marcus Williams | March 25 | Medium | Program updates |
| Revise kitten intake and processing protocols | David Chen | March 18 | Medium | Veterinary input |
| Execute social media campaign for volunteer/foster recruitment | Maria Rodriguez | March 30 | Medium | Content creation |
| Organize kitten season all-staff readiness meeting | Susan Martinez | March 28 | Low | All prep tasks 80% complete |

## Success Metrics & Review Schedule
- Target: 100% preparation completion by April 1
- Weekly progress reviews: Every Monday 2 PM
- Department check-ins: Wednesday and Friday
- Final readiness assessment: April 1 with full staff

## Risk Mitigation
- Backup volunteer trainers identified
- Emergency supply vendors on standby
- Foster family waitlist maintained`,
            explanation: 'PCTF starts by defining the AI persona, which sets the expertise level and perspective, leading to more strategic and comprehensive task assignments that consider organizational capacity and seasonal demands. **Tool Requirements:** Requires paid AI services - organizational accounts preferred (Microsoft 365 Copilot, Google Gemini, Claude Teams, or ChatGPT Teams).'
          }
        ]
      },
      {
        level: 3,
        name: 'Packaged Tool (Platform-Specific)',
        description: 'Pre-configured AI assistant with KCC\'s team structure, meeting patterns, and task templates saved',
        promptStructure: 'Pre-loaded context + variable inputs',
        kccExample: 'KCC Meeting Assistant with staff profiles, role responsibilities, and standard workflows',
        outputQuality: 'Maintains consistency, knows team members and their capacities',
        timeInvestment: '30-60 minutes initial setup, then seconds per use',
        bestFor: 'All staff meetings and recurring task assignments (requires paid platform subscription)',
        kccUseCases: ['Weekly staff meetings', 'Department meetings', 'Project planning', 'Seasonal preparation'],
        workflowVisual: 'Susan → Opens "Meeting Assistant" → Inputs meeting notes → AI (with KCC context) → Complete task assignments',
        platforms: [
          {
            platform: 'chatgpt',
            platformName: 'ChatGPT (GPTs)',
            description: 'Create a custom GPT with KCC team structure and meeting workflows',
            prompt: 'Weekly staff meeting notes: Discussed kitten season prep, volunteer training bottlenecks, need for supply inventory, foster family recruitment goals',
            output: `# KCC Weekly Staff Meeting - Task Assignments
## March 8, 2024 Meeting | Kitten Season Preparation Focus

### Immediate Actions (Next 7 Days)
**Jennifer Thompson - Volunteer Coordinator**
- [ ] Review current volunteer trainer capacity (3 active, need 8 total)
- [ ] Contact previous volunteer trainers from 2023 season
- [ ] Schedule emergency training curriculum meeting with Marcus

**Tom Johnson - Operations Manager**  
- [ ] Complete supply inventory in main storage and satellite locations
- [ ] Generate supply needs report based on 400-kitten projection
- [ ] Research backup suppliers for critical items (formula, blankets)

**Dr. Sarah Chen - Veterinary Consultant**
- [ ] Assess current veterinary clinic capacity for increased volume
- [ ] Schedule partnership discussion with Animal Emergency Services
- [ ] Review medical supply needs for kitten season

### Short-term Actions (Next 2 Weeks)
**Lisa Park - Foster Coordinator**
- [ ] Launch targeted recruitment for 30 new foster families
- [ ] Update foster family application process for efficiency
- [ ] Schedule foster family appreciation event (retention strategy)

**Maria Rodriguez - Development Manager**
- [ ] Create kitten season fundraising timeline
- [ ] Draft donor communication highlighting preparation efforts
- [ ] Research emergency grant opportunities for seasonal needs

**Marcus Williams - Education Specialist**
- [ ] Update foster family training materials for 2024
- [ ] Create quick-reference guides for new volunteers
- [ ] Develop kitten care video series for foster families

### Strategic Actions (Next Month)
**David Chen - Program Director**
- [ ] Finalize kitten intake protocols with increased volume considerations
- [ ] Coordinate with all departments on readiness timeline
- [ ] Plan quality control measures for busy season

**Susan Martinez - Executive Director**
- [ ] Schedule monthly progress reviews with all department heads
- [ ] Prepare board update on kitten season readiness
- [ ] Review staffing needs and temporary volunteer coordination

### Auto-Generated Follow-ups
- Task reminder emails scheduled for each assignee
- Progress check-in meetings calendared
- Department coordination touchpoints scheduled
- Final readiness assessment: April 1st (all-hands meeting)`,
            explanation: 'The GPT knows all staff members, their typical workloads, KCC\'s seasonal patterns, and standard task distribution. It automatically creates realistic assignments that align with each person\'s role and capacity.',
            setupInstructions: `**Setting up your KCC Meeting Assistant GPT:**

1. **Create New GPT**: Go to ChatGPT Plus → "My GPTs" → "Create a GPT"
2. **Name**: "KCC Meeting Assistant"
3. **Description**: "Specialized assistant for turning KCC meeting notes into assigned action items"

**Instructions to paste:**
\`\`\`
You are the KCC Meeting Assistant, specialized in processing meeting notes for the Kitty Crochet Collective and creating actionable task assignments.

ORGANIZATION CONTEXT:
- KCC serves 400+ kittens annually through foster programs
- 25 staff members, 200+ volunteers, $480K annual budget
- Seasonal operations (kitten season April-September)

TEAM STRUCTURE:
- Susan Martinez: Executive Director (strategy, oversight, board relations)
- David Chen: Program Director (operations, protocols, quality control)
- Jennifer Thompson: Volunteer Coordinator (training, recruitment, scheduling)
- Maria Rodriguez: Development Manager (fundraising, communications, events)
- Dr. Sarah Chen: Veterinary Consultant (medical protocols, capacity planning)
- Marcus Williams: Education Specialist (training materials, workshops)
- Lisa Park: Foster Coordinator (foster family management, recruitment)
- Tom Johnson: Operations Manager (supplies, inventory, logistics)

TASK ASSIGNMENT RULES:
1. Assign tasks based on role responsibilities
2. Set realistic deadlines (1 week for urgent, 2-3 weeks for projects)
3. Consider seasonal workload (kitten season is intense)
4. Include follow-up mechanisms
5. Prioritize based on organizational impact

OUTPUT FORMAT:
- Clear task assignments with person, deadline, priority
- Organized by timeframe (immediate, short-term, strategic)
- Include follow-up schedule
- Professional nonprofit tone
\`\`\`

4. **Test**: Upload sample meeting notes to verify output quality
5. **Share**: Make available to relevant team members`
          },
          {
            platform: 'gemini',
            platformName: 'Google Gemini (Gems)',
            description: 'Create a Gem with KCC context for consistent meeting processing',
            prompt: 'Weekly staff meeting notes: Discussed kitten season prep, volunteer training bottlenecks, need for supply inventory, foster family recruitment goals',
            output: `# KCC Weekly Staff Meeting - Action Items Matrix
## Meeting: March 8, 2024 | Kitten Season Preparation

### HIGH PRIORITY - Next 7 Days

| Task | Owner | Due Date | Notes |
|------|-------|----------|-------|
| Review volunteer trainer capacity (current: 3, need: 8) | Jennifer Thompson | March 15 | Contact 2023 trainer alumni |
| Complete supply inventory audit (all locations) | Tom Johnson | March 15 | Include satellite storage |
| Schedule veterinary capacity planning meeting | Dr. Sarah Chen | March 12 | Include emergency services discussion |

### MEDIUM PRIORITY - Next 2 Weeks

| Task | Owner | Due Date | Notes |
|------|-------|----------|-------|
| Launch foster family recruitment (30 new families) | Lisa Park | March 18 | Update application process |
| Create kitten season donor engagement timeline | Maria Rodriguez | March 20 | Include emergency grant research |
| Update foster family education materials | Marcus Williams | March 25 | Focus on 2024 program changes |
| Review kitten intake protocols | David Chen | March 18 | Plan for increased volume |

### STRATEGIC - Next Month

| Task | Owner | Due Date | Notes |
|------|-------|----------|-------|
| Coordinate department readiness timeline | David Chen | March 28 | Quality control measures |
| Schedule board update presentation | Susan Martinez | March 28 | Include staffing assessment |
| Execute social media recruitment campaign | Maria Rodriguez | March 30 | Multi-platform approach |

### AUTOMATED FOLLOW-UPS SCHEDULED:
✓ Weekly check-ins with department heads
✓ Progress review meeting: March 15, 2 PM
✓ Final readiness assessment: April 1`,
            explanation: 'The Gem maintains KCC\'s organizational knowledge and creates consistent, well-structured task assignments that account for team roles and seasonal demands.',
            setupInstructions: `**Setting up your KCC Meeting Gem:**

1. **Access Gems**: Go to Gemini → Click "Gems" icon → "New Gem"
2. **Name**: "KCC Meeting Processor"
3. **Description**: "Converts meeting notes into assigned action items for KCC staff"

**Gem Instructions:**
\`\`\`
You are the KCC Meeting Processor, designed specifically for the Kitty Crochet Collective's meeting management needs.

ORGANIZATION PROFILE:
• Mission: Kitten welfare through foster programs and crocheted accessories
• Scale: 400+ kittens annually, 25 staff, 200+ volunteers
• Budget: $480K annually with seasonal fluctuations
• Peak season: April-September (kitten season)

STAFF ASSIGNMENTS BY ROLE:
• Susan Martinez (ED): Strategic planning, board relations, oversight
• David Chen (Program Director): Operations, protocols, cross-department coordination
• Jennifer Thompson (Volunteer Coord): Training, recruitment, volunteer management
• Maria Rodriguez (Development): Fundraising, communications, donor relations
• Dr. Sarah Chen (Veterinary): Medical protocols, capacity planning, health initiatives
• Marcus Williams (Education): Training materials, workshops, knowledge management
• Lisa Park (Foster Coord): Foster family recruitment, retention, support
• Tom Johnson (Operations): Supplies, inventory, logistics, facilities

PROCESSING GUIDELINES:
1. Extract actionable items from meeting discussions
2. Assign based on role expertise and current capacity
3. Set realistic deadlines considering seasonal workload
4. Prioritize by organizational impact and urgency
5. Include dependencies and follow-up mechanisms
6. Maintain professional nonprofit communication tone

OUTPUT STRUCTURE:
- Organized by priority level and timeframe
- Clear task descriptions with context
- Specific assignee and completion date
- Additional notes for clarity
- Built-in follow-up schedule
\`\`\`

4. **Save Gem**: Click "Save" and test with sample meeting notes
5. **Access**: Available from Gemini sidebar for all future meetings`
          },
          {
            platform: 'claude',
            platformName: 'Claude (Projects)',
            description: 'Create a Claude Project with comprehensive KCC organizational knowledge',
            prompt: 'Weekly staff meeting notes: Discussed kitten season prep, volunteer training bottlenecks, need for supply inventory, foster family recruitment goals',
            output: `# KCC Staff Meeting Action Plan | March 8, 2024
## Kitten Season Preparation - Task Distribution

### IMMEDIATE RESPONSE NEEDED (Week of March 11)

**Jennifer Thompson - Volunteer Coordination**
🎯 **Trainer Capacity Crisis**
- [ ] Audit current trainer availability (due: March 12)
  - Current active: 3 trainers
  - Target needed: 8 trainers for season
  - Action: Contact 2023 volunteer trainer alumni list
- [ ] Emergency curriculum streamlining meeting with Marcus (due: March 14)

**Tom Johnson - Operations**
🎯 **Supply Chain Readiness**
- [ ] Comprehensive inventory audit - all locations (due: March 15)
  - Main facility + 3 satellite storage areas
  - Critical items: formula, blankets, medical supplies
  - Generate 400+ kitten season projection report
- [ ] Backup supplier research and contact (due: March 15)

**Dr. Sarah Chen - Veterinary Services**
🎯 **Medical Capacity Planning**
- [ ] Veterinary capacity assessment (due: March 12)
- [ ] Emergency services partnership meeting (due: March 14)
  - Include Animal Emergency Services
  - Discuss after-hours kitten crisis protocols

### SHORT-TERM INITIATIVES (March 18-25)

**Lisa Park - Foster Program**
🎯 **Foster Family Expansion**
- [ ] Launch recruitment for 30 new foster families (start: March 18)
- [ ] Streamline application process for efficiency (due: March 22)
- [ ] Foster appreciation event planning (retention strategy)

**Maria Rodriguez - Development & Communications**
🎯 **Funding & Outreach Strategy**
- [ ] Kitten season fundraising calendar (due: March 20)
- [ ] Donor communication highlighting prep efforts (due: March 22)
- [ ] Emergency grant opportunity research (due: March 25)

**Marcus Williams - Education & Training**
🎯 **Knowledge Systems**
- [ ] 2024 foster family training material updates (due: March 25)
- [ ] Quick-reference guides for new volunteers (due: March 25)
- [ ] Kitten care video series development (start: March 20)

### STRATEGIC COORDINATION (March 25 - April 1)

**David Chen - Program Leadership**
🎯 **Operational Excellence**
- [ ] Kitten intake protocol revision for volume (due: March 25)
- [ ] Department coordination timeline (due: March 28)
- [ ] Quality control measures for busy season (due: March 30)

**Susan Martinez - Executive Oversight**
🎯 **Leadership & Governance**
- [ ] Department head monthly review schedule (due: March 28)
- [ ] Board readiness presentation prep (due: March 30)
- [ ] Staffing needs assessment (due: April 1)

### AUTOMATED FOLLOW-UP SCHEDULE
📅 **Weekly Progress Reviews**: Every Monday 2:00 PM
📅 **Department Check-ins**: Wednesday & Friday touchpoints
📅 **Final Readiness Meeting**: April 1, 2024 (All-hands)
📧 **Task Reminders**: 48-hour and 24-hour automated alerts
📊 **Progress Dashboard**: Updated weekly with completion metrics`,
            explanation: 'Claude Projects maintain rich organizational context and create detailed, nuanced task assignments that consider both individual capacity and organizational priorities.',
            setupInstructions: `**Setting up your KCC Meeting Management Project:**

1. **Create Project**: Go to Claude → "Projects" → "Create Project"
2. **Project Name**: "KCC Meeting & Task Management"
3. **Project Description**: "Specialized assistant for KCC meeting notes and task delegation"

**Project Knowledge to Upload:**

**File 1: "KCC_Organization_Profile.md"**
\`\`\`markdown
# Kitty Crochet Collective - Organization Profile

## Mission & Operations
- Annual kitten intake: 400+ kittens
- Primary service: Foster care with crocheted accessories to increase adoption rates
- Service area: Cedar Rapids, IA and expanding regions
- Operating budget: $480,000 annually
- Peak season: April-September (kitten season)

## Staff Structure & Responsibilities

### Executive Leadership
**Susan Martinez - Executive Director**
- Strategic planning and organizational vision
- Board of directors relations and reporting
- Cross-departmental oversight and coordination
- Community partnerships and government relations

### Program Operations
**David Chen - Program Director**
- Daily operations management and protocol development
- Quality control and outcome measurement
- Inter-departmental project coordination
- Seasonal capacity planning and resource allocation

### Team Management
**Jennifer Thompson - Volunteer Coordinator**
- Volunteer recruitment, training, and retention (200+ volunteers)
- Training curriculum development and delivery
- Volunteer scheduling and capacity management
- Volunteer recognition and engagement programs

**Lisa Park - Foster Coordinator**  
- Foster family recruitment and retention
- Foster family training and ongoing support
- Foster placement coordination and oversight
- Foster family community building and appreciation

### Development & Communications
**Maria Rodriguez - Development Manager**
- Fundraising strategy and implementation
- Donor relations and stewardship
- Grant writing and foundation relations
- Marketing, communications, and social media
- Special events planning and execution

### Specialized Services
**Dr. Sarah Chen - Veterinary Consultant**
- Medical protocols and quality standards
- Veterinary capacity planning and partnerships
- Health and safety training for staff and volunteers
- Medical emergency response protocols

**Marcus Williams - Education Specialist**
- Training material development and maintenance
- Workshop planning and facilitation
- Knowledge management and documentation
- Community education program development

**Tom Johnson - Operations Manager**
- Supply chain management and inventory control
- Facilities management and maintenance
- Technology systems and data management
- Logistics coordination and transportation

## Seasonal Considerations
- **Kitten Season (April-September)**: 80% of annual intake
- **Preparation Phase (January-March)**: Volunteer training, supply preparation
- **Recovery Phase (October-December)**: Volunteer retention, planning, fundraising

## Meeting Patterns
- **Weekly Staff Meetings**: All department heads, Mondays 2:00 PM
- **Department Meetings**: Bi-weekly, role-specific
- **Board Meetings**: Monthly, strategic oversight
- **All-Hands Meetings**: Quarterly, organizational updates
\`\`\`

**File 2: "Meeting_Processing_Instructions.md"**
\`\`\`markdown
# Meeting Processing Guidelines

## Task Assignment Principles
1. **Role-Based Assignment**: Match tasks to expertise and responsibility areas
2. **Capacity Consideration**: Account for seasonal workload and current projects
3. **Realistic Timelines**: Standard timelines unless marked urgent
   - Immediate: 2-3 days
   - Short-term: 1-2 weeks  
   - Strategic: 3-4 weeks
4. **Dependency Mapping**: Identify and sequence related tasks
5. **Follow-up Integration**: Build in check-ins and progress reviews

## Output Format Requirements
- Clear task descriptions with context
- Specific assignee based on role expertise
- Realistic deadlines considering workload
- Priority levels (High/Medium/Low)
- Dependencies and coordination needs
- Built-in follow-up schedule
- Professional nonprofit communication tone

## Quality Standards
- Tasks should be specific and actionable
- Assignments should reflect role expertise
- Timelines should be realistic for nonprofit capacity
- Include both individual tasks and coordination needs
- Account for seasonal workload variations
\`\`\`

4. **Test Project**: Upload sample meeting notes to verify output
5. **Optimize**: Refine based on actual KCC meeting results`
          },
          {
            platform: 'microsoft',
            platformName: 'Microsoft Copilot (Agents)',
            description: 'Create a Copilot Agent integrated with Microsoft 365 for seamless workflow',
            prompt: 'Weekly staff meeting notes: Discussed kitten season prep, volunteer training bottlenecks, need for supply inventory, foster family recruitment goals',
            output: `# KCC Weekly Staff Meeting - Task Assignments
## Meeting Date: March 8, 2024 | Kitten Season Preparation

### 🔴 HIGH PRIORITY TASKS (Due This Week)

**Jennifer Thompson - Volunteer Coordinator**
📋 **Task**: Volunteer trainer capacity assessment and recruitment
📅 **Deadline**: March 15, 2024
🎯 **Action Items**:
- Review current trainer roster (3 active, need 8 total)
- Contact 2023 volunteer trainer alumni database
- Schedule emergency curriculum meeting with Marcus Williams
📧 **Auto-created**: Outlook calendar invite for March 14 curriculum meeting

**Tom Johnson - Operations Manager**
📋 **Task**: Comprehensive supply inventory and procurement planning
📅 **Deadline**: March 15, 2024
🎯 **Action Items**:
- Audit main facility and satellite storage locations
- Generate supply needs report for 400+ kitten projection
- Research and contact backup suppliers for critical items
📊 **Auto-created**: Excel inventory tracking spreadsheet shared

**Dr. Sarah Chen - Veterinary Consultant**
📋 **Task**: Veterinary capacity planning and partnerships
📅 **Deadline**: March 12, 2024
🎯 **Action Items**:
- Assess current clinic capacity for increased kitten volume
- Schedule partnership meeting with Animal Emergency Services
- Review medical supply requirements for kitten season
📅 **Auto-created**: Teams meeting invite with Emergency Services

### 🟡 MEDIUM PRIORITY TASKS (Due Next 2 Weeks)

**Lisa Park - Foster Coordinator**
📋 **Task**: Foster family recruitment and process optimization
📅 **Deadline**: March 18, 2024
🎯 **Action Items**:
- Launch recruitment campaign for 30 new foster families
- Streamline foster application process for efficiency
- Plan foster family appreciation event for retention
📄 **Auto-created**: Word document template for recruitment materials

**Maria Rodriguez - Development Manager**
📋 **Task**: Fundraising and communication strategy
📅 **Deadline**: March 20, 2024
🎯 **Action Items**:
- Develop kitten season fundraising timeline
- Draft donor communications highlighting preparation efforts
- Research emergency grant opportunities for seasonal needs
💼 **Auto-created**: PowerPoint template for donor presentation

**Marcus Williams - Education Specialist**
📋 **Task**: Training material updates and development
📅 **Deadline**: March 25, 2024
🎯 **Action Items**:
- Update foster family training materials for 2024
- Create quick-reference guides for new volunteers
- Begin development of kitten care video series
📚 **Auto-created**: SharePoint folder for training resources

### 🟢 STRATEGIC TASKS (Due Next Month)

**David Chen - Program Director**
📋 **Task**: Protocol revision and coordination
📅 **Deadline**: March 28, 2024
🎯 **Action Items**:
- Revise kitten intake protocols for increased volume
- Coordinate department readiness timelines
- Develop quality control measures for busy season

**Susan Martinez - Executive Director**
📋 **Task**: Leadership coordination and board communication
📅 **Deadline**: March 30, 2024
🎯 **Action Items**:
- Schedule monthly progress reviews with department heads
- Prepare board update on kitten season readiness
- Review staffing needs and temporary volunteer coordination

### 📅 AUTOMATED FOLLOW-UP SCHEDULE
✅ **Weekly Progress Reviews**: Recurring Monday 2:00 PM Teams meeting
✅ **Department Check-ins**: Wednesday/Friday Outlook reminders
✅ **Final Readiness Assessment**: April 1 all-hands Teams meeting
✅ **Task Reminders**: 48-hour and 24-hour Outlook notifications
✅ **Progress Tracking**: Weekly Power BI dashboard updates`,
            explanation: 'The Copilot Agent integrates with Microsoft 365 to automatically create calendar items, documents, and tracking systems while maintaining KCC\'s organizational context.',
            setupInstructions: `**Setting up your KCC Meeting Copilot Agent:**

1. **Access Copilot Studio**: Go to Microsoft 365 → Copilot Studio → "Create Agent"
2. **Agent Name**: "KCC Meeting Manager"
3. **Agent Description**: "Processes KCC meeting notes and creates task assignments with M365 integration"

**Agent Configuration:**

**Knowledge Sources to Add:**
- Upload KCC organization chart
- Connect to SharePoint site with staff directories
- Link to Teams meeting histories
- Connect to Outlook calendars for availability

**Agent Instructions:**
\`\`\`
You are the KCC Meeting Manager, specifically designed for the Kitty Crochet Collective's workflow integration with Microsoft 365.

ORGANIZATION CONTEXT:
- Animal welfare nonprofit serving 400+ kittens annually
- 8 core staff members with defined roles and responsibilities
- Seasonal operations with April-September peak demand
- $480K annual budget with careful resource management

INTEGRATION CAPABILITIES:
1. **Outlook Integration**: Create calendar items and reminders
2. **Teams Integration**: Schedule meetings and send notifications  
3. **SharePoint Integration**: Create document folders and templates
4. **Excel Integration**: Generate tracking spreadsheets
5. **Power BI Integration**: Update dashboard metrics

STAFF ROLE ASSIGNMENTS:
- Susan Martinez (ED): Strategy, board relations, oversight
- David Chen (Program): Operations, protocols, coordination
- Jennifer Thompson (Volunteer): Training, recruitment, management
- Maria Rodriguez (Development): Fundraising, communications
- Dr. Sarah Chen (Veterinary): Medical protocols, partnerships
- Marcus Williams (Education): Training materials, workshops
- Lisa Park (Foster): Foster family management
- Tom Johnson (Operations): Supplies, logistics, facilities

AUTOMATED ACTIONS TO TAKE:
1. Parse meeting notes for actionable items
2. Assign tasks based on role expertise
3. Set realistic deadlines considering workload
4. Create Outlook calendar reminders
5. Generate Teams meeting invites for coordination
6. Create SharePoint folders for project resources
7. Set up recurring follow-up meetings
8. Generate Excel tracking templates
9. Send Teams notifications to assignees

OUTPUT REQUIREMENTS:
- Professional task assignments with clear accountability
- Integration with M365 tools for seamless workflow
- Automated follow-up and reminder systems
- Progress tracking and reporting capabilities
\`\`\`

**Connections to Configure:**
- ✅ Outlook (calendar, reminders, email)
- ✅ Teams (meetings, notifications, collaboration)
- ✅ SharePoint (document storage, templates)
- ✅ Excel (tracking spreadsheets, reporting)
- ✅ Power BI (dashboard updates, metrics)

4. **Test Integration**: Process sample meeting notes
5. **Deploy**: Make available to KCC staff members
6. **Train**: Provide staff training on agent capabilities`
          }
        ]
      },
      {
        level: 4,
        name: 'Automated Workflow',
        description: 'AI that runs automatically when meetings end, creating tasks across all systems',
        promptStructure: 'Trigger → AI Processing → Automated Actions',
        kccExample: 'When meeting ends in Google Calendar → AI processes notes → Creates Asana tasks, sends emails',
        outputQuality: 'Consistent, immediate, integrated across all KCC systems',
        timeInvestment: '2-4 hours initial setup, then runs automatically forever',
        bestFor: 'Recurring meetings, standard workflows',
        kccUseCases: ['Weekly staff meetings', 'Department meetings', 'Project planning sessions', 'Seasonal preparation'],
        workflowVisual: 'Meeting ends → Google Calendar → Zapier → AI processes notes → Asana tasks created → Follow-up emails sent → Susan notified',
        prompt: '[Automated trigger from calendar event ending]',
        output: `## Automated Task Assignment Completed ✓

### Meeting: KCC Weekly Staff - Kitten Season Prep
**Date:** March 8, 2024 | **Duration:** 45 minutes | **Attendees:** 8

### Asana Tasks Created & Assigned:
- ✓ Project: "Kitten Season 2024 Preparation" created
- ✓ 18 tasks assigned across 8 team members
- ✓ Dependencies mapped between related tasks
- ✓ Milestone deadlines set for March 15, 25, and April 1
- ✓ Department-specific workspaces updated

### Automated Email Notifications Sent:
- ✓ Jennifer Thompson: Volunteer training assignments with curriculum templates
- ✓ Tom Johnson: Supply inventory checklist with last year's data attached
- ✓ Dr. Sarah Chen: Veterinary planning meeting invite with capacity assessment form
- ✓ Lisa Park: Foster recruitment package with social media templates
- ✓ Maria Rodriguez: Fundraising timeline template with donor segments
- ✓ Marcus Williams: Education material update list with brand guidelines
- ✓ David Chen: Protocol review assignments with quality metrics
- ✓ All Staff: Meeting summary with individual action items highlighted

### Calendar Integration:
- ✓ Individual task deadlines added to personal calendars
- ✓ Follow-up meetings scheduled with each department head
- ✓ Weekly progress reviews calendared (every Monday 2 PM)
- ✓ Final readiness meeting scheduled: April 1, 2024

### System Integrations:
- ✓ Slack notifications sent to relevant channels
- ✓ Google Drive folders created for each work stream
- ✓ Trello boards updated with visual task flow
- ✓ CRM updated with volunteer and foster recruitment targets

### Document Generation:
- ✓ Meeting summary saved to shared drive
- ✓ Task assignment spreadsheet created and shared
- ✓ Progress tracking dashboard generated
- ✓ Weekly report template prepared for next meeting

### Smart Follow-ups Scheduled:
- ✓ 48-hour task completion reminders set
- ✓ Weekly progress digest emails scheduled
- ✓ Deadline approach notifications configured
- ✓ Resource sharing automated between dependent tasks

### Performance Analytics:
- ✓ Task completion tracking enabled
- ✓ Team workload balance monitored
- ✓ Deadline achievement metrics active
- ✓ Meeting efficiency scores calculated

### Susan's Executive Dashboard Updated:
"18 tasks assigned from March 8 meeting. All team members notified with specific deliverables. 3 high-priority items flagged for early follow-up. Department capacity appears balanced. Next automated review: March 15."`,
        explanation: 'Full automation eliminates manual task creation and follow-up. The system knows KCC\'s tools, team capacities, and project dependencies, creating everything needed for successful execution and saving Susan 3-4 hours per meeting in task management.'
      }
    ]
  },
  {
    scenario: {
      id: 'board-meeting',
      title: 'Handling Board Meeting Tasks',
      description: 'Process monthly board meeting notes about expanding foster network to serve 100 more kittens annually',
      context: 'KCC\'s monthly board meeting about expanding foster network to serve 100 more kittens annually',
      materialsAvailable: [
        'Meeting transcript from Susan Martinez',
        'Attendee list (9 board members including veterinarian and IT executive)',
        'Previous action items about volunteer training bottlenecks',
        'Strategic plan priority to expand to neighboring counties'
      ],
      icon: 'clipboard'
    },
    materialCombinations: [
      {
        id: 'basic-notes',
        name: 'Basic Meeting Notes',
        description: 'Just the meeting transcript',
        materials: ['Meeting transcript from Susan Martinez']
      },
      {
        id: 'notes-plus-context',
        name: 'Notes + Context',
        description: 'Meeting transcript with attendee list and previous action items',
        materials: ['Meeting transcript', 'Attendee list', 'Previous action items']
      },
      {
        id: 'full-context',
        name: 'Complete Context',
        description: 'All meeting materials including strategic plan',
        materials: ['Meeting transcript', 'Attendee list', 'Previous action items', 'Strategic plan priorities']
      }
    ],
    levels: [
      {
        level: 1,
        name: 'Basic Prompt',
        description: 'Simple, conversational request typed directly into an AI chat',
        promptStructure: 'Unstructured, natural language question or request',
        kccExample: 'What tasks came from our board meeting about foster expansion?',
        outputQuality: 'Variable, may miss KCC context or forget to assign to specific people',
        timeInvestment: 'Seconds to write, but Susan might need multiple attempts',
        bestFor: 'Quick questions, brainstorming',
        kccUseCases: ['Quick task summaries', 'Meeting highlights', 'Initial brainstorming'],
        workflowVisual: 'Susan → Types prompt → AI → Response → Susan copies/edits/uses',
        prompt: 'What tasks came from our board meeting about foster expansion?',
        output: `Here are the tasks from your board meeting:
- Expand foster network
- Address volunteer training
- Look into neighboring counties
- Follow up on action items`,
        explanation: 'This basic prompt gets you started but lacks specificity. The AI doesn\'t know who should do what or by when, requiring Susan to fill in many details manually.'
      },
      {
        level: 2,
        name: 'Structured Format',
        description: 'Prompts following a specific framework that includes all necessary context',
        promptStructure: 'Context, Role, Action, Format, Tone',
        kccExample: 'Context: KCC board meeting notes. Role: Executive Assistant. Action: Create task list. Format: Assignee, task, deadline. Tone: Professional.',
        outputQuality: 'Consistent, includes assignments and deadlines',
        timeInvestment: '1-2 minutes to structure, reliable results',
        bestFor: 'Regular meeting processing, task delegation',
        kccUseCases: ['Monthly board meetings', 'Committee reports', 'Strategic planning sessions'],
        workflowVisual: 'Susan → Fills CRAFT template → AI → Formatted response → Team can reuse template',
        prompt: `Context: KCC just completed our monthly board meeting discussing foster network expansion to serve 100 more kittens annually. 9 board members attended including our veterinarian Dr. Smith and IT executive Tom Chen. We discussed volunteer training bottlenecks and expanding to Story and Benton counties.

Role: Executive Assistant to nonprofit Executive Director

Action: Create a comprehensive task list from the meeting with specific assignments and deadlines

Format: Table with columns for Task, Assignee, Deadline, Priority

Tone: Professional, action-oriented`,
        output: `# KCC Board Meeting Action Items - Foster Network Expansion

| Task | Assignee | Deadline | Priority |
|------|----------|----------|----------|
| Develop foster family training curriculum for 100 additional kittens | David Chen (Program Director) | March 15 | High |
| Create volunteer trainer recruitment plan to address bottlenecks | Jennifer Thompson (Volunteer Coordinator) | March 1 | High |
| Research Story County shelter partnerships | Maria Rodriguez (Development Manager) | March 10 | Medium |
| Research Benton County shelter partnerships | Maria Rodriguez | March 10 | Medium |
| IT infrastructure assessment for expanded operations | Tom Chen (Board IT Committee) | February 28 | High |
| Budget revision for foster expansion (supplies, medical) | Susan Martinez (ED) | March 5 | High |
| Veterinary capacity planning with Dr. Smith | David Chen | March 1 | High |
| Draft expansion announcement for donors | Maria Rodriguez | March 20 | Medium |
| Update strategic plan with expansion timeline | Susan Martinez | March 15 | Medium |`,
        explanation: 'The CRAFT structure ensures all context is provided, resulting in specific, actionable tasks with clear ownership and deadlines. This format can be saved and reused for future board meetings.',
        frameworks: [
          {
            framework: 'CRAFT',
            promptStructure: 'Context, Role, Action, Format, Tone',
            prompt: `Context: KCC just completed our monthly board meeting discussing foster network expansion to serve 100 more kittens annually. 9 board members attended including our veterinarian Dr. Smith and IT executive Tom Chen. We discussed volunteer training bottlenecks and expanding to Story and Benton counties.

Role: Executive Assistant to nonprofit Executive Director

Action: Create a comprehensive task list from the meeting with specific assignments and deadlines

Format: Table with columns for Task, Assignee, Deadline, Priority

Tone: Professional, action-oriented`,
            output: `# KCC Board Meeting Action Items - Foster Network Expansion

| Task | Assignee | Deadline | Priority |
|------|----------|----------|----------|
| Develop foster family training curriculum for 100 additional kittens | David Chen (Program Director) | March 15 | High |
| Create volunteer trainer recruitment plan to address bottlenecks | Jennifer Thompson (Volunteer Coordinator) | March 1 | High |
| Research Story County shelter partnerships | Maria Rodriguez (Development Manager) | March 10 | Medium |
| Research Benton County shelter partnerships | Maria Rodriguez | March 10 | Medium |
| IT infrastructure assessment for expanded operations | Tom Chen (Board IT Committee) | February 28 | High |
| Budget revision for foster expansion (supplies, medical) | Susan Martinez (ED) | March 5 | High |
| Veterinary capacity planning with Dr. Smith | David Chen | March 1 | High |
| Draft expansion announcement for donors | Maria Rodriguez | March 20 | Medium |
| Update strategic plan with expansion timeline | Susan Martinez | March 15 | Medium |`,
            explanation: 'CRAFT provides a systematic approach ensuring all necessary context is included, resulting in comprehensive and actionable outputs.'
          },
          {
            framework: 'PCTF',
            promptStructure: 'Persona, Context, Task, Format',
            prompt: `Persona: You are an experienced nonprofit executive assistant who specializes in meeting management and task delegation for animal welfare organizations.

Context: KCC's monthly board meeting just concluded with 9 members present including veterinarian Dr. Smith and IT executive Tom Chen. The primary focus was expanding foster capacity to serve 100 additional kittens annually. Key challenges discussed: volunteer training bottlenecks creating 3-month delays and strategic expansion into Story and Benton counties. Organization background: KCC serves 400+ kittens annually with 25 staff members and 200+ volunteers, operating on a $480K annual budget.

Task: Extract and organize all action items from this board meeting into a comprehensive task assignment matrix with specific deadlines and clear accountability.

Format: Professional task management table with columns for Task Description, Responsible Person, Completion Deadline, and Priority Level (High/Medium/Low). Include a separate section for success metrics and next review date.`,
            output: `# KCC Foster Network Expansion - Action Items Matrix

## Meeting Date: [Current Date] | Next Review: March 25

| Task Description | Responsible Person | Deadline | Priority |
|------------------|-------------------|----------|----------|
| Design comprehensive training curriculum for 100 additional foster families | David Chen (Program Director) | March 15 | High |
| Develop volunteer trainer recruitment strategy to eliminate 3-month wait | Jennifer Thompson (Volunteer Coordinator) | March 1 | High |
| Initiate partnership discussions with Story County Animal Services | Maria Rodriguez (Development Manager) | March 10 | Medium |
| Establish partnership framework with Benton County Humane Society | Maria Rodriguez (Development Manager) | March 10 | Medium |
| Complete IT infrastructure assessment for expanded operations | Tom Chen (Board IT Committee) | February 28 | High |
| Revise annual budget to include foster expansion costs (supplies, medical) | Susan Martinez (Executive Director) | March 5 | High |
| Collaborate with Dr. Smith on veterinary capacity planning | David Chen (Program Director) | March 1 | High |
| Create donor communication strategy for expansion announcement | Maria Rodriguez (Development Manager) | March 20 | Medium |
| Update organizational strategic plan with expansion milestones | Susan Martinez (Executive Director) | March 15 | Medium |

## Success Metrics
- Target: 100 additional foster families by September
- Budget impact: Reviewed by March 5
- County expansion: Partnerships established by March 10`,
            explanation: 'PCTF starts by defining the AI persona, which sets the expertise level and perspective, leading to more specialized and contextually appropriate responses.'
          }
        ]
      },
      {
        level: 3,
        name: 'Packaged Tool (Claude Project)',
        description: 'Pre-configured AI assistant with KCC\'s mission, voice, and board meeting templates saved',
        promptStructure: 'Pre-loaded context + variable inputs',
        kccExample: 'KCC Meeting Assistant with board profiles, committee structures, and standard workflows',
        outputQuality: 'Maintains consistency, knows board members and their roles',
        timeInvestment: '30-60 minutes initial setup, then seconds per use',
        bestFor: 'All board and committee meetings',
        kccUseCases: ['Board meetings', 'Committee meetings', 'Strategic planning', 'Annual reviews'],
        workflowVisual: 'Susan → Opens "Meeting Assistant" → Inputs this month\'s topics → AI (with KCC context) → Complete action plan',
        prompt: 'Foster expansion discussion - need to serve 100 more kittens, training bottlenecks, expand to Story and Benton counties',
        output: `# KCC Board Meeting Action Plan - February 2024
## Foster Network Expansion Initiative

### Immediate Actions (By March 1)
**David Chen - Program Director**
- [ ] Meet with Dr. Smith to assess veterinary capacity for +100 kittens
- [ ] Calculate supply needs per kitten ($X for initial kit, $Y monthly)
- [ ] Review current foster family satisfaction scores

**Jennifer Thompson - Volunteer Coordinator**  
- [ ] Analyze training bottleneck data (currently 3-month wait)
- [ ] Identify 3-5 potential volunteer trainers from current foster families
- [ ] Draft volunteer trainer role description and compensation

### Short-term Actions (By March 15)
**Maria Rodriguez - Development Manager**
- [ ] Contact Story County Animal Services (Director: Jane Doe)
- [ ] Contact Benton County Humane Society (Director: John Smith)
- [ ] Research grant opportunities for expansion (Community Foundation deadline: April 1)

**Board Committees**
- [ ] Finance Committee: Review budget impact with Alex Patel
- [ ] IT Committee (Tom Chen): Technology needs assessment
- [ ] Governance Committee: Policy updates for multi-county operations

### Follow-up Items
- Next board meeting (March 25): Progress review
- Foster family town hall to announce expansion (April date TBD)
- Donor update in spring newsletter highlighting expansion impact`,
        explanation: 'The pre-configured tool knows all board members, their roles, KCC\'s procedures, and standard timelines. It automatically creates comprehensive action plans that align with KCC\'s operational rhythm.'
      },
      {
        level: 4,
        name: 'Automated Workflow',
        description: 'AI that runs automatically when board meeting ends, creating tasks across all systems',
        promptStructure: 'Trigger → AI Processing → Automated Actions',
        kccExample: 'When meeting ends in Google Calendar → AI processes notes → Creates Asana tasks, sends emails',
        outputQuality: 'Consistent, immediate, integrated across all KCC systems',
        timeInvestment: '2-4 hours initial setup, then runs automatically forever',
        bestFor: 'Recurring meetings, standard workflows',
        kccUseCases: ['Board meetings', 'Staff meetings', 'Committee meetings', 'Planning sessions'],
        workflowVisual: 'Meeting ends → Google Calendar → Zapier → AI processes notes → Asana tasks created → Follow-up emails sent → Susan notified',
        prompt: '[Automated trigger from calendar event ending]',
        output: `## Automated Actions Completed ✓

### Asana Tasks Created:
- ✓ Project: "Foster Network Expansion 2024" created
- ✓ 12 tasks assigned across 6 team members
- ✓ Milestones set for March 1, March 15, April 1
- ✓ Board review task scheduled for March 25

### Emails Sent:
- ✓ David Chen: Veterinary capacity planning assignment with Dr. Smith's contact
- ✓ Jennifer Thompson: Training bottleneck analysis request with data dashboard link  
- ✓ Maria Rodriguez: County partnership outreach templates attached
- ✓ All Board Members: Meeting summary and action items

### Calendar Updates:
- ✓ Follow-up meetings scheduled with each assignee
- ✓ March 25 board meeting agenda item added
- ✓ Deadline reminders set for all tasks

### Documents Created:
- ✓ Meeting summary in shared drive
- ✓ Action tracker spreadsheet updated
- ✓ Budget impact template started for finance committee

### Slack Notifications:
- ✓ #board-updates channel: Meeting summary posted
- ✓ #foster-program channel: Expansion initiative announced
- ✓ Direct messages: Sent to all task assignees`,
        explanation: 'Full automation eliminates manual task creation and follow-up. The system knows KCC\'s tools (Asana, Google Workspace, Slack) and creates everything needed for successful execution, saving Susan 2-3 hours per meeting.'
      }
    ]
  },
  {
    scenario: {
      id: 'donor-thank-you',
      title: 'Donor Thank-you\'s',
      description: 'Create personalized thank you messages for Kitten 5K fundraiser donors',
      context: 'Thank you messages for KCC\'s Kitten 5K fundraiser that raised $48,000',
      materialsAvailable: [
        'Donor information (Mrs. Johnson, $500 donation, 3-year supporter)',
        'Gift history from DonorPerfect',
        'Impact stats (helped outfit 25 kittens this month with crocheted sweaters)',
        'Upcoming events (annual gala, holiday crochet sale)'
      ],
      icon: 'heart'
    },
    materialCombinations: [
      {
        id: 'basic-info',
        name: 'Basic Donor Info',
        description: 'Just name and donation amount',
        materials: ['Donor name and $500 donation amount']
      },
      {
        id: 'donor-history',
        name: 'Donor + History',
        description: 'Current donation plus giving history',
        materials: ['$500 donation', '3-year supporter history', 'Previous gifts']
      },
      {
        id: 'full-personalization',
        name: 'Full Personalization',
        description: 'All donor data plus impact stats and events',
        materials: ['Donor information', 'Gift history', 'Impact stats', 'Upcoming events']
      }
    ],
    levels: [
      {
        level: 1,
        name: 'Basic Prompt',
        description: 'Simple request for a thank you note',
        promptStructure: 'Unstructured, natural language',
        kccExample: 'Write a thank you note for a $500 Kitten 5K donation',
        outputQuality: 'Generic, may not capture KCC\'s warm tone',
        timeInvestment: 'Quick to write, but requires heavy editing',
        bestFor: 'One-off communications',
        kccUseCases: ['Quick acknowledgments', 'Email drafts', 'Social media thanks'],
        workflowVisual: 'Maria → Types prompt → AI → Generic response → Maria personalizes',
        prompt: 'Write a thank you note for a $500 Kitten 5K donation',
        output: `Dear Donor,

Thank you for your generous $500 donation to our Kitten 5K fundraiser. Your support helps us continue our mission of helping kittens in need.

We appreciate your contribution and hope you'll continue to support our cause.

Sincerely,
The Team`,
        explanation: 'This basic prompt produces a generic thank you that lacks personalization, KCC\'s mission specifics, and the warm tone that builds donor relationships.'
      },
      {
        level: 2,
        name: 'Structured Format',
        description: 'Detailed prompt with donor context and KCC voice',
        promptStructure: 'Context, Role, Action, Format, Tone',
        kccExample: 'Full donor context with KCC\'s compassionate voice',
        outputQuality: 'Personalized, mission-focused, consistent tone',
        timeInvestment: '2 minutes to structure, minimal editing needed',
        bestFor: 'Major donor communications',
        kccUseCases: ['Thank you letters', 'Impact reports', 'Pledge acknowledgments'],
        workflowVisual: 'Maria → CRAFT template → AI → Polished letter → Send to donor',
        prompt: `Context: Mrs. Eleanor Johnson just donated $500 to KCC's Kitten 5K fundraiser. She's been supporting us for 3 years, previously giving $250 annually. Her donations have helped outfit 25 kittens with hand-crocheted sweaters this month alone. We have our annual gala in November and holiday crochet sale in December.

Role: Maria Rodriguez, Development Manager at the Kitty Crochet Collective

Action: Write a warm, personal thank you letter that acknowledges her growing support and shows specific impact

Format: Professional letter format with personal touches

Tone: Warm, grateful, family-like (KCC's culture), specific about impact`,
        output: `Dear Mrs. Johnson,

What a joy it was to see your name among our Kitten 5K supporters! Your generous $500 gift brought the biggest smiles to our faces here at the Kitty Crochet Collective.

Over the past three years, you've become part of our KCC family, and we've watched your support grow right alongside our mission. This year, your increased gift couldn't have come at a better time - kitten season is approaching, and we're preparing to help more little ones than ever before.

Your donation has already made a tangible difference. This month alone, we've been able to outfit 25 kittens with hand-crocheted sweaters, each one lovingly made by our volunteer knitting clubs. Just yesterday, a tiny tabby named Whiskers went to his forever home wearing a blue sweater that your support helped provide. His new family couldn't stop talking about how adorable he looked!

As we gear up for our busiest season, I wanted to make sure you know about two special events where we'd love to see you: our annual gala on November 15th (save the date!) and our holiday crochet sale in December, where you can meet some of the kittens you've helped.

Thank you for believing in our mission to give every kitten the best chance at finding their forever home. Your compassion makes all the difference.

With warm gratitude,

Maria Rodriguez
Development Manager
Kitty Crochet Collective

P.S. I've attached a photo of Whiskers in his new sweater - prepare for cuteness overload!`,
        explanation: 'The CRAFT structure ensures personalization, specific impact reporting, and KCC\'s warm tone. This approach builds stronger donor relationships and encourages continued giving.',
        frameworks: [
          {
            framework: 'CRAFT',
            promptStructure: 'Context, Role, Action, Format, Tone',
            prompt: `Context: Mrs. Eleanor Johnson just donated $500 to KCC's Kitten 5K fundraiser. She's been supporting us for 3 years, previously giving $250 annually. Her donations have helped outfit 25 kittens with hand-crocheted sweaters this month alone. We have our annual gala in November and holiday crochet sale in December.

Role: Maria Rodriguez, Development Manager at the Kitty Crochet Collective

Action: Write a warm, personal thank you letter that acknowledges her growing support and shows specific impact

Format: Professional letter format with personal touches

Tone: Warm, grateful, family-like (KCC's culture), specific about impact`,
            output: `Dear Mrs. Johnson,

What a joy it was to see your name among our Kitten 5K supporters! Your generous $500 gift brought the biggest smiles to our faces here at the Kitty Crochet Collective.

Over the past three years, you've become part of our KCC family, and we've watched your support grow right alongside our mission. This year, your increased gift couldn't have come at a better time - kitten season is approaching, and we're preparing to help more little ones than ever before.

Your donation has already made a tangible difference. This month alone, we've been able to outfit 25 kittens with hand-crocheted sweaters, each one lovingly made by our volunteer knitting clubs. Just yesterday, a tiny tabby named Whiskers went to his forever home wearing a blue sweater that your support helped provide. His new family couldn't stop talking about how adorable he looked!

As we gear up for our busiest season, I wanted to make sure you know about two special events where we'd love to see you: our annual gala on November 15th (save the date!) and our holiday crochet sale in December, where you can meet some of the kittens you've helped.

Thank you for believing in our mission to give every kitten the best chance at finding their forever home. Your compassion makes all the difference.

With warm gratitude,

Maria Rodriguez
Development Manager
Kitty Crochet Collective

P.S. I've attached a photo of Whiskers in his new sweater - prepare for cuteness overload!`,
            explanation: 'CRAFT ensures systematic inclusion of all context elements, resulting in comprehensive donor communications that build relationships.'
          },
          {
            framework: 'PCTF',
            promptStructure: 'Persona, Context, Task, Format',
            prompt: `Persona: You are a skilled nonprofit development professional who specializes in donor stewardship and relationship building, with deep understanding of animal welfare fundraising and the importance of showing concrete impact to sustain giving.

Context: Mrs. Eleanor Johnson just made a $500 donation to KCC's Kitten 5K fundraiser, doubling her previous annual gift of $250. She's been a loyal supporter for 3 years. KCC is a nonprofit that partners with knitting clubs to create crocheted accessories for shelter kittens, increasing adoption rates by 65%. This month, 25 kittens received sweaters thanks to donors like her. KCC has upcoming events (November gala, December sale) and wants to maintain this donor's growing investment in the mission.

Task: Compose a heartfelt thank you letter that acknowledges the donor's loyalty, demonstrates specific impact, and deepens their emotional connection to the mission while positioning them for continued engagement.

Format: Warm, personal letter that feels handwritten rather than templated. Include: specific impact story, acknowledgment of giving growth, upcoming engagement opportunities, and a compelling P.S. Keep under 300 words but feel substantive and personal.`,
            output: `Dear Mrs. Johnson,

Your $500 Kitten 5K gift just transformed a tiny life, and I had to share the story with you personally.

Three years ago, when you first joined our mission with your $250 gift, you probably didn't imagine that your growing support would help create moments like this: Yesterday, Buttercup - a shy orange kitten who'd been overlooked for weeks - walked into her forever home wearing a sunny yellow crocheted vest. Her new family said the vest made her "irresistible" and sealed their decision to adopt.

That's the magic you're creating, Mrs. Johnson. Your doubled gift this year reflects a heart that truly understands what we're doing together. Those 25 kittens sporting new sweaters this month? Each one represents hope, visibility, and a second chance - all made possible by supporters like you who believe in our unique approach.

As someone who's been with us through three kitten seasons, you've seen how far a small organization can reach when the community rallies around a creative idea. Your trust in our work means everything, especially as we prepare for our busiest months ahead.

I'd love to celebrate your generosity in person at our November 15th gala or December's holiday sale, where you can meet the kittens your kindness has touched. Until then, please know that your investment in our mission creates ripples of joy that extend far beyond what we can measure.

With deepest appreciation,

Maria Rodriguez
Development Manager
Kitty Crochet Collective

P.S. Buttercup's adoption photo is enclosed - your support made that smile possible.`,
            explanation: 'PCTF leverages the development professional persona to create more strategic, emotionally resonant communications that feel personal and relationship-focused.'
          }
        ]
      },
      {
        level: 3,
        name: 'Packaged Tool (GPT)',
        description: 'Pre-configured "KCC Donor Communications" GPT with templates and donor segments',
        promptStructure: 'Saved context + quick inputs',
        kccExample: 'Input donation details, get professionally formatted draft thank you',
        outputQuality: 'Consistent brand voice, appropriate for giving level',
        timeInvestment: '45 minutes setup, then 30 seconds per letter',
        bestFor: 'All donor communications',
        kccUseCases: ['Thank you letters', 'Pledge reminders', 'Event invitations', 'Impact updates'],
        workflowVisual: 'Maria → Opens GPT → Enters: "$500, Mrs. Johnson, 3 years" → Draft ready for review',
        prompt: 'Mrs. Johnson, $500, Kitten 5K, 3-year donor, previous gifts $250',
        output: `Dear Mrs. Johnson,

Your $500 Kitten 5K donation just made our day brighter than a room full of playful kittens!

We've been counting you as part of our KCC family for three wonderful years now, and your increased support this year truly touches our hearts. Your journey from $250 to $500 shows such deep commitment to our fuzzy friends.

Here's what your generosity means in real "kitten terms":
• 25 custom-crocheted sweaters keeping kittens cozy
• 2 months of medical care for a special needs kitten
• 100 meals for kittens in our foster network
• Countless second chances at finding forever homes

We're already seeing the impact. Last week, three kittens - Mittens, Socks, and Boots (yes, we had a shoe theme going!) - all found homes while sporting their adorable crocheted accessories. Their adoption photos have been spreading joy across our social media, and it's supporters like you who make these happy endings possible.

Looking ahead, we'd love to keep you connected to the difference you're making:
📅 Annual Gala - November 15th (you're on our VIP list!)
🎄 Holiday Crochet Sale - December 7-8
📱 Follow our Instagram @KittyCrochetCollective for daily kitten joy

With heartfelt appreciation from all of us (and every kitten),

Maria Rodriguez
Development Manager

P.S. Watch your mail - we're sending a special hand-crocheted kitten ornament as a small token of our gratitude!`,
        explanation: 'The GPT knows KCC\'s donor levels, appropriate asks, upcoming events, and impact metrics. It automatically adjusts tone and content based on giving history, creating high-quality draft communications ready for staff review.'
      },
      {
        level: 4,
        name: 'Automated Workflow',
        description: 'Fully automated donor acknowledgment system triggered by DonorPerfect',
        promptStructure: 'Database trigger → AI personalization → Multi-channel delivery',
        kccExample: 'Donation recorded → AI creates draft → Email saved to Drafts → Maria notified to review',
        outputQuality: 'Instant, personalized, never misses a donor',
        timeInvestment: '3-4 hours setup, saves 15 hours monthly',
        bestFor: 'All donation processing',
        kccUseCases: ['Instant acknowledgments', 'Tax receipts', 'Follow-up scheduling', 'Donor journey automation'],
        workflowVisual: 'Donation → DonorPerfect → Zapier → AI creates draft → Email saved to Drafts → Notification sent → Maria reviews and sends',
        prompt: '[Automated trigger: New $500 donation from Eleanor Johnson recorded in DonorPerfect]',
        output: `## Automated Donor Acknowledgment Completed ✓

### Immediate Actions Taken:
✓ **Draft Email Created** (3:47 PM - 6 minutes after donation)
- Personalized thank you to ejohnson@email.com saved to Maria's Drafts
- Included: Tax receipt, impact summary, upcoming events
- Ready for Maria's review and sending

✓ **Notifications Sent:**
- Maria Rodriguez: "New donation alert - Draft thank you ready for review"
- Susan Martinez: "High-value donor notification ($500+)"
- Finance: "Tax receipt processed and logged"

✓ **CRM Updates (DonorPerfect):**
- Donor level upgraded: "Kitten Champion" (annual $500+)
- Engagement score increased to 85/100
- Last gift date and amount updated
- Communication preferences confirmed

✓ **Task Creation (Asana):**
- "Send handwritten note - Mrs. Johnson" → Maria (Due: 3 days)
- "Add to gala VIP list" → Events team (Due: 1 week)
- "Schedule Q2 impact call" → Maria (Due: April 15)

✓ **Automated Sequences Triggered:**
- 48-hour: Social media thank you (if permitted)
- 1 week: Impact story email
- 1 month: "Kitten you helped" photo update
- 2 months: Gala save-the-date

### Performance Metrics:
- Time to acknowledgment: 6 minutes ⚡
- Personalization score: 94% (name, history, specific impact)
- Previous manual process time: 45 minutes
- Monthly time saved: ~15 hours

### Next Manual Touch:
Maria reviews draft in 24 hours, sends after approval, then handwritten note (template and talking points prepared in Asana task)`,
        explanation: 'Complete automation ensures every donor gets a personalized draft response within minutes. The system handles tax receipts, creates follow-up tasks, and prepares draft communications for staff review, transforming donor relations while maintaining quality control.'
      }
    ]
  },
  {
    scenario: {
      id: 'volunteer-recruitment',
      title: 'Volunteer Recruitment',
      description: 'Recruit and onboard volunteers for peak kitten season when KCC needs 150+ seasonal volunteers',
      context: 'Recruiting volunteers for peak kitten season (April-October) when KCC needs 150+ seasonal volunteers',
      materialsAvailable: [
        'Current volunteer needs (photographers, crocheters, foster support, adoption counselors)',
        'Role descriptions and time commitments',
        'Testimonials from current volunteers',
        'Training schedule and orientation dates',
        'Note about 50+ people on waiting list'
      ],
      icon: 'users'
    },
    materialCombinations: [
      {
        id: 'basic-needs',
        name: 'Basic Volunteer Needs',
        description: 'Just the list of roles needed',
        materials: ['Volunteer roles needed']
      },
      {
        id: 'needs-plus-details',
        name: 'Needs + Role Details',
        description: 'Roles with descriptions and time commitments',
        materials: ['Volunteer roles', 'Role descriptions', 'Time commitments']
      },
      {
        id: 'complete-package',
        name: 'Full Recruitment Package',
        description: 'Everything including testimonials and training info',
        materials: ['All volunteer needs', 'Role descriptions', 'Testimonials', 'Training schedule', 'Waiting list info']
      }
    ],
    levels: [
      {
        level: 1,
        name: 'Basic Prompt',
        description: 'Simple request for volunteer recruitment email',
        promptStructure: 'Unstructured request',
        kccExample: 'Help me write an email to recruit kitten season volunteers',
        outputQuality: 'Generic, may miss KCC\'s specific needs and culture',
        timeInvestment: 'Quick but requires significant editing',
        bestFor: 'Initial drafts, brainstorming',
        kccUseCases: ['Quick social posts', 'Initial outreach ideas', 'Brainstorming messages'],
        workflowVisual: 'Jennifer → Types prompt → AI → Generic email → Jennifer rewrites',
        prompt: 'Help me write an email to recruit kitten season volunteers',
        output: `Subject: Volunteers Needed!

Hello,

We're looking for volunteers to help during kitten season. We need people who love cats and want to make a difference.

Available positions include:
- Foster families
- Adoption helpers
- General volunteers

If you're interested, please contact us.

Thank you,
The Team`,
        explanation: 'This basic prompt produces a generic recruitment message that lacks specificity about KCC\'s unique volunteer opportunities, culture, and the rewarding experience volunteers can expect.'
      },
      {
        level: 2,
        name: 'Structured Format (PCTF)',
        description: 'Organized prompt with specific KCC context',
        promptStructure: 'Purpose, Context, Task, Format',
        kccExample: 'Detailed volunteer needs with KCC\'s family-like culture emphasized',
        outputQuality: 'Engaging, specific, action-oriented',
        timeInvestment: '2-3 minutes to structure, ready to send',
        bestFor: 'Email campaigns, website posts',
        kccUseCases: ['Newsletter features', 'Website recruitment pages', 'Social media campaigns'],
        workflowVisual: 'Jennifer → PCTF template → AI → Engaging email → Send to list',
        prompt: `Purpose: Recruit 150+ volunteers for kitten season at the Kitty Crochet Collective

Context: KCC needs volunteers April-October for peak kitten season. We specifically need photographers to capture kittens in crocheted outfits, crocheters to create sweaters, foster support volunteers to help our 30 foster families, and adoption counselors. We have a warm, family-like culture. Current volunteers rave about the experience. We already have 50+ people on a waiting list. Training happens every Saturday in March.

Task: Write an engaging recruitment email that showcases our unique mission and the joy of volunteering with kittens

Format: Email with subject line, compelling hook, specific opportunities, and clear call-to-action`,
        output: `Subject: 🐱 Join Our Kitten Season Squad - 150 Heroes Needed!

Dear Animal Lover,

Picture this: a tiny tabby kitten wearing a hand-crocheted rainbow sweater, purring contentedly as they meet their forever family. This magical moment? You could help make it happen.

The Kitty Crochet Collective is gearing up for our busiest season, and we need YOUR help to ensure every at-risk kitten gets their chance at a loving home. From April through October, over 400 kittens will come through our doors, each needing our special brand of care and cuteness enhancement.

**We're recruiting for these rewarding roles:**

📸 **Kitten Photographers** (2-4 hours/week)
Capture the adorable moments as kittens model their crocheted creations. Your photos directly increase adoption rates by 65%!

🧶 **Crochet Volunteers** (Work from home at your own pace)
Join our 12 partner knitting clubs in creating the tiny sweaters and hats that make our kittens irresistible. Patterns and yarn provided!

🏠 **Foster Support Volunteers** (4-6 hours/week)
Help our 30 foster families with supply runs, vet appointments, and kitten socialization. Be the village that raises the kittens!

💕 **Adoption Counselors** (One 4-hour shift/week)
Match kittens with their perfect families during our weekend adoption events. Training provided - just bring your love for happy endings!

**What our current volunteers say:**
"I joined to help kittens but found a whole community. The joy on families' faces when they adopt makes every minute worth it!" - Sarah, 2-year volunteer

**Ready to make a difference?**
- March Training Sessions: Every Saturday at 10 AM
- Already have 50+ people excited to join - don't miss out!
- Sign up at: www.kittycrochet.org/volunteer

Join our KCC family and help us prove that every kitten deserves a chance to shine!

Warm regards,

Jennifer Thompson
Volunteer Coordinator
Kitty Crochet Collective

P.S. Can't commit to regular hours? We also need event-day helpers for our Kitten 5K and holiday sale!`,
        explanation: 'The structured format ensures all key information is included while maintaining KCC\'s warm, inviting tone. This approach creates excitement about volunteering and provides clear next steps.',
        frameworks: [
          {
            framework: 'CRAFT',
            promptStructure: 'Context, Role, Action, Format, Tone',
            prompt: `Context: KCC needs 150+ volunteers for peak kitten season (April-October). We specifically need photographers to capture kittens in crocheted outfits, crocheters to create sweaters, foster support volunteers to help our 30 foster families, and adoption counselors. We have a warm, family-like culture that current volunteers rave about. Already have 50+ people on waiting list. Training happens every Saturday in March.

Role: Jennifer Thompson, Volunteer Coordinator at the Kitty Crochet Collective, responsible for recruiting and managing volunteers

Action: Create an engaging recruitment email that showcases specific volunteer opportunities and the joy of working with kittens

Format: Professional email with subject line, compelling introduction, detailed role descriptions, testimonial, and clear call-to-action

Tone: Warm, enthusiastic, inviting - emphasizing community and impact while being professional`,
            output: `Subject: 🐱 Join Our Kitten Season Squad - 150 Heroes Needed!

Dear Animal Lover,

Picture this: a tiny tabby kitten wearing a hand-crocheted rainbow sweater, purring contentedly as they meet their forever family. This magical moment? You could help make it happen.

The Kitty Crochet Collective is gearing up for our busiest season, and we need YOUR help to ensure every at-risk kitten gets their chance at a loving home. From April through October, over 400 kittens will come through our doors, each needing our special brand of care and cuteness enhancement.

**We're recruiting for these rewarding roles:**

📸 **Kitten Photographers** (2-4 hours/week)
Capture the adorable moments as kittens model their crocheted creations. Your photos directly increase adoption rates by 65%!

🧶 **Crochet Volunteers** (Work from home at your own pace)
Join our 12 partner knitting clubs in creating the tiny sweaters and hats that make our kittens irresistible. Patterns and yarn provided!

🏠 **Foster Support Volunteers** (4-6 hours/week)
Help our 30 foster families with supply runs, vet appointments, and kitten socialization. Be the village that raises the kittens!

💕 **Adoption Counselors** (One 4-hour shift/week)
Match kittens with their perfect families during our weekend adoption events. Training provided - just bring your love for happy endings!

**What our current volunteers say:**
"I joined to help kittens but found a whole community. The joy on families' faces when they adopt makes every minute worth it!" - Sarah, 2-year volunteer

**Ready to make a difference?**
- March Training Sessions: Every Saturday at 10 AM
- Already have 50+ people excited to join - don't miss out!
- Sign up at: www.kittycrochet.org/volunteer

Join our KCC family and help us prove that every kitten deserves a chance to shine!

Warm regards,

Jennifer Thompson
Volunteer Coordinator
Kitty Crochet Collective

P.S. Can't commit to regular hours? We also need event-day helpers for our Kitten 5K and holiday sale!`,
            explanation: 'CRAFT framework ensures systematic coverage of all recruitment elements while maintaining KCC\'s welcoming culture and clear volunteer expectations.'
          },
          {
            framework: 'PCTF',
            promptStructure: 'Purpose, Context, Task, Format',
            prompt: `Purpose: Recruit 150+ volunteers for kitten season at the Kitty Crochet Collective

Context: KCC needs volunteers April-October for peak kitten season. We specifically need photographers to capture kittens in crocheted outfits, crocheters to create sweaters, foster support volunteers to help our 30 foster families, and adoption counselors. We have a warm, family-like culture. Current volunteers rave about the experience. We already have 50+ people on a waiting list. Training happens every Saturday in March.

Task: Write an engaging recruitment email that showcases our unique mission and the joy of volunteering with kittens

Format: Email with subject line, compelling hook, specific opportunities, and clear call-to-action`,
            output: `Subject: 🐱 Join Our Kitten Season Squad - 150 Heroes Needed!

Dear Animal Lover,

Picture this: a tiny tabby kitten wearing a hand-crocheted rainbow sweater, purring contentedly as they meet their forever family. This magical moment? You could help make it happen.

The Kitty Crochet Collective is gearing up for our busiest season, and we need YOUR help to ensure every at-risk kitten gets their chance at a loving home. From April through October, over 400 kittens will come through our doors, each needing our special brand of care and cuteness enhancement.

**We're recruiting for these rewarding roles:**

📸 **Kitten Photographers** (2-4 hours/week)
Capture the adorable moments as kittens model their crocheted creations. Your photos directly increase adoption rates by 65%!

🧶 **Crochet Volunteers** (Work from home at your own pace)
Join our 12 partner knitting clubs in creating the tiny sweaters and hats that make our kittens irresistible. Patterns and yarn provided!

🏠 **Foster Support Volunteers** (4-6 hours/week)
Help our 30 foster families with supply runs, vet appointments, and kitten socialization. Be the village that raises the kittens!

💕 **Adoption Counselors** (One 4-hour shift/week)
Match kittens with their perfect families during our weekend adoption events. Training provided - just bring your love for happy endings!

**What our current volunteers say:**
"I joined to help kittens but found a whole community. The joy on families' faces when they adopt makes every minute worth it!" - Sarah, 2-year volunteer

**Ready to make a difference?**
- March Training Sessions: Every Saturday at 10 AM
- Already have 50+ people excited to join - don't miss out!
- Sign up at: www.kittycrochet.org/volunteer

Join our KCC family and help us prove that every kitten deserves a chance to shine!

Warm regards,

Jennifer Thompson
Volunteer Coordinator
Kitty Crochet Collective

P.S. Can't commit to regular hours? We also need event-day helpers for our Kitten 5K and holiday sale!`,
            explanation: 'PCTF structure focuses on clear purpose and task definition, creating compelling recruitment messages that convert interest into action.'
          }
        ]
      },
      {
        level: 3,
        name: 'Packaged Tool (Gemini Gem)',
        description: '"KCC Volunteer Recruiter" with saved templates for different roles',
        promptStructure: 'Pre-loaded templates + role selection',
        kccExample: 'Select role type, get targeted recruitment message',
        outputQuality: 'Role-specific, professionally branded',
        timeInvestment: '1 hour setup, then instant generation',
        bestFor: 'Targeted recruitment by role',
        kccUseCases: ['Role-specific campaigns', 'Social media recruitment', 'Community board postings'],
        workflowVisual: 'Jennifer → Selects "Photographer role" → Gem generates → Post to photography groups',
        prompt: 'Need photographers for kitten season, emphasize Instagram-worthy shots and portfolio building',
        output: `📸 Calling All Photographers: Create Magic with Kittens in Crochet! 

Are you looking to build a heartwarming portfolio while making a real difference? The Kitty Crochet Collective needs photographers to capture our adorable kittens in their handmade sweaters!

**Why photographers love volunteering with KCC:**
✨ Build a unique portfolio with the internet's favorite subject
📱 Your photos go viral on our social media (2.8K+ followers)
🎯 See direct impact: our photos increase adoption rates by 65%
🤝 Join a community of creative, compassionate people
📅 Flexible scheduling: 2-4 hours per week on YOUR schedule

**What you'll photograph:**
- Kittens modeling hand-crocheted sweaters and accessories
- Adoption day "glamour shots" for our website
- Behind-the-scenes moments of our volunteers in action  
- Special events like our Kitten 5K and adoption fairs

**We provide:**
- Access to the cutest models in Cedar Rapids
- A variety of colorful, handmade props
- Social media credit for all photos used
- Letter of recommendation for dedicated volunteers
- All the kitten cuddles you can handle

**Perfect for:**
- Photography students building portfolios
- Hobbyists who love animals
- Anyone wanting to use their skills for good

**Laura, volunteer photographer, says:**
"I came for the kitten photos, but stayed for the community. My 'kitten in a pumpkin sweater' shot got 10K likes and helped Pumpkin find her forever home within 24 hours!"

**Ready to join our picture-perfect team?**
📍 Orientation: March Saturdays, 10 AM
📧 Sign up: www.kittycrochet.org/photo-volunteer
📲 Questions? Text Jennifer at 319-555-0123

Don't miss this chance to combine your passion with purpose. Our 400+ annual kittens are waiting for their close-ups!

#CedarRapidsPhotography #VolunteerPhotographer #KittenPhotography #PortfolioBuilding`,
        explanation: 'The Gem creates role-specific messages that speak directly to photographers\' motivations. It knows to emphasize portfolio building, social media exposure, and creative fulfillment rather than generic volunteer benefits.'
      },
      {
        level: 4,
        name: 'Automated Workflow',
        description: 'Multi-channel recruitment campaign that runs automatically based on volunteer needs',
        promptStructure: 'Need trigger → AI creates content → Posts across all channels',
        kccExample: 'Low photographer count → AI creates targeted campaign → Posts to Instagram, Facebook, sends to photo clubs',
        outputQuality: 'Consistent messaging across all channels',
        timeInvestment: '4 hours setup, runs autonomously',
        bestFor: 'Ongoing recruitment needs',
        kccUseCases: ['Seasonal recruitment', 'Emergency volunteer needs', 'Targeted role filling'],
        workflowVisual: 'Volunteer database → Shows need → AI creates campaign → Posts everywhere → Applications flow in → Jennifer notified',
        prompt: '[Automated trigger: Photographer volunteers dropped below 5, need 10 for kitten season]',
        output: `## Automated Recruitment Campaign Launched ✓

### Campaign: Emergency Photographer Recruitment
**Trigger:** Active photographers dropped to 4 (need 10 minimum)
**Target:** Recruit 8 new photographers by March 15

### Content Created & Posted:

✓ **Instagram** (Posted 2:15 PM)
- Eye-catching reel: "Day in the Life of a KCC Photographer"
- Story series with volunteer testimonials
- Hashtags: #CedarRapidsPhotography #VolunteerPhotographer

✓ **Facebook** (Posted 2:18 PM)
- Main page: Detailed photographer role post
- Shared to: Cedar Rapids Photographers (2.3K members)
- Shared to: Iowa Animal Lovers (5.1K members)
- Shared to: CR Community Volunteers (1.8K members)

✓ **Email Campaign** (Sent 2:20 PM)
- Targeted list: 347 past event photographers
- Subject: "Your Photos Can Save Kitten Lives"
- Open rate: 42% (1 hour)

✓ **Community Boards** (Submitted 2:25 PM)
- Kirkwood Community College Photography Dept
- Cedar Rapids Library digital board
- Three local camera shops

✓ **Text Campaign** (Sent 2:30 PM)
- 52 opted-in volunteers: "Know any photographers?"
- Shareable link included

### Landing Page Updated:
- www.kittycrochet.org/photo-volunteer
- New testimonial video added
- March training dates highlighted
- "Urgent need" banner active

### Results Tracking:
**Hour 1:**
- 12 landing page visits
- 3 volunteer applications started
- 47 social shares
- 5 direct inquiries

### Automated Follow-ups Scheduled:
- 24 hours: Boost Facebook post if < 5 applications
- 48 hours: Send to local photography meetup groups
- 72 hours: Personal outreach list generated for Jennifer

### Jennifer's Dashboard Alert:
"Photography recruitment campaign active. 3 applications pending review. Recommend personal follow-up with Cedar Rapids Camera Club president (contact info in Asana)."`,
        explanation: 'Full automation monitors volunteer levels and launches targeted campaigns without human intervention. The system creates platform-specific content, tracks results, and escalates if goals aren\'t met, ensuring KCC never faces volunteer shortages.'
      }
    ]
  },
  {
    scenario: {
      id: 'workshop-planning',
      title: 'Workshop/Session Planning',
      description: 'Plan monthly community education workshop on responsible pet ownership and kitten care',
      context: 'Planning KCC\'s monthly community education workshop at Cedar Rapids Community Center',
      materialsAvailable: [
        'Workshop topic (responsible pet ownership and kitten care)',
        'Audience demographics (new pet owners, families considering adoption)',
        'Learning objectives (reduce shelter returns, promote spay/neuter)',
        'Available resources (KCC education room, volunteer expertise)',
        'Past workshop evaluations showing 200 monthly participants'
      ],
      icon: 'book-open'
    },
    materialCombinations: [
      {
        id: 'topic-only',
        name: 'Just the Topic',
        description: 'Basic workshop topic',
        materials: ['Workshop topic on kitten care']
      },
      {
        id: 'topic-audience',
        name: 'Topic + Audience Info',
        description: 'Topic with target audience details',
        materials: ['Workshop topic', 'Audience demographics', 'Learning objectives']
      },
      {
        id: 'comprehensive',
        name: 'Complete Workshop Package',
        description: 'All planning materials and past data',
        materials: ['Topic', 'Audience', 'Objectives', 'Resources', 'Past evaluations']
      }
    ],
    levels: [
      {
        level: 1,
        name: 'Basic Prompt',
        description: 'Simple request for workshop agenda',
        promptStructure: 'Casual question format',
        kccExample: 'Create an agenda for our kitten care workshop',
        outputQuality: 'Generic structure, misses KCC specifics',
        timeInvestment: 'Quick draft, needs heavy customization',
        bestFor: 'Initial brainstorming',
        kccUseCases: ['First draft ideas', 'Topic brainstorming', 'Quick outlines'],
        workflowVisual: 'Marcus → Types prompt → AI → Basic agenda → Marcus adds KCC content',
        prompt: 'Create an agenda for our kitten care workshop',
        output: `Kitten Care Workshop Agenda

1. Welcome and Introduction (10 minutes)
2. Basic Kitten Care (20 minutes)
3. Feeding Guidelines (15 minutes)
4. Health and Veterinary Care (20 minutes)
5. Litter Training (15 minutes)
6. Q&A Session (10 minutes)

Total Time: 90 minutes`,
        explanation: 'This basic prompt creates a standard agenda but misses KCC\'s unique perspective, interactive elements, and the connection to their crochet program and adoption services.'
      },
      {
        level: 2,
        name: 'Structured Format (PCTF)',
        description: 'Detailed prompt with workshop context',
        promptStructure: 'Purpose, Context, Task, Format',
        kccExample: 'Complete context including KCC mission and past success',
        outputQuality: 'Engaging, mission-aligned, interactive',
        timeInvestment: '3 minutes to structure, minor tweaks needed',
        bestFor: 'Monthly workshop planning',
        kccUseCases: ['Regular workshops', 'Special events', 'Partner presentations'],
        workflowVisual: 'Marcus → PCTF template → AI → Complete plan → Ready to implement',
        prompt: `Purpose: Create an engaging 90-minute workshop on kitten care that reduces shelter returns and promotes responsible pet ownership

Context: Monthly workshop at Cedar Rapids Community Center for 200 participants. Mix of new pet owners and families considering adoption. KCC's mission includes education to reduce shelter burden. We have volunteer experts, can showcase adoptable kittens, and want to highlight our crochet program. Past evaluations show people love hands-on activities.

Task: Design an interactive workshop agenda that educates while showcasing KCC's unique approach

Format: Detailed 90-minute agenda with timing, activities, materials needed, and volunteer assignments`,
        output: `# Kitten Care Basics: A KCC Community Workshop
**Duration:** 90 minutes | **Expected Attendance:** 200 participants

## Welcome & KCC Mission (10 minutes)
**Lead:** Susan Martinez, Executive Director
- Welcome and housekeeping
- KCC's story: From shelter crisis to crochet solution
- Today's goals: Confident care = Forever homes
- **Interactive:** Quick poll - "Who's thinking of adopting?"

## The First 30 Days: Setting Kittens Up for Success (20 minutes)
**Lead:** Dr. Sarah Chen (Volunteer Veterinarian)
- **Demo Station 1:** Kitten-proofing your home (volunteer demonstrates)
- **Demo Station 2:** Essential supplies on a budget
- **Hands-on:** Participants practice holding kittens correctly
- **KCC Touch:** Show how crocheted sweaters help with anxiety

## Nutrition & Growth (15 minutes)
**Lead:** David Chen, Program Director
- Age-appropriate feeding with live demonstration
- **Interactive:** Guess the kitten's age game
- Reading body language and hunger cues
- **Cost-saving tips:** Quality food within budget

## Health & Wellness (20 minutes)
**Lead:** Foster Family Panel (3 experienced families)
- Vaccination timeline (handout provided)
- **Red flags:** When to call the vet
- **Myth-busting:** Indoor vs. outdoor cats
- **KCC Success Story:** Medically fragile kitten thriving

## Litter Box Success & Behavior (15 minutes)
**Lead:** Marcus Williams, Education Specialist
- **Demo Station 3:** Litter box setup and placement
- Troubleshooting common issues
- **Play demonstration:** Appropriate toys and enrichment
- **Prevention focus:** Reducing returns to shelter

## Meet Your Match + Q&A (10 minutes)
**Lead:** Jennifer Thompson, Volunteer Coordinator
- Meet today's adoptable kittens (wearing their crochets!)
- Adoption process walkthrough
- Volunteer opportunities announced
- Q&A with all experts

## Materials Needed:
- 3 demo stations with supplies
- 10 calm kittens for handling practice
- Handouts: Supply checklist, vaccination schedule, KCC resources
- Name tags for 15 volunteers
- Photo booth with crochet props

## Volunteer Assignments:
- Station monitors (3)
- Kitten handlers (6)
- Registration table (2)
- Photography for social media (1)
- Refreshment table (2)
- Floater/questions (1)

## Success Metrics:
- Sign-ups for adoption appointments
- Volunteer applications submitted
- Newsletter subscriptions
- Post-workshop survey completion`,
        explanation: 'The structured prompt creates an engaging, KCC-specific workshop that balances education with hands-on experience, showcases adoptable kittens, and connects to KCC\'s unique mission.',
        frameworks: [
          {
            framework: 'CRAFT',
            promptStructure: 'Context, Role, Action, Format, Tone',
            prompt: `Context: Planning KCC's monthly community education workshop at Cedar Rapids Community Center. We expect 200 participants - mix of new pet owners and families considering adoption. Past evaluations show people love hands-on activities. We have volunteer experts available, can showcase adoptable kittens, and want to highlight our crochet program. Our mission includes education to reduce shelter burden.

Role: Marcus Williams, Education Specialist at Kitty Crochet Collective, responsible for engaging community education

Action: Design a comprehensive 90-minute interactive workshop on kitten care that reduces shelter returns and promotes responsible pet ownership

Format: Detailed agenda with timing, activities, materials needed, volunteer assignments, and success metrics

Tone: Engaging, educational, warm, practical - emphasizing KCC's unique approach while keeping content accessible`,
            output: `# Kitten Care Basics: A KCC Community Workshop
**Duration:** 90 minutes | **Expected Attendance:** 200 participants

## Welcome & KCC Mission (10 minutes)
**Lead:** Susan Martinez, Executive Director
- Welcome and housekeeping
- KCC's story: From shelter crisis to crochet solution
- Today's goals: Confident care = Forever homes
- **Interactive:** Quick poll - "Who's thinking of adopting?"

## The First 30 Days: Setting Kittens Up for Success (20 minutes)
**Lead:** Dr. Sarah Chen (Volunteer Veterinarian)
- **Demo Station 1:** Kitten-proofing your home (volunteer demonstrates)
- **Demo Station 2:** Essential supplies on a budget
- **Hands-on:** Participants practice holding kittens correctly
- **KCC Touch:** Show how crocheted sweaters help with anxiety

## Nutrition & Growth (15 minutes)
**Lead:** David Chen, Program Director
- Age-appropriate feeding with live demonstration
- **Interactive:** Guess the kitten's age game
- Reading body language and hunger cues
- **Cost-saving tips:** Quality food within budget

## Health & Wellness (20 minutes)
**Lead:** Foster Family Panel (3 experienced families)
- Vaccination timeline (handout provided)
- **Red flags:** When to call the vet
- **Myth-busting:** Indoor vs. outdoor cats
- **KCC Success Story:** Medically fragile kitten thriving

## Litter Box Success & Behavior (15 minutes)
**Lead:** Marcus Williams, Education Specialist
- **Demo Station 3:** Litter box setup and placement
- Troubleshooting common issues
- **Play demonstration:** Appropriate toys and enrichment
- **Prevention focus:** Reducing returns to shelter

## Meet Your Match + Q&A (10 minutes)
**Lead:** Jennifer Thompson, Volunteer Coordinator
- Meet today's adoptable kittens (wearing their crochets!)
- Adoption process walkthrough
- Volunteer opportunities announced
- Q&A with all experts

## Materials Needed:
- 3 demo stations with supplies
- 10 calm kittens for handling practice
- Handouts: Supply checklist, vaccination schedule, KCC resources
- Name tags for 15 volunteers
- Photo booth with crochet props

## Volunteer Assignments:
- Station monitors (3)
- Kitten handlers (6)
- Registration table (2)
- Photography for social media (1)
- Refreshment table (2)
- Floater/questions (1)

## Success Metrics:
- Sign-ups for adoption appointments
- Volunteer applications submitted
- Newsletter subscriptions
- Post-workshop survey completion`,
            explanation: 'CRAFT framework ensures all workshop elements are systematically addressed - from context to tone - creating a comprehensive educational experience.'
          },
          {
            framework: 'PCTF',
            promptStructure: 'Purpose, Context, Task, Format',
            prompt: `Purpose: Create an engaging 90-minute workshop on kitten care that reduces shelter returns and promotes responsible pet ownership

Context: Monthly workshop at Cedar Rapids Community Center for 200 participants. Mix of new pet owners and families considering adoption. KCC's mission includes education to reduce shelter burden. We have volunteer experts, can showcase adoptable kittens, and want to highlight our crochet program. Past evaluations show people love hands-on activities.

Task: Design an interactive workshop agenda that educates while showcasing KCC's unique approach

Format: Detailed 90-minute agenda with timing, activities, materials needed, and volunteer assignments`,
            output: `# Kitten Care Basics: A KCC Community Workshop
**Duration:** 90 minutes | **Expected Attendance:** 200 participants

## Welcome & KCC Mission (10 minutes)
**Lead:** Susan Martinez, Executive Director
- Welcome and housekeeping
- KCC's story: From shelter crisis to crochet solution
- Today's goals: Confident care = Forever homes
- **Interactive:** Quick poll - "Who's thinking of adopting?"

## The First 30 Days: Setting Kittens Up for Success (20 minutes)
**Lead:** Dr. Sarah Chen (Volunteer Veterinarian)
- **Demo Station 1:** Kitten-proofing your home (volunteer demonstrates)
- **Demo Station 2:** Essential supplies on a budget
- **Hands-on:** Participants practice holding kittens correctly
- **KCC Touch:** Show how crocheted sweaters help with anxiety

## Nutrition & Growth (15 minutes)
**Lead:** David Chen, Program Director
- Age-appropriate feeding with live demonstration
- **Interactive:** Guess the kitten's age game
- Reading body language and hunger cues
- **Cost-saving tips:** Quality food within budget

## Health & Wellness (20 minutes)
**Lead:** Foster Family Panel (3 experienced families)
- Vaccination timeline (handout provided)
- **Red flags:** When to call the vet
- **Myth-busting:** Indoor vs. outdoor cats
- **KCC Success Story:** Medically fragile kitten thriving

## Litter Box Success & Behavior (15 minutes)
**Lead:** Marcus Williams, Education Specialist
- **Demo Station 3:** Litter box setup and placement
- Troubleshooting common issues
- **Play demonstration:** Appropriate toys and enrichment
- **Prevention focus:** Reducing returns to shelter

## Meet Your Match + Q&A (10 minutes)
**Lead:** Jennifer Thompson, Volunteer Coordinator
- Meet today's adoptable kittens (wearing their crochets!)
- Adoption process walkthrough
- Volunteer opportunities announced
- Q&A with all experts

## Materials Needed:
- 3 demo stations with supplies
- 10 calm kittens for handling practice
- Handouts: Supply checklist, vaccination schedule, KCC resources
- Name tags for 15 volunteers
- Photo booth with crochet props

## Volunteer Assignments:
- Station monitors (3)
- Kitten handlers (6)
- Registration table (2)
- Photography for social media (1)
- Refreshment table (2)
- Floater/questions (1)

## Success Metrics:
- Sign-ups for adoption appointments
- Volunteer applications submitted
- Newsletter subscriptions
- Post-workshop survey completion`,
            explanation: 'PCTF structure focuses on clear purpose and task definition, resulting in actionable workshop plans that meet educational objectives.'
          }
        ]
      },
      {
        level: 3,
        name: 'Packaged Tool (Claude Project)',
        description: '"KCC Education Planner" with workshop templates and past evaluations',
        promptStructure: 'Workshop type selection + custom elements',
        kccExample: 'Select "Kitten Care" template, add this month\'s featured kittens',
        outputQuality: 'Well-structured with proven elements',
        timeInvestment: '1 hour initial setup, then 5 minutes per workshop',
        bestFor: 'All education programs',
        kccUseCases: ['Monthly workshops', 'School visits', 'Foster training', 'Volunteer orientation'],
        workflowVisual: 'Marcus → Opens Project → Selects template → Adds custom elements → Complete plan with materials list',
        prompt: 'Kitten care workshop for March, featuring spring kitten season prep, have 5 adoptable kittens to showcase',
        output: `# March Kitten Care Workshop: Spring into Kitten Season!
**Date:** March 18, 2024 | 2:00-3:30 PM
**Location:** Cedar Rapids Community Center, Room A
**Registration:** 178/200 (as of March 10)

## Pre-Workshop Setup (1:00-2:00 PM)
✓ Station setup checklist in volunteer packets
✓ Kitten comfort area prepared with foster volunteers
✓ Registration table with spring-themed name tags

## SEGMENT 1: Welcome to Spring Kitten Season (10 min)
**Lead:** Susan Martinez
- Warm welcome with kitten season statistics
- "Why March matters" - preparing for 400+ kittens
- Interactive moment: "Stand if you've ever fostered"
- Preview today's adoptable stars:
  * Clover (tabby, 12 weeks) - wearing green shamrock sweater
  * Bunny (white, 10 weeks) - in pastel Easter ensemble  
  * Robyn (calico, 14 weeks) - sporting spring flowers
  * Bee (black, 9 weeks) - yellow and black stripes
  * Tulip (orange, 11 weeks) - pink flower crown

## SEGMENT 2: Kitten Development Stages (20 min)
**Lead:** Dr. Chen + Foster Mom Lisa
*Based on 95% positive feedback from February*
- **NEW:** Live ultrasound demo of pregnant shelter cat
- Neonatal to adoption-ready timeline
- **Crowd Favorite Returns:** "Guess That Age" with real kittens
- Spring hazards: Easter lilies, spring cleaning products

## SEGMENT 3: Nutrition Through the Seasons (15 min)
**Lead:** David Chen
*Updated based on participant requests*
- Transitioning foods as kittens grow
- **Cost Calculator:** Spring budget planning for new owners
- Demo: Puzzle feeders for indoor enrichment
- Hydration focus as weather warms

## SEGMENT 4: Spring Health Considerations (20 min)
**Lead:** Foster Family Panel
*March Focus: Preparing for kitten season influx*
- Spay/neuter: Why spring timing matters
- Vaccine clinic announcement (April 6)
- **New Activity:** Build a first-aid kit (supplies provided)
- Parasite prevention as weather warms

## SEGMENT 5: Creating Forever Homes (15 min)
**Lead:** Marcus Williams
*Interactive stations - participants rotate*
- Station A: Spring cleaning - safe products for cats
- Station B: Window perches for bird watching
- Station C: DIY toys from recyclables

## SEGMENT 6: Meet & Greet + Action Steps (10 min)
**Lead:** Jennifer Thompson
- Adoption special: Waived fees for workshop attendees
- Foster recruitment: "We need 30 more families by April"
- Volunteer sign-ups: Kitten season positions
- **Photo Booth:** Participants with adoptable kittens

## March-Specific Materials:
□ Spring kitten season infographic
□ Foster family application packets (goal: 10 sign-ups)
□ Adoption applications for 5 featured kittens
□ April vaccine clinic flyers
□ Easter pet safety handout

## Volunteer Needs (Confirmed):
- Dr. Chen (veterinary expertise) ✓
- Lisa, Tom, Maria (foster panel) ✓
- 6 kitten handlers from regular volunteer pool ✓
- 2 photography volunteers for social media ✓
- Setup/breakdown crew of 4 ✓

## Success Metrics (from February):
- 12 adoptions within one week of workshop ✓
- 8 new foster families recruited ✓
- 94% would recommend to others ✓
- Top request: More hands-on time (addressed in March plan)

## Post-Workshop:
- Thank you email with resources (automated)
- Follow-up to adoption applicants within 24 hours
- Foster applicants connected to David within 48 hours
- Social media posts with photo booth pictures`,
        explanation: 'The Project knows KCC\'s workshop history, what works, seasonal considerations, and automatically incorporates successful elements while addressing past feedback. It creates a complete, implementation-ready plan.'
      },
      {
        level: 4,
        name: 'Automated Workflow',
        description: 'Complete workshop planning and promotion system',
        promptStructure: 'Calendar trigger → Full workshop preparation',
        kccExample: 'First Monday trigger → Creates plan, promotes, registers, sends reminders',
        outputQuality: 'Comprehensive coordination across all systems',
        timeInvestment: '5 hours initial setup, then fully autonomous',
        bestFor: 'Recurring educational programs',
        kccUseCases: ['Monthly workshops', 'Series planning', 'Multi-location events'],
        workflowVisual: 'Calendar trigger → AI plans workshop → Creates materials → Promotes → Manages registration → Sends reminders → Prepares volunteers',
        prompt: '[Automated trigger: First Monday of March - plan April workshop]',
        output: `## April Workshop Automation Complete ✓

### Workshop Details Generated:
**Topic:** "Easter & Spring Safety for Kittens"
**Date:** April 15, 2024, 2:00-3:30 PM
**Venue:** Cedar Rapids Community Center (auto-confirmed)

### Planning Actions Completed:

✓ **Content Creation (March 6, 9:00 AM)**
- Workshop agenda tailored to Easter/spring themes
- Incorporated February & March participant feedback
- Created materials list based on inventory levels
- Generated volunteer assignment sheet

✓ **Facility & Resources (March 6, 10:00 AM)**
- Room booking confirmed with Community Center
- Insurance certificate sent automatically
- Supply order placed for demonstration materials
- Kitten attendance requested from foster families

✓ **Marketing Campaign Launched (March 6, 2:00 PM)**
- EventBrite listing created with 200 capacity
- Facebook event published and boosted
- Instagram posts scheduled (2x weekly until event)
- Email campaign to 850 subscribers
- Flyers sent to 12 partner locations
- Library digital boards updated

✓ **Volunteer Coordination (March 7)**
- Automated texts to qualified workshop volunteers
- 15 positions filled within 24 hours
- Backup list generated
- Volunteer guide emailed with assignments

✓ **Registration Management**
*As of March 13:*
- 67 registered (historical average: 150 by event date)
- Waitlist automatically enabled at 180
- Demographic data collected for customization

✓ **Automated Communications Schedule**
- March 20: "2 spots left" urgency campaign (if needed)
- April 1: Registrant reminder with parking info
- April 8: Final reminder with what to bring
- April 14: Day-before text reminder
- April 15: Morning of logistics text

✓ **Materials & Handouts (March 25)**
- Spring safety checklist designed and sent to printer
- Foster application packets customized for season
- Volunteer schedules finalized
- Name tags mail-merged with registrant names

✓ **Integration Updates**
- Salesforce: New workshop registrants tagged
- Mailchimp: Segmented list for follow-up
- Google Calendar: Staff schedules blocked
- Asana: Workshop task template activated
- Slack: #april-workshop channel created

### Performance Dashboard:
📊 **Registration Pace:** Tracking 15% above March
📈 **Social Engagement:** 2.3K reaches, 145 shares
📧 **Email Performance:** 38% open rate, 12% CTR
🎯 **Foster Family Goal:** 8 confirmed to bring kittens

### Escalation Triggers Set:
- If registration < 100 by April 1: Additional promotion
- If volunteers < 12 by April 8: Staff backup plan
- If weather alert: Auto-notify registrants of changes

### Marcus's Dashboard Summary:
"April workshop 87% ready. Review generated agenda in shared drive. Approve Easter safety handout by March 20. Foster panel confirmed. Registration tracking above average."`,
        explanation: 'Complete automation handles every aspect of workshop planning, from content creation to day-of logistics. The system learns from past workshops, adjusts for seasonal themes, and manages hundreds of details without human intervention, freeing Marcus to focus on content quality rather than logistics.'
      }
    ]
  }
];