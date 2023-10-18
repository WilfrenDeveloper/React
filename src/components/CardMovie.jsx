
const CardMovie = ({h2, li1, li2, li3, li4, bgc}) => {

    const bgcolor = {
        backgroundColor: bgc
    }

  return (
    <article style={bgcolor} className="article">
        <h2 className="article__h2">{h2}</h2>
        <ul className="article__ul">
            <li className="article__li">
                {li1}
            </li>
            <li className="article__li">
                {li2}
            </li>
            <li className="article__li">
                {li3}
            </li>
            <li className="article__li">
                {li4}
            </li>
        </ul>
    </article>
  )
}

export default CardMovie