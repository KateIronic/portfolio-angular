/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['sf-mono', 'fira-code', 'fira-mono', 'roboto-mono', 'lucida-console', 'monaco', 'monospace'],
      'main': ['calibre', 'san-francisco', 'sf-pro-text', '-apple-system', 'system-ui', 'blink-mac-system', 'roboto', 'helvetica-neue', 'segoe-ui', 'arial', 'sans-serif'],
    },
  },
  plugins: [],
}
//SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace
//$MainFont: Calibre,San Francisco,SF Pro Text,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Helvetica Neue,Segoe UI,Arial,sans-serif;
