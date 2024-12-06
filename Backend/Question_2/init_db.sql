-- create studio
CREATE TABLE studios (
    studio_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,  
    location VARCHAR(255)  
);


-- crate a seat
CREATE TABLE seats (
    seat_id INT PRIMARY KEY AUTO_INCREMENT,
    studio_id INT,
    is_available BOOLEAN DEFAULT TRUE,  
    FOREIGN KEY (studio_id) REFERENCES studios(studio_id) ON DELETE CASCADE
);


-- create a customer
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,  
    phone_number VARCHAR(15) 
);


-- create a books
CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    seat_id INT,
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (seat_id) REFERENCES seats(seat_id) ON DELETE CASCADE
);






