<html>
<p hidden>THIS FILE IS NOT IN USE</p>

<?php
// Enable file uploads
ini_set('file_uploads', '1');
include('../templates/template.html');
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
    $target_dir = "./data/uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "<h5 class='echoed'>Sorry, file already exists.</h5>";
        $uploadOk = 0;
    }

    // Check file size (limit to 2GB)
    if ($_FILES["fileToUpload"]["size"] > 200000000) {
        echo "<h5 class='echoed'>Sorry, your file is too large.</h5>";
        $uploadOk = 0;
    }

    // If everything is ok, try to upload file
    if ($uploadOk) {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $uploadedFileName = htmlspecialchars(basename($_FILES["fileToUpload"]["name"]));
            echo "<h5 class='echoed'>The file $uploadedFileName has been uploaded.</h5>";
            // Constructing the link to the uploaded file
            $fileLink = "https://libertytranscripts2.w3spaces.com/data/uploads/$uploadedFileName";
            echo "<p class='echoed'><a href='$fileLink'>View $uploadedFileName</a></p>";

            // the message
            $msg = $fileLink;

            // use wordwrap() if lines are longer than 70 characters
            $msg = wordwrap($msg,70);

            // send email
            $recipient = $_POST['email'];
            mail($recipient,"My subject",$msg);
        } else {
            echo "<h5 class='echoed'>Sorry, there was an error uploading your file.</h5>";
        }
    }
}
?>
</html>