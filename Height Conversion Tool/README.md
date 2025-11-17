# Height Conversion Tool

This mini-app converts a height expressed in feet and inches into centimeters and meters. It is one of the practice projects from the JSBeginners collection and it now mirrors the updated UX and validation improvements in this repository.

## Features
- **Form guidance:** semantic labels, placeholders, and helper text make the expectations for each field explicit before submission.
- **Input validation:** the script blocks out-of-range values (feet below 0 or inches outside 0–11) and requires that both fields are numbers before performing the conversion.
- **Accessible results:** conversion feedback is rendered inside an `<output>` element that exposes polite `aria-live` messaging for assistive technologies, plus success/error color cues.
- **Auto-reset + focus:** after a successful calculation, the form clears and focus returns to the feet input so consecutive conversions are quick.

## Usage
1. Open `index.html` in a browser (no build tools or server is required).
2. Enter whole numbers for feet (0–9) and inches (0–11).
3. Click **Convert to cm** to display the centimeters and meters equivalent in the results region.

If either field is empty or outside its allowed range, the app displays a descriptive error message prompting you to correct the inputs.

## Development notes
- `app.js` houses the vanilla JavaScript logic and attaches the lone `submit` listener to `#calculator`.
- `style.css` provides the centered card layout, gradient button styling, focus states, and success/error result colors.
- Static assets (HTML, CSS, JS) live in this directory only, so the project can be copied as-is to any static host.
