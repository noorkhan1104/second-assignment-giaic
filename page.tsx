import Link from 'next/link';
import styles from "../services/service.module.css"



const servicePage =()=>{
    return (
      <div >
          <h1 className="bg-blue-200 text-4xl font-bold text-center text-black-600 my-8">Services page</h1>
        <ul className={styles.list}>
          
          <li> <Link href="/services/nestedpage"> this is a nested page</Link></li>

        
         </ul>
         </div>
    )
  
  }
  export default servicePage;