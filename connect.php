<?php

$firstName = $_POST['pname'];
$nameLength = strlen($firstName);
$secondName = $_POST['psurname'];
$surnameLength = strlen($secondName);
$pPesel = $_POST['pesel'];
$peselLength = strlen($pPesel);
$pYear = $_POST['pyear'];
$yearLength = strlen($pYear);
$pMONTH = $_POST['pmonth'];
$monthLength = strlen($pMONTH);
$pDAY = $_POST['pday'];
$dayLength = strlen($pDAY);

$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'projekt'
);
if ($nameLength <= 20 && $nameLength >= 3 && $surnameLength <= 30 && $surnameLength >= 3 && $peselLength == 11 && $yearLength == 4 && $monthLength == 2 && $dayLength == 2) {
    $stmt = $conn->prepare("INSERT INTO baza(imie, nazwisko, pesel, rok, miesiac, dzien) VALUES(?,?,?,?,?,?)");
    $stmt->bind_param("ssssss", $firstName, $secondName, $pPesel, $pYear, $pMONTH, $pDAY);
    $stmt->execute();
    echo "Wysłano do bazy danych";
    $stmt->close();
    $conn->close();
} else {
    echo "Niepoprawnie wprowadzone dane!!!";
}