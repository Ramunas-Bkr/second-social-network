import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = () => {

    const usersData = [
        { id: 1, name: 'Ramūnas', avatar: 'https://avatarfiles.alphacoders.com/115/115909.jpg' },
        { id: 2, name: 'Živilė', avatar: 'https://blog.orangecarton.com/wp-content/uploads/2013/05/mona_lisa_iphone.jpg' },
        { id: 3, name: 'Elzė', avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/HK/en/999/HP4312-NPHP00187_00-AVSMOBILET000623/1578121337000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
        { id: 4, name: 'Montmorency', avatar: 'https://nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-b72be8a/wp-content/uploads/2020/08/Fox-terrier.jpg' },
        { id: 5, name: 'Frodo', avatar: 'https://i.pinimg.com/736x/28/b9/8f/28b98f7cdce838278d683d3b809c8f1e.jpg' },
        { id: 6, name: 'Harry', avatar: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg' },
        { id: 7, name: 'Ron', avatar: 'https://imgix.bustle.com/rehost/2016/9/13/556a0b44-17b5-429c-8954-2dc926bfbc70.jpg' },
    ]

    const messageData = [
        { id: 1, message: 'Kai dėl karantino šalys ėmė užsidarinėti, Domas ir Algirdas grįžo į Palangą manydami, kad tai tebus trumpos atostogos pas tėvus. Tačiau kelios savaitės tuščioje Palangoje jų nuomonę pakeitė.'},
        { id: 2, message: 'JAV vyriausybė Indianos universitetui skyrė milijoną dolerių, kad šios studentai galėtų studijuoti interneto memus.'},
        { id: 3, message: 'Džiugu kad dar yra grojančių ir dainuojančių tautiečių... jei kas neturit ir pamatysit, rekomenduoju p.s vinilai dėja tik pas perparduotojus jau'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {usersData.map(u =>
                    <User 
                        id={u.id}
                        name={u.name}
                        image={u.avatar}
                    />)
                }
            </div>
            <div className={classes.messages}>
                {messageData.map(m =>
                    <Message 
                        message={m.message}
                    />)
                }
            </div>
        </div>
    )
}

export default Dialogs
