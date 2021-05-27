import './Card.css'
// to fix the look we add awhite space and create 
// a wrapper just to add extra css properties along with ourt custom component
function Card(props){
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;