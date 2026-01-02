# Mental Reset

A simple, ethical mental clarity web application that helps users slow down, clarify their thoughts, and leave with one grounded takeaway.

## Philosophy

Mental Reset is designed to help with:
- Overthinking
- Mental noise
- Mild anxiety
- Decision paralysis
- Emotional confusion *after* the peak has passed

**This app does NOT:**
- Handle panic attacks
- Offer therapeutic techniques
- Diagnose mental health conditions
- Encourage emotional dependency
- Replace professional help

Boundaries are part of the product.

## Features

- **5-Screen Guided Flow**: State selection → Thought externalization → Control question → Resolution → Reset output
- **Privacy-First**: Only anonymous metadata is stored locally (no raw emotional text)
- **Bible Verse Integration**: Grounding verses displayed at session completion
- **Pattern Insights**: Track trends without storing sensitive content
- **Free & Premium Tiers**: 3 sessions/day free, unlimited with premium
- **Feedback System**: Optional thumbs up/down and text feedback
- **Safety Boundaries**: Gentle boundary messages for distress detection

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Storage**: localStorage only (no backend)
- **Hosting**: GitHub Pages (or any static host)
- **Dependencies**: None (except Google Fonts)

## Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

For local development with live reload, you can use:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/mental-reset.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your app will be live at `https://yourusername.github.io/mental-reset/`

## File Structure

```
mental-reset/
├── index.html          # Main HTML structure
├── style.css           # Calm, minimal design system
├── script.js           # Application logic
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Configuration

### Update Email Address

Replace `your-email@example.com` in two places:

1. **index.html** (line 212): Footer feedback link
2. **script.js** (line 413): Feedback email handler

### Update Payment Link

Replace the Stripe/Gumroad link in **index.html** (line 186):
```html
<a href="https://buy.stripe.com/your_actual_link" target="_blank" class="primary-btn payment-link">
```

## Data Storage

The app stores only anonymous metadata in localStorage:

```javascript
{
  state: "Overthinking" | "Anxious" | "Stuck" | "Tired" | "Overloaded",
  control: "Actionable" | "Non-actionable",
  timestamp: "ISO date string",
  helpful: true | false | null
}
```

**No raw thoughts or emotional content is ever stored.**

## Ethical Design Decisions

1. **No infinite loops**: Sessions have a clear end point
2. **No gamification**: No streaks, badges, or notifications
3. **No data collection**: Everything stays on the user's device
4. **Respectful boundaries**: Clear messaging about what this tool is and isn't
5. **Trust-based premium**: Simple localStorage unlock (acceptable for MVP)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is provided as-is for personal or commercial use.

## Support

For questions or feedback, email: your-email@example.com
