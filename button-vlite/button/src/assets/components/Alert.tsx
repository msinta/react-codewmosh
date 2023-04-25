
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'warning';
}


const Alert = ({children, color = 'primary' }: Props) => {

  return (
    <div className={`alert alert-`+color+` alert-dismissible fade show`} role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
