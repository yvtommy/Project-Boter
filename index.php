<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="opmaak.css" />
    <script src="functie.js" defer></script>
    <title>Boter kaas en eieren</title>
</head>
<!---\\ Het maken van XMLhttpObject kon ik niet omdat vanwege mijn gebrek aan kennis en tijdsnood. 
Ik wilde graag de javascript functie eindresultaat van speler x en o berichten overbrengen naar de PHP database projectBoter,
 maar de PDO verbinding is wel gelukt en de rest heb ik wel afgemaakt wat er als eisen stond op de learningmatter //--->

<!---\\ SESSION / COOKIE //--->
<?php
session_start();  #start de sessie       count = aftellen

if (!isset($_SESSION['count']))
    $_SESSION['count'] = 1;
else $_SESSION['count']++;
?>
<!---\\ PDO connecten via de database ProjectBoter  //--->
<?php
require_once("connectie.php");
?>

<body>
    <!---\\ Boter kaas eieren  //--->
    <div>
        <h1><strong>Boter kaas en Eieren gemaakt door Tommy</strong></h1>
        <!---\\ Speluitleg  //--->
        <h2>
            <strong>
                Het spel bestaat uit 9 vakjes. Je speelt het met twee spelers. Je zet
                kruisjes of nulletjes neer als je aan de beurt bent. Daarom wordt het
                spel ook wel “kruisje-nulletje” genoemd. Het doel van het spel is om
                drie kruisjes of nulletjes op een rij te krijgen. Dat kan van links
                naar rechts zijn, van boven naar beneden of diagonaal.</strong>
        </h2>
    </div>
    <!---\\ BoterKaasEieren //--->
    <div class="rijtje" id="rijtje">
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <!---\\ 3x //--->
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <!---\\ 3x //--->
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <div class="vakje" opslaan-vakje></div>
        <!---\\ 3x //--->
    </div>

    <!---\\ Bericht na het einde van het spel //--->
    <div class="gewonnen-bericht" id="werkende-functie-voor-berichten">
        <div resultaat-tekst-bericht></div>
        <!---\\ Knop //--->
        <button id="opnieuwKnop">Opnieuw</button>
    </div>
    <h3>Je hebt deze website <?php echo ($_SESSION['count']); ?> keer bezocht</h3>
</body>

</html>