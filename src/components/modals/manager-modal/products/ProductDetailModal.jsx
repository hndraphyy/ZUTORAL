const ProductDetail = ({ itemName, itemPrice, itemStock }) => {
  return (
    <div>
      <h2 className="text-2xl text-center 2xl:max-w-sm mx-auto">
        Product Detail
      </h2>
      <p>
        <strong>Name:</strong> {itemName}
      </p>
      <p>
        <strong>Price:</strong> {itemPrice}
      </p>
      <p>
        <strong>Stock:</strong> {itemStock}
      </p>
    </div>
  );
};

export default ProductDetail;
