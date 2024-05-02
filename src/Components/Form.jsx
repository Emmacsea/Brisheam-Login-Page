import style from '../App.module.css'
import googlelogo from '../Images/google icon.webp'
import fblogo from '../Images/facebook-logo-on-transparent-isolated-background-free-vector.jpg'
import applelogo from '../Images/apple-logo-iphone-clip-art-apple-thumbnail.jpg'
import imgicon from '../Images/image.png'

const Form = () => {

    return (
        <div className={style.form}>
            <div className={style.details}>
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
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Remember Me</label>
                        </div>

                        <a href="">Forget password?</a>
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