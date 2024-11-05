import { useLocation, useParams } from "react-router-dom"
import Dataxon from "../../assets/data"


export default function Product() {

  const params = useParams()
  const filterProduct = Dataxon.filter((item) => item?.id == params?.id)
  console.log(filterProduct)

  return (
    <section>
      productga xush kelisbzi
      <h1>{filterProduct[0]?.title}</h1>
      <p>{filterProduct[0]?.text}</p>
      <img src={filterProduct[0]?.img} />

    </section>
  )
}
