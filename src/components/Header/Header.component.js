import React from 'react';
import {Link} from "react-router-dom";
// import {BsCart4 as CartIcon} from "react-icons/bs";
// import {BiHeart as LikedIcon} from "react-icons/bi";
import s from './Header.module.css';
import API from "../../api/routerApi";
import {SmallProfilePhoto} from "../common/Imgs/Imgs";
import {PrimaryButton, GoldButton} from "../common/Buttons/Button.component";
import {getTranslation} from "../../utils/translations/getTranslation";
import {AUTH} from "../../utils/translations/translation";

const Header = (props) => {
    const {
        cart,
        wishes,
        avatar,
        getAsyncWishes,
        close,
        isAuth,
        profilePhoto,
        username,
        uaFlag,
        gbFlag,
        userId,
        lang,
        setLanguage,
        openLoginModal,
        openSignInModal
    } = props

    return (
        <div className={s.header} data-testid="header">
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1 className={s.article}>
                        <Link to={API.articles.path} onClick={close}>medias</Link>
                    </h1>
                    <div className={s.flagWrap}>
                        <img src={uaFlag} className={s.flag} onClick={() => setLanguage('ua')}/>
                        <img src={gbFlag} className={s.flag} onClick={() => setLanguage('en')}/>
                    </div>
                </div>
                <div className={s.userNeeds}>
                    {username && <>
                        <div onClick={close} className={s.profile}>
                            <SmallProfilePhoto profilePhoto={profilePhoto || avatar}/>
                            <Link to={`${API.profile.path}?=${userId}`}>{username}</Link>
                        </div>
                        <Link onClick={close} to={API.wishes.path} className={s.wishes}>
                            {/*<LikedIcon size={25}/>*/}
                            <span onClick={getAsyncWishes} className={s.amount}>{wishes > 0 && wishes}</span>
                        </Link>
                        <Link onClick={close} to={API.cart.path} className={s.cart}>
                            {/*<CartIcon size={25}/> */}
                            <span className={s.amount}>{cart > 0 && cart}</span>
                        </Link>
                    </>}
                </div>
                {!isAuth && <div className={s.right}>
                    <GoldButton height='60px' onClick={openLoginModal}>
                        {getTranslation(AUTH.LOGIN.TITLE, lang)}
                    </GoldButton>
                    <PrimaryButton height='60px' onClick={openSignInModal}>
                        {getTranslation(AUTH.SIGNIN.TITLE, lang)}
                    </PrimaryButton>
                </div>
                }
            </div>
        </div>
    );
};

export default Header;