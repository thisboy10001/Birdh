<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);

    // Ici, tu peux enregistrer ces données dans une base de données ou les traiter
    echo "Merci, " . $name . "! Votre numéro " . $phone . " a bien été enregistré.";
}
?>
