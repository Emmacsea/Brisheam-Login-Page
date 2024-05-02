import houseicon from '../Images/house.png'
import style from '../App.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.head}>
                <p className={style.welcome}>Welcome Back!</p>
                <p className={style.account}>Dont have an account, <a href="">Sign Up</a></p>                
            </div>

            <nav className={style.list}>
                <li><a href="">Help</a></li>
                <li><a href="">Contact us</a></li>
                <li>
                <select name="" id="">
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="spanish">Spanish</option>
                </select>
                </li>
                <li><a href="">Sign Up</a></li>
            </nav>

            <div className={style.img}>
                <img src={houseicon} alt="" />

            </div>
           
        </div>

    )
}

export default Header