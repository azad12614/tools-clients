import { Link } from "react-router-dom";
function Card({ product }) {
  const stock = () => {
    if (product.items > 0) {
      return <button className="btn btn-primary">In Stock</button>;
    } else {
      return <button className="btn btn-primary">TBA</button>;
    }
  };
  const pic = product?.image;
  console.log(pic);
  console.log(product?.image);
  return (
    <div className="card card-compact text-center bg-[#fed7aa] shadow-xl">
      <figure>
        <img src={`${pic}`} alt="Product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <h2 className="text-dark">{product?.image}</h2>
        <p className="font-semibold">
          Items: {product.items} <br></br> Prices: {product.price}
        </p>
        <div className="card-actions justify-evenly">
          {stock()}
          <Link to={`/product/${product?._id}`}>
            <button className="btn btn-primary">Buy At ${product.price}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
