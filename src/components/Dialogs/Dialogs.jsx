import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <div className={classes.user + " " + classes.active}>
                    <div className={classes.avatar}>
                        <img src="https://avatarfiles.alphacoders.com/115/115909.jpg" alt="avatar" />
                    </div>
                    <p>Ramūnas</p>    
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://blog.orangecarton.com/wp-content/uploads/2013/05/mona_lisa_iphone.jpg" alt="avatar" />
                    </div>
                    <p>Živilė</p>
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/HK/en/999/HP4312-NPHP00187_00-AVSMOBILET000623/1578121337000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="avatar"/>
                    </div>    
                    <p>Elzė</p>
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-b72be8a/wp-content/uploads/2020/08/Fox-terrier.jpg" alt="avatar"/>
                    </div>    
                    <p>Monmorensis</p>
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://i.pinimg.com/736x/28/b9/8f/28b98f7cdce838278d683d3b809c8f1e.jpg" alt="avatar"/>
                    </div>    
                    <p>Frodo</p>
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="avatar"/>
                    </div>    
                    <p>Harry</p>
                </div>
                <div className={classes.user}>
                    <div className={classes.avatar}>
                        <img src="https://imgix.bustle.com/rehost/2016/9/13/556a0b44-17b5-429c-8954-2dc926bfbc70.jpg" alt="avatar"/>
                    </div>    
                    <p>Ron</p>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    <p>Kai dėl karantino šalys ėmė užsidarinėti, Domas ir Algirdas grįžo į Palangą manydami, kad tai tebus trumpos atostogos pas tėvus. Tačiau kelios savaitės tuščioje Palangoje jų nuomonę pakeitė.</p>
                </div>
                <div className={classes.message}>
                    <p>JAV vyriausybė Indianos universitetui skyrė milijoną dolerių, kad šios studentai galėtų studijuoti interneto memus.</p>
                </div>
                <div className={classes.message}>
                    <p>Džiugu kad dar yra grojančių ir dainuojančių tautiečių... jei kas neturit ir pamatysit, rekomenduoju p.s vinilai dėja tik pas perparduotojus jau</p>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
