import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectToken, selectIsEditing, setIsEditing, setUser } from "../app/userSlice"
import { useRef } from "react"
import { putUserName } from "../app/userApi"


const Welcome = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const isEditing = useSelector(selectIsEditing)
    const token = useSelector(selectToken)
    const form = useRef()

    const updateUsername = e => {
        e.preventDefault()

        putUserName(token, form.current[0].value).then(data => dispatch(setUser(data.body)))

        dispatch(setIsEditing(false))
    }

    return (
        <div className="header welcome">
            <h2>
                Welcome back
                <br />
                {user?.firstName} {user?.lastName} !
            </h2>
            {
                isEditing ?
                    <form
                        id="changeUserData"
                        ref={form}
                        onSubmit={(e) => updateUsername(e)}
                    >
                        <div className="input-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" placeholder={user?.userName} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                disabled
                                readOnly
                                value={user?.firstName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                disabled
                                readOnly
                                value={user?.lastName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <button className="sign-in-button" type="submit">
                                Save
                            </button>
                            <button
                                className="sign-in-button"
                                type="reset"
                                onClick={() => dispatch(setIsEditing(false))}
                            >
                                Cancel
                            </button>
                        </div>
                    </form> :
                    <button className="edit-button" onClick={() => dispatch(setIsEditing(true))}>
                        Edit Name
                    </button>
            }

        </div>
    )
}

export default Welcome