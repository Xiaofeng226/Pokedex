# Pokedex

A React-based Pokédex application that allows users to search for Pokémon and view detailed information including stats, descriptions, and evolution chains. Features text-to-speech capabilities for an interactive experience.

## Features

- Search for any Pokémon by name
- View detailed Pokémon information including:
  - Basic stats and attributes
  - Species descriptions
  - Evolution chain information
- Text-to-speech functionality
- Responsive design
- Real-time data from PokéAPI

## Technologies Used

- **React** 17.0.2 - UI framework
- **React Speech Kit** 3.0.1 - Text-to-speech functionality
- **PokéAPI** - Pokémon data source
- **CSS3** - Styling

## Project Structure

```
Pokedex/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Main app styles
│   ├── index.js            # Application entry point
│   ├── styles.css          # Global styles
│   ├── Title.js            # Title component
│   ├── Entry.js            # Search input component
│   ├── Info.js             # Pokémon basic info display
│   ├── DataInfo.js         # Pokémon detailed data display
│   ├── EvolutionInfo.js    # Evolution chain component
│   └── Speech.js           # Text-to-speech component
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Pokedex
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Run Tests

Execute the test suite:
```bash
npm test
```

## How to Use

1. Enter a Pokémon name in the search box
2. View the Pokémon's information, including:
   - Sprite/image
   - Stats and abilities
   - Species description
   - Evolution information
3. Use the speech feature to hear information read aloud

## API Reference

This application uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data:
- `https://pokeapi.co/api/v2/pokemon/{name}` - Basic Pokémon data
- `https://pokeapi.co/api/v2/pokemon-species/{name}` - Species information and descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
