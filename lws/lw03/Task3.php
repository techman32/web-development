<?php
header("Content-Type: text/plain");
$password = $_GET['password'];
$length = strlen($password);

if (!(ctype_alnum($password)))
{
    echo "Не является паролем.";
} 
else 
{
    $safety += 4 * $length;

    for ($i = 0; $i < $length; $i++)
    {
        if (is_numeric($password[$i]))
        {
            $count++;
        }
    }

    $safety += $count * 4;
    $count = 0;

    for ($i = 0; $i < $length; $i++)
    {
        if (ctype_upper($password[$i]))
        {
            $count++;
        }
    }

    if ($count != 0)
    {
        $safety += ($length - $count) * 2;
    }

    $count = 0;

    for ($i = 0; $i < $length; $i++)
    {
        if (ctype_lower($password[$i]))
        {
            $count++;
        }
    }

    if ($count != 0)
    {
        $safety += ($length - $count) * 2;
    }

    $count = 0;

    if (ctype_alpha($password))
    {
        $safety -= $length;
    }

    if (ctype_digit($password))
    {
        $safety -= $length;
    }

    $result = count_chars($password);

    foreach ($result as $val) 
    {
        if ($val > 1) 
        {
            $safety -= $val;
        }
    }
    	
    echo 'Уровень надежности пароля: ' . $safety;
}		
?>