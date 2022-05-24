function prime(n) {
    if (typeof n === 'number')
        isSinglePrime(n); 
    else if (Array.isArray(n))
        for (let i = 0; i < n.length; i++)
            if (typeof n[i] === 'number') 
                isSinglePrime(n[i]);
            else 
                console.log(n[i] + ' is not a number');
    else
        console.log(n + ' is not a number, neither an array');
  
    function isSinglePrime(x) {
        let isPrime = true;
  
        if (!Number.isInteger(x) || x <= 1)
            isPrime = false;
  
        for (let i = 2; i < x && isPrime; i++)
            if (x % i === 0) {
                isPrime = false;
                break;
            }
  
        if (isPrime)
            console.log(x + ' is a prime number');
        else
            console.log(x + ' is not a prime number');
    }
}