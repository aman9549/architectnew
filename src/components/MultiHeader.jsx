

const MultiHeader = ({title, image, children}) => {
  return (
  <header className="header">
        <div className="header_container">
            <div className="header__container-bg">
                <img src={image} alt="Header bg image" />
            </div>
            <div className="header__contant">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
  </header>
  )
}

export default MultiHeader
