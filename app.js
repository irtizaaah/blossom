import {h1, div, p} from './tagFunctions.js'
import {Blossom, State} from './blossom.js'

const blossom = new Blossom();
let counter = new State(0);

const styles = {
    horizontalBlock: {
        'display':'flex'
    },
    button: {
        'text-align':'center',
        'color': 'white',
        'backgroundColor' : 'black',
        'padding' : '0.5em',
        'margin' : '0.5em',
        'width' : '5rem'
    },
    negativeCounter: {
        'color':'red'
    },
    positiveCounter: {
        'color':'green'
    }
}

const customButton = (text, handleClick) => {
    return div(p(text))
        .setStyles(styles.button)
        .setEvents('click', () => handleClick())
}

const app = () => {
  return div(
    h1(counter.getState())
        .setStyles(counter.getState() < 0 ? styles.negativeCounter:styles.positiveCounter),
    div(
        customButton("decrement", ()=>counter.setState(counter.getState() - 1)),
        customButton("increment", ()=>counter.setState(counter.getState() + 1))
    ).setStyles(styles.horizontalBlock)
  );
};

blossom.render(app);
