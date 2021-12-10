import React from 'react'

 const Navlist = () => {
     const navName=['About','Blog','Contact']
    return (
        <>
            <ul className="navList">
            {
                navName.map((name)=>(
                
              <li><a href="#">{name}</a></li>
              
              ))
            }
            </ul> 
        </>
    )
}
export default Navlist;