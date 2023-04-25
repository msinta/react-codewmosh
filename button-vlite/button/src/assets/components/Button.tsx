import Alert from "./Alert";

interface Props {
  children?: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger';
}

const ButtonClass = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button type="button" className={`btn btn-` + color} onClick={onClick}>{children}</button>
  )
}

export default ButtonClass
