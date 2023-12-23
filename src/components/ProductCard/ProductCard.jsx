const ProductCard = ({ item }) => {
  const { title, image, variations } = item;
  return (
    <div className="border rounded overflow-hidden shadow-md transition-transform transform hover:scale-105 m-4">
      <div className="p-4">
        <img className="w-full h-56" src={image} alt={title} />
        <h3 className="text-xl font-semibold mt-2 mb-4">{title}</h3>
        <div className="flex flex-wrap">
          <strong>Variations:</strong>
          {variations.slice(0,1).map((v) => (
            <span
              key={v.id}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded m-1 text-sm"
            >
              {v.color} / {v.size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
