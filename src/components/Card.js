import './Card.css';

// Card works as Wrapper Component

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
        
    // classes allow us to include the classes from the component where we use Card as a Wrapper Component
    // props.children allows to make Card as a Wrapper Component
}

export default Card;
