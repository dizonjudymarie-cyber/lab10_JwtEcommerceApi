EcommerceApi

A Spring Boot E-Commerce REST API secured with JWT Authentication and integrated with a frontend using JavaScript Fetch API.


Features
- Spring Boot REST API
- JWT Authentication
- Spring Security
- MySQL Database Integration
- User Registration & Login
- Protected API Endpoints
- Fetch API Frontend Integration
- BCrypt Password Encryption
- Stateless Authentication

Technologies Used
- Java 21
- Spring Boot
- Spring Security
- JWT (JJWT)
- MySQL
- Maven
- JavaScript Fetch API
- HTML/CSS

 Project Structure
```text
src/main/java/com/ws101/dizoncolele/EcommerceApi
│
├── config
├── controller
├── dto
├── filter
├── model
├── repository
├── service
└── EcommerceApiApplication.java
```

 Setup Instructions

 1. Clone Repository

```bash
git clone https://github.com/dizonjudymarie-cyber/lab10_JwtEcommerceApi.git
```

---

2. Open Project

Open in:

- VS Code
- IntelliJ IDEA

 3. Configure Database

Create database:

```sql
CREATE DATABASE ecommerce_db;
```

Update:

```properties
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=ws101ws101ws101ws101ws101ws101
jwt.expiration=86400000
```

---

## 4. Install Dependencies

```bash
mvn clean install
```

---

## 5. Run Application

```bash
mvn spring-boot:run
```

Server runs on:

```text
http://localhost:8080
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

### Login

```http
POST /api/auth/login
```

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

 Protected Endpoints

Example:

```http
GET /api/products
```

Header:

```http
Authorization: Bearer YOUR_TOKEN
```

---

 JWT Authentication Flow

1. User logs in
2. Server validates credentials
3. JWT token generated
4. Frontend stores token
5. Token sent in Authorization header
6. Backend validates token
7. Access granted to protected endpoints

---

Frontend Integration

Example login using Fetch API:

```javascript
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
```

---

Security Features

- BCrypt password hashing
- Stateless authentication
- JWT signature validation
- Protected routes
- Spring Security filter chain



Testing

Use:

- Thunder Client
- Browser Fetch API

Future Improvements
- Role-based authorization
- Refresh tokens
- OAuth2 Login
- Google Authentication
- Admin dashboard
- Shopping cart
- Order processing

 Author
Judy Marie Dizon
Shella Mae Colele

 Acknowledgments

Some parts of the implementation and code structure were adapted and referenced from the following resources for educational purposes:

- Spring Security Documentation  
  https://docs.spring.io/spring-security/reference/index.html
- JWT Official Documentation  
  https://jwt.io/introduction
- JJWT Library Documentation  
  https://github.com/jwtk/jjwt
- Spring Boot Documentation  
  https://docs.spring.io/spring-boot/index.html
- MDN Fetch API Documentation  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
The project was customized, integrated, and modified to fit the requirements of the E-Commerce API laboratory activity.
