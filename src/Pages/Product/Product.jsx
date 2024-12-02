import { useLocation, useParams } from "react-router-dom"
import CardData from "../../assets/data"
import "./Product.css"

export default function Product() {

  const params = useParams()
  const filterProduct = CardData.filter((item) => item?.id == params?.id)
  console.log(filterProduct)

  return (
    <section className="container">
      <h1 className="product_title">{filterProduct[0]?.title}</h1>
      <p className="product_text">{filterProduct[0]?.text}</p>
      <img className="product_img" src={filterProduct[0]?.img} />
    </section>
  )
}
