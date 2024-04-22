import React, { useEffect, useReducer, useContext, useState } from 'react'
import './Input1.css'
import validator from '../../../Validators/validator';
import { MenuContext } from '../../../context/CmsMaimMenuContext'
import { ItemContext } from '../../../context/CmsMaimMenuContext'
import {MainMenuContext} from '../../../context/CmsMaimMenuContext';


function ChangValuReducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action.validPropIn),
            }
           
    }
}

export default function InputComponent(props) {
    const [valuObj, dispatch2] = useReducer(ChangValuReducer, { value: '', isValid: false, method: '' })
    const menuContext = useContext(MenuContext)
    const itemContext = useContext(ItemContext)
    const mainMenuContext = useContext(MainMenuContext)

    function changeHandler(e) {
        dispatch2({
            type: 'CHANGE',
            value: e.target.value,
            validPropIn: props.validPropTo,
        })
    }
    useEffect(() => {
        if (props.id === 'nameMenu') {
            menuContext.setValue1(valuObj.value)
            menuContext.setFlag1(valuObj.isValid)
        } else if (props.id === 'menuCode') {
            menuContext.setValue2(valuObj.value)
            menuContext.setFlag2(valuObj.isValid)
        } else if (props.id === 'imageUrl') {
            menuContext.setValue3(valuObj.value)
            menuContext.setFlag3(valuObj.isValid)
        }
        else if (props.id === 'menuItem') {
            itemContext.setValue1(valuObj.value)
            itemContext.setFlag1(valuObj.isValid)
        } else if (props.id === 'itemOrderValue') {
            itemContext.setValue2(valuObj.value)
            itemContext.setFlag2(valuObj.isValid)
        } else if (props.id === 'itemPageUrl') {
            itemContext.setValue3(valuObj.value)
            itemContext.setFlag3(valuObj.isValid)
        } else if (props.id === 'mainMenuid') {
            itemContext.setValue4(valuObj.value)
            itemContext.setFlag4(valuObj.isValid)
        } else if (props.id === 'Meta') {
            itemContext.setValue5(valuObj.value)
            itemContext.setFlag5(valuObj.isValid)
        } else if (props.id === 'itemImageUrl') {
            itemContext.setValue6(valuObj.value)
            itemContext.setFlag6(valuObj.isValid)
        }
    })
useEffect(()=>{
    dispatch2({
        type: 'CHANGE',
        value: '',
        validPropIn: props.validPropTo,
    })},
    [mainMenuContext.flagResetInput]
) 



    const element =
        props.element === 'input' ?
            (
                <>
                    <div className="login-label-float">
                        <input
                            value={valuObj.value}
                            type={props.type}
                            className={props.className}
                            onChange={changeHandler}
                            placeholder=""
                        // className={isvalid ? 'a' : !valuObj ? '' : 'b'}


                        />
                        <label>{props.label}</label>
                    </div>

                    {/* 
                    <input
                        value={valuObj.value}
                        type={props.type}
                        placeholder={props.placeholder}
                        className={props.className}
                        onChange={changeHandler}

                    /> */}
                </>) :
            (<textarea
                placeholder={props.placeholder}
                className={props.className}

            />

            )


    return (
        <div>{element}
        </div>


    )
}
// const [counter, dispatch] = useReducer(counterReducer, { count: 0,flag:false })
// function counterReducer(state, action) {
//     console.log(state.count);
//     console.log(state.flag);
//     switch (action.type) {
//         case 'ADD':
//             return { count: state.count + 1,flag:!state.flag }
//         case 'MINES':
//             return { count: state.count - 1 ,flag:false}

//             default:
//                 return(null)
//     }
// }
///////////////////////////////////////////////
//    <div>
//              <h1>{counter.count}</h1>
//             <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
//             <button onClick={() => dispatch({ type: 'MINES' })} >mines</button>
//             <input type="text"
//             onChange={changeHandler}
//             value={valuObj.value}
//             />
//         </div>