import React, { useEffect, useReducer, useContext, useState } from 'react'
import './Input1.css'
import validator from '../../../Validators/validator';
import { CmsContext } from '../../../context/CmsContext'



export default function InputComponent(props) {
    const [valuObj, setValuObj] = useState('')
    const [isvalid, setIsValid] = useState('')
    const cmsContext = useContext(CmsContext)
    function changeHandler(e) {
        setValuObj(e.target.value)
       setIsValid(validator(e.target.value,props.validPropTo))
        cmsContext.setFlagResetInput(false)
        console.log(valuObj)
        console.log(isvalid);
    }
    useEffect(() => {
        if (!cmsContext.flagResetInput) {
            if (props.id === 'nameMenu') {
                cmsContext.setValue1(valuObj)
                cmsContext.setFlag1(isvalid)
            } else if (props.id === 'nameCode') {
                cmsContext.setValue2(valuObj)
                cmsContext.setFlag2(isvalid)
            } else if (props.id === 'imageUrl') {
                cmsContext.setValue3(valuObj)
                cmsContext.setFlag3(isvalid)
            }

        } else {
            cmsContext.setValue1('')
            cmsContext.setValue2('')
            cmsContext.setValue3('')
            setIsValid('')
            setValuObj('')

        }

    })


    const element =
        props.element === 'input' ?
            (
                <>
                    <div className="login-label-float">
                        <input
                        // className={props.className}
                        className={isvalid ? 'a' : !valuObj ? '' : 'b'}
                            type={props.type}
                            placeholder=""
                            onChange={changeHandler}
                            // value={valuObj.value}
                            value={props.value}
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