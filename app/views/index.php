<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../assets/stylesheets/style.css" rel="stylesheet">
  <script src="../assets/javascripts/javascript.js"></script>
  <title>Interpret</title>
</head>
<body>
  <div class="main-container">
    <div class="drop-down-button-wrapper">
      <span class="code-type">Binary</span> 
      <span class="dots">•••</span>
    </div>
    <div class="result-container">
      <span id="resultContentWrapper"></span>
    </div>
    <div class="input-container">
      <textarea id="inputedValue" placeholder="Type binary or string..."></textarea>
      <input type="hidden" id="delay">
      <button id="interpretBtn" class="translate-button">Translate</button>
    </div>
  </div>
</body>
</html>