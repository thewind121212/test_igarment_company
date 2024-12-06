

-- query
SELECT c.customer_id, c.first_name, COUNT(b.seat_id) AS seats_booked
FROM customers c
LEFT JOIN bookings b ON c.customer_id = b.customer_id
GROUP BY c.customer_id
HAVING COUNT(b.seat_id) > 3;

