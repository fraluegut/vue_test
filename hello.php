<!DOCTYPE html>
<html>
  <head>
    <title>How to put PHP in HTML - Simple Example</title>
  </head>
  <body>
    <h1><?php echo "This message is from server side." ?></h1>
    <?php
        function contador()
        {
          $archivo = "contador.txt";
          $f = fopen($archivo, "r");
          $contador = 0;
          if ($f)
          {
            $contador = fread($f, filesize($archivo));
            $contador = $contador + 1;
            fclose($);
          }

          $f = fopen($archivo, "w+");
          fclose($f);
          }

        return $contador;
        }

      $visitante = contador();
      echo "Eres el visitante número: " . $visitante;
    ?>
  </body>
</html>