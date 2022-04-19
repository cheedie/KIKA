import React from 'react'
import "../../../styles/StaticStyles/Conditions.css";

const Policy = ({
  policycaption1,
  onebody,
  policycaption2,
  twobody,
  twobullet1,
  twobullet2,
  twobullet3,
  policycaption3,
  threebody,
  threebody1,
  threebullet1,
  threebullet2,
  threebullet3,
  threebullet4,
  policycaption4,
  fourbody,
  fourbullet1,
  fourbullet2,
  fourbullet3,
  fourbullet4,
  fourbullet5,
  fourbullet6,
  fourbullet7,
  fourbullet8,
  policycaption5,
  fivebody,
  fivebullet1,
  fivebullet2,
  fivebullet3,
  fivebullet4,
  fivebody1,
  fivebullet5,
  fivebullet6,
}) => {
  return (
    <>
      <section className='conditions_container'>
            <div className='conditions_row'>
                <div id='sectionone'>
                    <h1>{policycaption1}</h1>
                    <p>{onebody}</p>
                </div> 
                <div id='sectiontwo'>
                    <h1>{policycaption2}</h1>
                    <p>{twobody}</p>
                    <p id='bullet'> {twobullet1}</p>
                    <p id='bullet'> {twobullet2}</p>
                    <p id='bullet'> {twobullet3}</p>
                </div> 
                <div id='sectionthree'>
                    <h1>{policycaption3}</h1>
                    <p>{threebody}</p>
                    <p>{threebody1}</p>
                    <p id='bullet'>{threebullet1}</p>
                    <p id='bullet'>{threebullet2}</p>
                    <p id='bullet'>{threebullet3}</p>
                    <p id='bullet'>{threebullet4}</p>
                </div> 
                <div id='sectionfour'>
                    <h1>{policycaption4}</h1>
                    <p>{fourbody}</p>
                    <p id='bullet'>{fourbullet1}</p>
                    <p id='bullet'>{fourbullet2}</p>
                    <p id='bullet'>{fourbullet3}</p>
                    <p id='bullet'>{fourbullet4}</p>
                    <p id='bullet'>{fourbullet5}</p>
                    <p id='bullet'>{fourbullet6}</p>
                    <p id='bullet'>{fourbullet7}</p>
                    <p id='bullet'>{fourbullet8}</p>
                </div>
                <div id='sectionfive'>
                    <h1>{policycaption5}</h1>
                    <p>{fivebody}</p>
                    <p id='bullet'>{fivebullet1}</p>
                    <p id='bullet'>{fivebullet2}</p>
                    <p id='bullet'>{fivebullet3}</p>
                    <p id='bullet'>{fivebullet4}</p>
                    <p>{fivebody1}</p>
                    <p id='bullet'>{fivebullet5}</p> 
                    <p id='bullet'>{fivebullet6}</p>
                </div>
            </div>    
        </section>
    </>
  )
}

export default Policy