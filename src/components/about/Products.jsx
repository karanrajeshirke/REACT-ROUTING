const Products=()=>
{

    let products = [
        {
            name: "Samsung M31",
            price: "10000",
            company: "Samsung"
        },
        {
            name: "iPhone 12",
            price: "80000",
            company: "Apple"
        },
        {
            name: "Google Pixel 5",
            price: "60000",
            company: "Google"
        },
        {
            name: "Sony Xperia 1 III",
            price: "90000",
            company: "Sony"
        },
        {
            name: "OnePlus 9",
            price: "45000",
            company: "OnePlus"
        }
    ];
    
    
    return(
        
       
       <div className="products">
         {
            products.map((product,index)=>
            {
                return(
                    <div className="each-product" key={index}>

                    <ul>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.company}</li>
                    </ul>

                </div>
                )
            })
        }
       </div>
        

    )

}


export default Products