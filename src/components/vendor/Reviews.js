import avatar from "../../assets/vendor/icons/avatar.png";
import ratings from "../../assets/vendor/images/ratings.svg";


export default function Reviews() {
  return (
    <div id="wrapper" className="reviews">
        <nav>
            <a href="/" className="subtitle active">
                All Comments (1)
            </a>
        </nav>

        <div className="body">

            <div className="review_list">
                <table>
                    <tr className="review_titles">
                        <th>Customer Details</th>
                        <th>Comment</th>
                        <th>Link</th>
                        <th>Rating</th>
                    </tr>
                    <ReviewTile/>
                </table>
                {/* <div className="review_titles">
                    <p>Customer Details</p>
                    <p>Comment</p>
                    <p>Link To</p>
                    <p>Rating</p>
                </div> */}

                {/* <div className="review">
                    <ReviewTile/>
                </div> */}

        </div>
      </div>
    </div>
  )
}

function ReviewTile() {
    const tile=[
        {
            details:{
                img:avatar,
                name:"Faith", 
                email:"faith@gmail.comfaith@gmail.comfaith@gmail.comfaith@gmail.com"
            },
            comment:{
                date:"March 16, 2020", 
                text:"Nice top!"
            },
            link:"View Comment",

        },
        {
            details:{
                img:avatar,
                name:"Faith", 
                email:"faith@gmail.com"
            },
            comment:{
                date:"March 16, 2020", 
                text:"Nice top!"
            },
            link:"View Comment",

        },
    ]
  return (
      <>
      {tile.map((item,index)=>{
          return(
            // <div className="review_tile" key={`review-${index}`}>
            //     <div className="review_details">
            //         <div className="customer_img"><img src={item.details.img} alt=""/></div>
            //         <div className="customer_details">
            //             <p  className="name">Name: <span>{item.details.name}</span></p>
            //             <p>Email: <span>{item.details.email}</span></p>
            //         </div>
            //     </div>
            //     <div className="review_comment">
            //         <span>Submitted on {item.comment.date} </span>
            //         <p>{item.comment.text}</p>
            //     </div>
            //     <a href="/" className="review_link">{item.link}</a>
            //     <div className="rating">
            //         <img src={ratings} alt="customer" className=""/>
            //     </div>
            // </div>
            <tr className="review_tile" key={`review-${index}`}>
                <td className="review_details">
                    <div className="customer_img"><img src={item.details.img} alt=""/></div>
                    <div className="customer_details">
                        <p  className="name">Name: <span>{item.details.name}</span></p>
                        <p>Email: <span>{item.details.email}</span></p>
                    </div>
                </td>
                <td className="review_comment">
                    <span>Submitted on {item.comment.date} </span>
                    <p>{item.comment.text}</p>
                </td>
                <td className="review_link">
                <a href="/">{item.link}</a>
                </td>
                <td className="rating">
                    <img src={ratings} alt="customer" className=""/>
                </td>
            </tr>
          )
      })}
      </>
      )  
}
