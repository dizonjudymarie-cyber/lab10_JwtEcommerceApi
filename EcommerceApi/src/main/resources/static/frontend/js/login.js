async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (!response.ok) {
            throw new Error("Invalid username or password");
        }

        const data = await response.json();

        localStorage.setItem("jwt_token", data.token);

        alert("Login Successful");

        window.location.href = "product.html";

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}