
import { useEffect, useState } from 'react';
import scss from './Badges.module.scss'

let Badges = () => {
   const width = useWindowWidth(); // Our custom Hook
   return (
     <p>Window width is {width}</p>
   );
 }

 function useWindowWidth() {
   const [width, setWidth] = useState(window.innerWidth);
   
   useEffect(() => {
     const handleResize = () => setWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   });
   
   return width;
 }

// let Badges = () => {
//    return (
//       <div className={scss['badges']}>
//          <div className={scss['badges-block']}>
//             Значки
//          </div>
//       </div>
//    );
// };

export default Badges;

