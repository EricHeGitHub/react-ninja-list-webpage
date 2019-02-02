import React from 'react';
import ninjaCSS from './Ninjas.css'
import buttonStyle from './style.css.js'

const Ninjas = ({ ninjas, deleteNinja }) => {
    //const {name, age, belt} = this.props;
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20){
    //         return (
    //             <div classNmae = "ninja" key = {ninja.id}>
    //             <div>Name: { ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //         )

    //     }
    //     else{
    //         return null;
    //     }

    // })

    return (
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>Name: {ninja.name}</div>
                            <div>Age: {ninja.age}</div>
                            <div>Belt: {ninja.belt}</div>
                            <button onClick = { () => deleteNinja(ninja.id)} style = {ninjaCSS.button}>Delete Ninja</button>
                        </div>
                    ) : null
                })
            }
        </div>

    )
}

export default Ninjas;