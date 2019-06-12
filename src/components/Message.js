import React from 'react';

const Message = ({ message, pseudo, isUser, time }) => {
    if (isUser(pseudo)) {
        return (
            <div className="user-message">
                le {time}
                <p>
                    {message}
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="not-user-message">
                <strong> {pseudo} </strong>le {time}
                <p> {message}</p>
            </div>
        )
    }
}

export default Message