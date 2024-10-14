function Calculate()
{
    const a = document.getElementById("cislo1").value;
    const b = document.getElementById("cislo2").value;
    const c = document.getElementById("cislo3").value;

    let vysledek;

    if (c == null)
    {
        vysledek = a/b;
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if (b == null)
    {
        vysledek = a/c;
        document.getElementById('vysledek').innerText = vysledek;
    }
    else if (a == null)
    {
        vysledek = a*c;
        document.getElementById('vysledek').innerText = vysledek;
    }

}