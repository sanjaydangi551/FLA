<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "db_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

$sql = "INSERT INTO user_details (full_name, email, phone, comments)
        VALUES ('$full_name', '$email', '$phone', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
