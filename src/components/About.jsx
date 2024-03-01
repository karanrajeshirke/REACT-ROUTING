import Cars from "./about/Cars"
import Products from "./about/Products"
import {Link, Outlet} from 'react-router-dom'
const About=()=>
{
    return(
       <>
        <div className="about">
        <h1>About</h1>

<p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla hic tempore? Nisi saepe beatae est aliquam veritatis sequi nemo exercitationem modi. Adipisci, doloribus obcaecati sunt atque ea fugiat explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum rerum optio excepturi nostrum dignissimos illum asperiores reiciendis quia ratione eius voluptate, et dicta, vel error quasi nemo distinctio assumenda.
Voluptatibus quis exercitationem aliquid, quasi quae, quam aperiam inventore provident blanditiis necessitatibus quos in itaque ex beatae! Repudiandae aut distinctio alias ratione! Sapiente veniam voluptatum natus accusamus. Laborum, voluptatibus velit?
Natus tenetur facilis enim maiores, unde voluptatibus voluptas doloribus? Natus reiciendis rerum odio repudiandae porro aut. Facilis nostrum dolore animi vero odio officiis quo vel dolorem. Ad fugit at ipsa!
Quos et qui dicta, facere facilis culpa illum non neque velit dolore, dignissimos autem esse ipsa quam adipisci tempora quo aspernatur veniam, nostrum sint nulla sunt deserunt? Ipsum, nobis optio.
Omnis delectus ea iste aliquid ullam nisi dolore repellendus. Sit ut quo laborum consectetur non, perferendis quibusdam eligendi temporibus corrupti rerum iusto doloremque numquam expedita cumque qui laboriosam libero ipsum.
Tempora harum ducimus voluptatum unde nostrum. Modi at totam culpa, dolores distinctio quaerat deserunt neque itaque tempora quas, esse dolorum magnam eos ducimus error delectus molestiae laborum velit incidunt dolore.
Rem, repudiandae? Inventore, suscipit iusto perspiciatis minus nihil saepe reprehenderit explicabo quos alias doloremque dolor. Repellat laborum repudiandae itaque voluptatum alias quis? Sed odit eos quia eligendi maiores mollitia assumenda.
Sint illum asperiores rerum officia? Quis praesentium ex unde ipsa amet, dolor qui ullam mollitia asperiores non et quod! Tempora quasi reprehenderit autem a eveniet distinctio commodi aspernatur ea ad?
Numquam, nemo! Nam, laboriosam. Cum, eius sit! Ducimus doloribus omnis, quos, odio blanditiis, quibusdam aut nulla laudantium voluptas et dolorem officiis! Recusandae quos earum consequuntur cum, rerum doloribus maiores a.
Eligendi voluptas aperiam quisquam earum sed facere nisi cum veritatis laudantium, fugiat aspernatur, hic minus corrupti? Quia, quam laborum. Veniam, vitae blanditiis consequuntur modi molestias quam enim aut impedit earum! </p>
<Link to="/about/cars">Cars</Link>
<Link to="/about/products">Products</Link>
<Outlet/>
        </div>
        </>

    )
}
export default About