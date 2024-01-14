import {h1, h2, div, p, textField} from './tags.js'
import {Blossom, State} from './blossom.js'

const blossom = new Blossom();

const styles = {
    vertical: {
        'display':'flex',
        'flex-direction':'column'
    },
    horizontal: {
        'display':'flex'
    },
    center: {
        'justify-content':'space-between',
        'align-items':'center',
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


let counter = new State(0); 
let name = new State("")

const customButton = (text, handleClick) => {
    return div(p(text))
        .setStyles(styles.button)
        .setEvents('click', () => handleClick())
}

const handleChange = (name, event) => name.setState(event.target.value);

const app = () => {
  return div(
    textField(name.getState())
        .setEvents('change', (event)=>handleChange(name, event)),

    h1(name.getState() + " counted:"),

    h2(counter.getState())
        .setStyles(counter.getState() < 0 ? styles.negativeCounter:styles.positiveCounter),

    div(
        customButton("decrement", ()=>counter.setState(counter.getState() - 1)),
        customButton("increment", ()=>counter.setState(counter.getState() + 1))
    ).setStyles(styles.horizontal)

  ).setStyles(styles.vertical, styles.center);
};

blossom.render(app);
