import React from 'react'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

const MyPosts = () => {

    const postsData = [
        { id: 1, likeCount: 42, lolCount: 15, heartCount: 21, sadCount: 0, angryCount: 5, message: 'Rusijos magnatas Olegas Deripaska, kuriam JAV taiko sankcijas, per nedidelį Latvijos banką pervedė daugiau kaip 3 mlrd. įtartinos kilmės JAV dolerių!'},
        {
            id: 2, likeCount: 5, lolCount: 87, heartCount: 0, sadCount: 0, angryCount: 125, message: `Daugiau nei 500.000 tibetiečių yra verčiami dirbti "perauklėjimo stovyklose". Viso tibete gyvena 3.18 milijono žmonių t.y. kas šeštas tibetietis yra įkalintas.
Apart šitų darbo stovyklų egzistuoja koncentracijos stovyklos, kur yra kalinami 2.000.000 + žmonių (pagrinde Uigūrų tautybės žmonės, bei kitos etninės / religinės mažumos). 
Australijos politikai reiškia susirūpinimą ir skatina boikotuoti Žiemos Olimpines žaidynes Kinijoje, kurios numatytos 2022 metais.`},
        { id: 3, likeCount: 5, lolCount: 2, heartCount: 0, sadCount: 0, angryCount: 5, message: `Sveiki. Parduodame “Teenage mutant ninja turtles: Change is constant” ir “Teenage mutant ninja turtles: City fall”. Plius, papildymas “Loner Ralph (kickstarter expansion)”. Lietuvoje šio žaidimo kol kas dar nėra pirkti:) Idealios būklės. 130€`},
    ]

    return (
        <div>
            <NewPost />
            {postsData.map(p => (
                <Post
                    message={p.message} 
                    likeCount={p.likeCount}
                    lolCount={p.lolCount}
                    heartCount={p.heartCount}
                    sadCount={p.sadCount}
                    angryCount={p.angryCount}
                />))
            }
        </div>
    )
}

export default MyPosts
