import { useState } from 'react'
// import './App.css'

// function Item({name, isPasked}){
//   return(
//     <li className='item'>
//       {name} {isPasked && '✅'}
//     </li>
//   )
// }
// export default function PackingList(){
//   return(
//     <section>
//       <ul>
//         <Item
//           isPasked={true}
//           name="Tran Tien Dat"
//         />
        
//         <Item
//           isPasked={true}
//           name="Pham Thi Huyen Trang"
//         />
        
//         <Item
//           isPasked={false}
//           name="dat hoc it"
//         />
//       </ul>
//     </section>
//   )
// }

// ---------------------------------------------
// import './App.css'
// import { people } from './data';
// import {getImageUrl } from './utils';

// export default function List(){
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//       src={getImageUrl(person)}
//       alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//         {' '+ person.profession + ' '}
//         know for {person.accomplishment}
//       </p>
//     </li>
//   )
// }
import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
