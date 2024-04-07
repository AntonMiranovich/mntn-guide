import style from "./style.module.scss";

function Main() {
    return (
        <div className={style.main}>

            <div className={style.contacts}>
                <p className={style.follow}>Follow us</p>
                <div className={style.imgInst}></div>
                <div className={style.imgTwit}></div>
            </div>

            <div className={style.info}>
                <div className={style.guide}>
                    <hr className={style.hr} />
                    <p className={style.paragrafGuide}>A Hiking guide</p>
                </div>

                <h2 className={style.mainInfo}>Be Prepared For The Mountains And Beyond!</h2>
                <div className={style.scroll}>
                    <p className={style.scrollDown}>scroll down</p>
                    <div className={style.scrollArrow}></div>
                </div>

            </div>
        </div>
    );
}

export default Main;