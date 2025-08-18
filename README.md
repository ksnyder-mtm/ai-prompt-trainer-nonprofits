# AI Prompt Progression Trainer for Nonprofits

An interactive web app that teaches nonprofit professionals how AI prompting evolves from basic queries to automated workflows, using the Kitty Crochet Collective as a case study throughout.

## 🎯 Overview

This trainer helps nonprofit staff understand when and how to use different levels of AI tools effectively, from simple prompts to complex automations, without getting overwhelmed by technical complexity or spending beyond their limited technology budgets.

### Target Users
- Nonprofit executives using basic templates
- Development managers experimenting with ChatGPT  
- Volunteer coordinators looking for efficiency
- Education specialists helping others with tech

## 🏗️ Architecture

- **Frontend**: React with TypeScript
- **Styling**: Custom CSS implementing MTM Style Guide
- **Data**: Static JSON files (no backend required)
- **Hosting**: Static site deployment (Netlify, Vercel, etc.)

## 📚 The 4 Levels

1. **Basic Prompt**: Simple, conversational requests
2. **Structured Format (CRAFT)**: Context, Role, Action, Format, Tone
3. **Packaged Tools**: Pre-configured AI assistants (GPTs, Projects, Gems)
4. **Automated Workflows**: AI that runs automatically based on triggers

## 🎪 KCC Scenarios

### 1. Board Meeting Tasks (📋)
Process monthly board meeting notes about expanding foster network to serve 100 more kittens annually.

### 2. Donor Thank You (💝)
Create personalized thank you messages for Kitten 5K fundraiser donors.

### 3. Volunteer Recruitment (🤝)
Recruit and onboard volunteers for peak kitten season when KCC needs 150+ seasonal volunteers.

### 4. Workshop Planning (📚)
Plan monthly community education workshop on responsible pet ownership and kitten care.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd ai-prompt-trainer

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
│   ├── Layout.tsx           # Header and footer wrapper
│   ├── Intro.tsx           # Landing page with 4-level overview
│   ├── ScenarioSelection.tsx # Choose KCC scenario
│   ├── ProgressionView.tsx  # Main learning interface
│   └── CompletionSummary.tsx # Results and next steps
├── data/
│   └── scenarios.ts         # KCC scenario content
├── types/
│   └── index.ts            # TypeScript interfaces
├── assets/
│   └── mtm-logo.png        # Meet the Moment logo
└── App.tsx                 # Main app with routing
```

## 🔄 User Flow

1. **Intro Screen**: Visual journey of 4 levels with KCC colors
2. **Scenario Selection**: Choose from 4 KCC situations
3. **Material Combinations**: Select context materials (3-5 options per scenario)
4. **Level Progression**: Scroll through 4 levels with KCC examples
5. **Completion**: Impact summary with time saved for KCC staff

## 📊 Success Metrics

The app tracks learning progression and shows real impact:
- Time savings per level (seconds to hours)
- Annual impact for KCC (24-180 hours saved)
- Efficiency gains (6-minute response times, 65% adoption rate increase)

## 🎯 Features

### Must-Have (MVP)
- ✅ Interactive intro with visual progression pathway
- ✅ 4 KCC scenarios with realistic nonprofit situations  
- ✅ 3-5 pre-generated material combinations per scenario
- ✅ 4 complexity levels showing progression
- ✅ Visual workflow diagrams for each level (SVG-based)
- ✅ Time/effort indicators relevant to KCC's small staff
- ✅ Professional line icons (no emojis)
- ✅ Draft-focused language (no "perfect" outputs)
- ✅ Mobile-responsive design
- ✅ Completion summary screen
- ✅ "Start Over" navigation

### Future Roadmap
- Phase 2: PDF generation with personalized takeaways
- Phase 3: Additional scenarios for other nonprofit subsectors
- Phase 4: Progress tracking across sessions
- Phase 5: Real integration examples with common nonprofit tools
- Phase 6: Video testimonials from KCC staff

---

**Prototype by Meet the Moment** 🚀