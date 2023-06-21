<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <?php include_once "head.php";?>
    </head>
    <body>
        <?php include_once __DIR__.'/components/navbar.php'; ?>
            <div class="container">
                <div class="row mt-3">
                    <div class="col-md-12 col-sm-12">
                        <?php
                        $pagina = filter_input(INPUT_GET, 'p');

                        if (isset($pagina) || !empty($pagina)) {
                            include_once $pagina . '.php';
                        } else {
                            include_once __DIR__.'/pages/main.php';
                        }
                        ?>
                    </div>
                </div>
            </div>

        <?php include_once "pluggins.php";?>
    </body>
</html>