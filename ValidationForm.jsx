import { useState } from "react";

export default function ValidationForm() {
    const [FormData, setFormdata] = useState({
        userName: "",
        userAge: "",
        userEmail: "",
        userPassword: "",
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormdata({
            ...FormData,
            [name]: value
        })
    };

    const Validate = () => {
        let newErrors = {};

        if (FormData.userName === "") {
            newErrors.userName = "name is mandatory";
        }

        if (FormData.userAge === "") {
            newErrors.userAge = "age is mandatory";
        } else if (FormData.userAge < 18) {
            newErrors.userAge = " age is mandatory";
        }

        if (FormData.userEmail === "") {
            newErrors.userEmail = "email is mandatory";
        } else if (!FormData.userEmail.endsWith("@gmail.com")) {
            newErrors.userEmail = "email should end with '@gmail.com'"
        }

        if (FormData.userPassword === "") {
            newErrors.userPassword = "password is mandatory"
        } else if (FormData.userPassword.length < 8) {
            newErrors.userPassword = "min 8 characters required"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Validate()) {
            alert('Signup successful');
            setFormdata({
                userName: "",
                userAge: "",
                userEmail: "",
                userPassword: "",
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="userName"
                placeholder="enter name"
                value={FormData.userName}
                onChange={handleChange}
            /> <br />
            {errors.userName && <p>{errors.userName}</p>}

            <input type="number"
                name="userAge"
                placeholder="enter age"
                value={FormData.userAge}
                onChange={handleChange}
            /> <br />
            {errors.userAge && <p>{errors.userAge}</p>}

            <input type="email"
                name="userEmail"
                placeholder="enter email"
                value={FormData.userEmail}
                onChange={handleChange}
            /> <br />
            {errors.userEmail && <p>{errors.userEmail}</p>}

            <input type="password"
                name="userPassword"
                placeholder="enter password"
                value={FormData.userPassword}
                onChange={handleChange}
            /> <br />
            {errors.userPassword && <p>{errors.userPassword}</p>}


            <button type="submit">submit</button>
        </form>
    );
}