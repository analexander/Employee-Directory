import React from "react";
//import "../styles/DataBody.css";
function DataBody({ users }) {
    
    function formatDate(date) {
        const dateSlice = date.slice(0,10);
        const splitDate = dateSlice.split("-");
        const year = splitDate[0];
        const month = splitDate[1];
        const day = splitDate[2].split("T");
        const formatDate = [month, day, year].join("-")
        return formatDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img
                                    src={picture.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} target="_blank" rel="noreferrer">
                                    {email}
                                </a>
                            </td>
                            <td data-th="dob" className="align-middle">
                                {formatDate(dob.date)}
                            </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}

export default DataBody;