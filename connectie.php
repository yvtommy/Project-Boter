<?php
$servername = "localhost";
$dbname = "ProjectBoter";
$username = "root";
$password = "root";
// MENEER BERKIEN OF WELKE DOCENT MIJN PROJECT NAKIJKT, MAMP = MET ROOT, XAMP = ZONDER ROOT als wachtwoord \\
try {
    $conn = new PDO(
        "mysql:host=$servername;dbname=$dbname",
        $username,
        $password
    );

    // Testfase connectie voor de ProjectBoter\\
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Verbinding met de database is gelukt <br />";
} catch (PDOException $e) {
    echo "Verbinding met de batabase is mislukt" . $e->getMessage();
}
