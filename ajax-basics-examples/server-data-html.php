<h4>This is a partial HTML dynamic page to serve an AJAX call.</h4>
<p>Date/Time: <?php echo date("m/d/Y h:m:s"); ?></p>
<p>Requested parameter value: <?php echo $_GET["parameter"]==""?"none":$_GET["parameter"] ?></p>