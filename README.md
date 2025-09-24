# From Basic to Structured Prompts: AI Training for Nonprofits

An interactive training tool that teaches nonprofit professionals the difference between basic and structured AI prompts through hands-on examples with the Kitty Crochet Collective.

**🌐 Live Demo:** https://ai-prompt-trainer-nonprofits.netlify.app  
**📁 Repository:** https://github.com/ksnyder-mtm/ai-prompt-trainer-nonprofits

## 🎯 Overview

This training tool helps nonprofit staff see exactly how structured prompts are formatted and why they produce more consistent, professional results than basic conversational prompts.

### Target Users
- Nonprofit executives exploring AI adoption
- Development managers transitioning from basic ChatGPT use
- Volunteer coordinators seeking efficiency gains
- Education specialists teaching others about AI tools

## 🏗️ Architecture

- **Frontend**: React 19.1+ with TypeScript
- **Styling**: Custom CSS implementing MTM Style Guide
- **Data**: Static TypeScript files (no backend required)
- **Deployment**: Static site on Netlify
- **Navigation**: React Router for smooth transitions

## 📚 The 2-Level Journey

### Level 1: Basic Prompts
- Simple, conversational requests
- Quick to write but variable results
- Good for brainstorming and initial ideas

### Level 2: Structured Prompts
- Framework-based prompts using CRAFT or PCTF
- Consistent, professional outputs
- Ideal for repeatable processes and team sharing

### Framework Options for Structured Prompts

**CRAFT**: Context, Role, Action, Format, Tone  
**PCTF**: Persona, Context, Task, Format

Interactive framework comparison helps learners see exactly how structured prompts are formatted and why they produce better results.

## 🎪 KCC Scenarios

### 1. Meeting Notes to To-Do's (📋) ✅
Transform meeting transcripts into actionable task assignments for all participants with clear deadlines and accountability.

### 2. Board Meeting Tasks (📋) ✅  
Process monthly board meeting notes about expanding foster network to serve 100 more kittens annually.

### 3. Donor Thank You (💝) ✅
Create personalized thank you messages for Kitten 5K fundraiser donors with specific impact stories.

### 4. Volunteer Recruitment (🤝) ⏳
Recruit and onboard volunteers for peak kitten season when KCC needs 150+ seasonal volunteers.

### 5. Workshop Planning (📚) ⏳
Plan monthly community education workshop on responsible pet ownership and kitten care.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/ksnyder-mtm/ai-prompt-trainer-nonprofits.git
cd ai-prompt-trainer-nonprofits

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build

# Serve locally (optional)
npm install -g serve
serve -s build
```

## 🎨 Design System

The application follows the MTM Style Guide:

### Colors
- Primary: `#1ab1d2` (light blue)
- Accent: `#f18f38` (orange) 
- Navy: `#1c487b` (dark blue)
- Soft Blue: `#85abbd` (muted blue)
- Background Cream: `#fef4e3`
- Background White: `#fafdfe`

### Typography
- Font stack: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
- H1: 40px, H2: 32px, H3: 24px, Body: 16px
- Line height: 1.6 for body text

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx               # Header and footer wrapper
│   ├── Intro.tsx               # Landing page with approach overview
│   ├── ScenarioSelection.tsx   # Choose KCC scenario
│   ├── ProgressionView.tsx     # Card-based learning interface
│   ├── CompletionSummary.tsx   # Results and next steps
│   ├── Icon.tsx               # Icon component with fallbacks
│   ├── Icons.tsx              # SVG icon library
│   └── WorkflowDiagram.tsx    # Visual workflow representations
├── data/
│   └── scenarios.ts           # KCC scenario content with frameworks
├── types/
│   └── index.ts              # TypeScript interfaces
├── assets/
│   └── mtm-logo.png          # Meet the Moment logo
└── App.tsx                   # Main app with routing
```

## 🔄 Improved User Experience

### Card-Based Navigation
- **One approach at a time** for focused learning
- **Horizontal progress indicator** with connecting lines
- **Collapsible sections**: Overview, How It Works, Real Examples
- **Framework toggles** for CRAFT vs PCTF comparison

### Progressive Disclosure
1. **Intro Screen**: Overview of basic vs structured prompts
2. **Scenario Selection**: Choose from 5 KCC situations
3. **Approach Cards**: Navigate through 2 approaches (basic and structured)
4. **Interactive Examples**: Toggle between CRAFT and PCTF frameworks
5. **Completion**: Summary of learning and next steps

## 🎯 Why Structure Matters

### Benefits of Structured Prompts:
- **Consistent Results**: Generate similar quality outputs each time
- **Reduced Iterations**: Fewer rounds of clarification needed
- **Clear Formatting**: Results arrive in specified structures
- **Team Sharing**: Document and share what works
- **Platform Agnostic**: Framework principles apply to any AI tool
- **Measurable Impact**: Track time and quality improvements

### Meeting Transcript Integration
Emphasizes using meeting transcripts (auto-generated from Zoom, Teams, Google Meet) for dramatically improved AI output quality.

## 📊 Key Features Implemented

### ✅ Completed Features
- **Card-based navigation** replacing overwhelming scroll
- **Framework comparison** (CRAFT vs PCTF) with detailed explanations
- **Meeting transcript emphasis** throughout the experience
- **Professional tool guidance** with organizational recommendations
- **Cost warnings** discouraging free AI tools
- **Mobile-responsive design** with proper touch targets
- **TypeScript implementation** for type safety
- **Component architecture** for maintainability

### 🔍 Focus Areas
- Understanding when to use basic vs structured prompts
- Learning CRAFT and PCTF framework components
- Seeing real examples of formatted prompts
- Practicing with nonprofit-specific scenarios

## 🚀 Deployment

### Netlify Setup
1. Connect GitHub repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18.x`
3. Automatic deployments on git push

### Environment Variables
No environment variables required - fully static application.

## 📈 Future Roadmap

### Future Enhancements
- Additional nonprofit scenarios
- More framework variations
- Practice exercises with feedback
- Team collaboration features

## 🤝 Contributing

This project is developed for Meet the Moment's nonprofit training programs. For questions or suggestions, please open an issue in the GitHub repository.

## 📄 License

Proprietary - Meet the Moment, LLC

---

**Developed by Meet the Moment** 🚀  
*Empowering nonprofits with practical AI training*