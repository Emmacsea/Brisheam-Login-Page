import style from '../App.module.css'
import googlelogo from '../Images/Frame 18.png'
import fblogo from '../Images/facebook.png'
import applelogo from '../Images/apple.png'
import imgicon from '../Images/Image.png'

const Form = () => {

    return (
        <div className={style.form}>
            <div className={style.details}>
                <div className={style.head}>
                    <p className={style.welcome}>Welcome Back!</p>
                    <p className={style.account}>Dont have an account, <a href="">Sign Up</a></p>
                </div>
                <form action="">
                    <div className={style.inputdetails}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="daniel123@gmail.com" />
                    </div>

                    <div className={style.inputdetails}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="*******" />
                    </div>

                    <div className={style.remember}>

                        <label className={style.co}> Remeber Me
                            <input type="radio" />
                            <span className={style.checkmark}></span>

                        </label>

                        <div className={style.forget}>
                            <a href="">Forget password?</a>

                        </div>
                    </div>

                    <input type="button" value={'Sign in'} />
                </form>

                <div className={style.span}>
                    <div></div>
                    <span> Or contiune with </span>
                    <div></div>
                </div>

                <div className={style.icon}>

                    <div className={style.gicon}>
                        <a href="https://www.google.com"><img src={googlelogo} alt="" /></a>
                    </div>

                    <div className={style.fbicon}>
                        <a href="https://www.facebook.com"><img src={fblogo} alt="" /></a>
                    </div>

                    <div className={style.appleicon}>
                        <a href="https://www.facebook.com"><img src={applelogo} alt="" /></a>
                    </div>

                </div>
            </div>
            <div className={style.im}>
                <img src={imgicon} alt="" />
            </div>

        </div>
    )
}

export default Form