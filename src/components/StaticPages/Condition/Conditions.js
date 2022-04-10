import React from 'react'
import "../../../styles/StaticPages/Conditions.css";

const Conditions = ({
    titleHeading1,
    bodyDesc,
    bodyBullet,
    bodyBullet1,
    bodyBullet2,
    titleHeading2,
    secondBodyPoint,
    secondBodyPoint1,
    secondBodyPoint2,
    secondBodyPoint3,
    secondbodyBullet,
    secondbodyBullet1,
    secondbodyBullet2,
    secondBodyPoint4,
    secondBodyPoint5,
    secondBodyPoint6,
    titleHeading3,
    thirdBodyPoint,
    thirdbodyBullet,
    thirdbodyBullet2,
    thirdbodyBullet3,
    thirdBodyPoint1,
    thirdbodyBullet4,
    thirdbodyBullet5,
    thirdbodyBullet6,
    thirdbodyBullet7,
    thirdbodyBullet8,
    titleHeading4,
    fourthBodyPoint,
    fourthBodyPoint1,
    fourthbodyBullet,
    fourthbodyBullet1,
    fourthbodyBullet2,
    fourthBodyPoint2,
    titleHeading5,
    bodyDesc1,
}) => {
  return (
    <>
        <section className='conditions_container'>
            <div className='conditions_row'>
                <div>
                    <h1>{titleHeading1}</h1>
                    <p>{bodyDesc}</p>
                    <p>{bodyBullet}</p>
                    <p>{bodyBullet1}</p>
                    <p>{bodyBullet2}</p>
                </div> 
                <div>
                    <h1>{titleHeading2}</h1>
                    <p>{secondBodyPoint}</p>
                    <p>{secondBodyPoint1}</p>
                    <p>{secondBodyPoint2}</p>
                    <p>{secondBodyPoint3}</p>
                    <p>{secondbodyBullet}</p>
                    <p>{secondbodyBullet1}</p>
                    <p>{secondbodyBullet2}</p>
                    <p>{secondBodyPoint4}</p>
                    <p>{secondBodyPoint5}</p>
                    <p>{secondBodyPoint6}</p>
                </div> 
                <div>
                    <h1>{titleHeading3}</h1>
                    <p>{thirdBodyPoint}</p>
                    <p>{thirdbodyBullet}</p>
                    <p>{thirdbodyBullet2}</p>
                    <p>{thirdbodyBullet3}</p>
                    <p>{thirdBodyPoint1}</p>
                    <p>{thirdbodyBullet4}</p>
                    <p>{thirdbodyBullet5}</p>
                    <p>{thirdbodyBullet6}</p>
                    <p>{thirdbodyBullet7}</p>
                    <p>{thirdbodyBullet8}</p>
                </div> 
                <div>
                    <h1>{titleHeading4}</h1>
                    <p>{fourthBodyPoint}</p>
                    <p>{fourthBodyPoint1}</p>
                    <p>{fourthbodyBullet}</p>
                    <p>{fourthbodyBullet1}</p>
                    <p>{fourthbodyBullet2}</p>
                    <p>{fourthBodyPoint2}</p>
                </div>
                <div>
                    <h1>{titleHeading5}</h1>
                    <p>{bodyDesc1}</p>
                </div>y
            </div>    
        </section>
        
    </>
  )
}

export default Conditions