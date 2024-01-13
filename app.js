import {h1, div, p} from './tagFunctions.js'
import {Blossom, State} from './blossom.js'

const blossom = new Blossom(); // Creating a single instance of Blossom
let counter = new State(0);

const styles = {
    button: {
        'color': 'blue',
        'backgroundColor' : 'red',
        'width' : '5rem'
    }
}

const customButton = (text, handleClick) => {
    return div(p(text))
        .setStyles(styles.button)
        .setEvents('click', () => handleClick())
}

const app = () => {
  return div(
    h1(counter.getState()),
    customButton("increment", ()=>counter.setState(counter.getState() + 1))
  );
};

blossom.render(app);
