interface Prop{
    children:string;
    onClick:() => void;
}


function Button({children, onClick}:Prop) {
  return (
    <button onClick={onClick} className="btn btn-primary">{children}</button>
  )
}

export default Button