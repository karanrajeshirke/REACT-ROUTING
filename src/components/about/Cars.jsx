const Cars = () => {
  let cars = [
    {
      model: "Model X",
      price: "15000$",
      country: "USA",
    },
    {
      model: "Model Y",
      price: "20000$",
      country: "Canada",
    },
    {
      model: "Sedan A",
      price: "18000$",
      country: "Germany",
    },
    {
      model: "SUV B",
      price: "25000$",
      country: "Japan",
    },
    {
      model: "Compact C",
      price: "12000$",
      country: "France",
    },
    {
      model: "Pickup Truck D",
      price: "22000$",
      country: "Australia",
    },
    {
      model: "Convertible E",
      price: "28000$",
      country: "Italy",
    },
    {
      model: "Electric F",
      price: "30000$",
      country: "China",
    },
    {
      model: "Sports Car G",
      price: "35000$",
      country: "Brazil",
    },
    {
      model: "Hybrid H",
      price: "27000$",
      country: "India",
    },
  ];

  return (
    <div className="cars">
      {cars.map((car, index) => {
        return (
          <div className="each-car" >
            <ul >
              <li>{car.model}</li>
              <li>{car.price}</li>
              <li>{car.country}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
