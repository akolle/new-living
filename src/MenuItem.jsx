const MenuItem = ({ img, title, priceRange, shortDesc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{priceRange}</span>
        </header>
        <p className="item-text">{shortDesc}</p>
      </div>
    </article>
  )
}
export default MenuItem
