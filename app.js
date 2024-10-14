function Calculate()
{
    const a = parseFloat(document.getElementById("cislo1").value);
    const b = parseFloat(document.getElementById("cislo2").value);
    const c = parseFloat(document.getElementById("cislo3").value);

    const cVys = 0;
    const bVys = 0;
    const aVys = 0;

    let vysledek = 0;

    if (isNaN(c) && !isNaN(a) && !isNaN(b))
    {
        vysledek = a/b;
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if (isNaN(b) && !isNaN(a) && !isNaN(c))
    {
        vysledek = a/c;
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if (isNaN(a) && !isNaN(c) && !isNaN(b))
    {
        vysledek = b*c;
        document.getElementById('vysledek').innerText = vysledek;
    }
}