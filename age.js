function clear()
{
    document.querySelector('.h1').style.color = "hsl(0, 1%, 44%)";
    document.querySelector('.h2').style.color = "hsl(0, 1%, 44%)";
    document.querySelector('.h3').style.color = "hsl(0, 1%, 44%)";

    document.querySelector(".er1").style.display = "none";
    document.querySelector(".er3").style.display = "none";
    document.querySelector(".er5").style.display = "none";

    document.querySelector(".er2").style.display = "none";
    document.querySelector(".er4").style.display = "none";
    document.querySelector(".er6").style.display = "none";


}
function age()
{
    clear();
    let uday = parseInt(document.getElementById('day').value);
    let umonth = parseInt(document.getElementById('month').value);
    let uyear = parseInt(document.getElementById('year').value);

    const d = new Date();
    let cday = d.getDate();
    let cmonth = d.getMonth() + 1;
    let cyear = d.getFullYear();

    if(uday > 31)
    {
        document.querySelector(".er1").style.display = "block";
        document.querySelector('.h1').style.color = "red";
    }   

    if(umonth > 12)
    {
        document.querySelector(".er3").style.display = "block";
        document.querySelector('.h2').style.color = "red";
    }

    if(uyear > cyear)
    {
        document.querySelector(".er5").style.display = "block";
        document.querySelector('.h3').style.color = "red";
    }

    if(uday <= 0)
    {
        document.querySelector('.h1').style.color = "red";
        document.querySelector(".er2").style.display = "block";
    }

    if(umonth <= 0)
    {
        document.querySelector('.h2').style.color = "red";
        document.querySelector(".er4").style.display = "block";
    }

    if(uyear <= 0)
    {
        document.querySelector('.h3').style.color = "red";
        document.querySelector(".er6").style.display = "block";
    }



    let byear =  cyear - uyear;
    let bmonth = cmonth - umonth;
    let bday = cday - uday;


    if(cmonth <= umonth)
    {
        byear -= 1;
        cmonth += 12;
        bmonth = cmonth - umonth;
    }

    if(cday <= uday)
    {
        bmonth -= 1;
        const days = new Date(cyear, cmonth - 1, 0).getDate();
        cday += days;
        bday = cday - uday;
    }

    if(bmonth >= 12)
    {
        byear += 1;
        bmonth -= 12;
    }

    if(uday != 0 && umonth != 0 && uyear != 0)
    {

    document.getElementById('sday').innerHTML = bday;
    document.getElementById('smonth').innerHTML = bmonth;
    document.getElementById('syear').innerHTML = byear;
    }

}