async function fetchProducts() {

    const token = localStorage.getItem("jwt_token");

    try {

        const response = await fetch("http://localhost:8080/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (response.status === 401) {
            throw new Error("Unauthorized access");
        }

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        console.log(products);

    } catch (error) {
        console.error(error);
    }
}