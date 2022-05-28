import React from 'react'
import Search from '../assets/svg/search'


const styles = {
    header: `bg-[#17171a] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4 `,
    nav: `flex justify-center item-center gap-[20px]`,
    navItems:`relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,

}

const header = () => {
  return (
    <div className={styles.header}>

        <div className={styles.headerWrapper}>

          <nav className={styles.nav}>

            <div className={styles.navItems}>

              <div className={styles.navLinks}>Cryptocurrencies</div>
              <div className={styles.badge}/>

            </div>

            <div className={styles.navItems}>

            <div className={styles.navLinks}>Exchanges</div>
            

            </div>

            <div className={styles.navItems}>

            <div className={styles.navLinks}>NFT</div>
            <div className={styles.badge}/>

            </div>


            <div className={styles.navItems}>

            <div className={styles.navLinks}>Crypto-Town</div>
            <div className={styles.badge}/>

            </div>


            <div className={styles.navItems}>

            <div className={styles.navLinks}>Portfolio</div>
            

            </div>

            <div className={styles.navItems}>

            <div className={styles.navLinks}>Watchlist</div>
            

            </div>

            <div className={styles.navItems}>

            <div className={styles.navLinks}>Products</div>
            <div className={styles.badge}/>

            </div>

            <div className={styles.navItems}>

            <div className={styles.navLinks}>Learn</div>
            




            
            </div>






            
          </nav>

          <div className='flex items-center'>
            {/* <connect /> */}
            <div className={styles.inputContainer}>
              <Search />
              <input className={styles.input} placeholder='Search'/>
            </div>
          </div>
         
        </div>

        </div>
  )
}

export default header