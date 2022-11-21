
function topdf() {
    var doc = new jsPDF();
    let n=0;
    let l=0;
    let p=0;
    let e=0;
    let d=0;
    var phoneno = /^\d{10}$/;


    if (document.getElementById("name").value=="")
    n=1;
    if (document.getElementById("Lname").value=="")
    l=1;
    if (!document.getElementById("phone").value.match(phoneno))
    p=1;
    let emailID=document.getElementById("email").value;
      let  atpos = emailID.indexOf("@");
       let dotpos = emailID.lastIndexOf(".");    
     if (atpos < 1 || ( dotpos - atpos < 2 )) 
     e=1;
    
    if (document.getElementById("date").value=="")
    d=1;


    if (n==0 && l==0 && p==0 && e==0 && d==0){


    doc.text(20,10,"Potvrda zahteva");
    doc.text(20,20,"Ime: " + document.getElementById("name").value);
    doc.text(20,30,"Prezime: " + document.getElementById("Lname").value);
    doc.text(20,40,"Telefon: " +document.getElementById("phone").value);
    doc.text(20,50,"Email: "+ document.getElementById("email").value);
    doc.text(20,60,"Datum: "+document.getElementById("date").value);
    doc.text(20,70,"Poruka: "+document.getElementById("message").value);

    doc.save("ZakOutput.pdf");
    }else{
        let returnMess="";
        if (n==1) returnMess=returnMess + "Unesite ime, ";
        if (l==1) returnMess=returnMess + "Unesite prezime, ";
        if (p==1) returnMess=returnMess + "Unesite dobar telefon(10 cifara), ";
        if (e==1) returnMess=returnMess + "Unesite dobar email, ";
        if (d==1) returnMess=returnMess + "Unesite datum ";
        alert(returnMess);


    }

    
}

function replaceContentYoga(){

    var container = document.getElementById("yogaa");

     
     
    var myvar = '<div class="container">'+
    ''+
    '      '+
    '          <!-- Project One -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/vinyasa.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Viniasa Joga</h3>'+
    '              <p>Viniasa je stil joge okarakterisan zbližavanjem položaja zajedno, tako da se neprimetno krećete od jednog do drugog, koristeći disanje. Često se naziva „protočna“ joga, ponekad se meša sa „moćnom jogom“.</p>'+
    '              <a class="btn btn-primary" href="ViniasaYogaList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Two -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/hatha.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Hata Joga</h3>'+
    '              <p>Hata joga je put telesne kontrole kroz položaje tela (asane) i tehnike disanja (pranajamu), a smatra se da je to priprema za rađa jogu. Ova vrsta joge podrazumieva vežbanje spoljašnjeg i unutrašnjeg pročišćavanja, a za to je potrebna samodisciplina.</p>'+
    '              <a class="btn btn-primary" href="HataYogaList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Three -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/restorative.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Restorativna Joga</h3>'+
    '              <p>Restorativna joga je vežba koja usporava i otvara vaše telo pasivnim istezanjem. Ako krenete u restorativne časove, teško da ćete se uopšte kretati, radeći samo nekoliko položaja tokom sat vremena.</p>'+
    '              <a class="btn btn-primary" href="RestYogaList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '      '+
    '        </div>'+
    '        <!-- /.container -->';
        
    
        
    
    container.innerHTML=myvar;


}

function replaceContentPilates(){

    var container = document.getElementById("yogaa");

     
     
    var myvar = '<div class="container">'+
    ''+
    '      '+
    '          <!-- Project One -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/classical.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Klasicni Pilates</h3>'+
    '              <p>U originalnoj klasičnoj pilates metodi postoji redosled posla, koji je osmišljen tako da pomera telo čitavim rasponom pokreta.</p>'+
    '              <a class="btn btn-primary" href="KlasicniPIlatesList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Two -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/stott.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Stot Pilates</h3>'+
    '              <p>Stot Pilates nudi različite nivoe kretanja - neophodne, srednje i napredne - kako bi se zadovoljile potrebe svih vežbi u vežbanju, od rehabilitacije do elitnog sportiste.</p>'+
    '              <a class="btn btn-primary" href="StotPilatesList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Three -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/reformer.jpg" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Pilates Reformator</h3>'+
    '              <p>Pilates reformator je neverovatan komad aparata za razliku od drugih koji vam pomaže da pronađete dužinu i prostor u telu dok ste pod opružnim naponom.</p>'+
    '              <a class="btn btn-primary" href="ReformatorPilatesList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '      '+
    '        </div>'+
    '        <!-- /.container -->';
        
    
        
    
    container.innerHTML=myvar;


}

function replaceContentCore(){

    var container = document.getElementById("yogaa");

     
     
    var myvar = '<div class="container">'+
    ''+
    '      '+
    '          <!-- Project One -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/upper.jpg"height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Gornji trbušnjaci</h3>'+
    '              <p>Trening koji obuhvata rad na gornjim trbušnjacima.</p>'+
    '              <a class="btn btn-primary" href="GornjiABSList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Two -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/side.jpg" height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Bočni trbušnjaci</h3>'+
    '              <p>Trening koji obuhvata rad na bočnim trbušnjacima.</p>'+
    '              <a class="btn btn-primary" href="BocniABSList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Three -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/lower.jpg"height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Donji trbušnjaci</h3>'+
    '              <p>Trening koji obuhvata rad na donjim trbušnjacima.</p>'+
    '              <a class="btn btn-primary" href="DonjiABSList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '      '+
    '        </div>'+
    '        <!-- /.container -->';
        
    
        
    
    container.innerHTML=myvar;


}

function replaceContentCardio(){

    var container = document.getElementById("yogaa");

     
     
    var myvar = '<div class="container">'+
    ''+
    '      '+
    '          <!-- Project One -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/running.jpg"height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Trčanje</h3>'+
    '              <p>Trening trčanja različitim brzinama.</p>'+
    '              <a class="btn btn-primary" href="TrcanjeList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Two -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/cycling.jpg" height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>Bicikl</h3>'+
    '              <p>Trening vožnje bicikla.</p>'+
    '              <a class="btn btn-primary" href="BiciklList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '          <!-- Project Three -->'+
    '          <div class="row">'+
    '            <div class="col-md-7">'+
    '              <a href="#">'+
    '                <img class="img-fluid rounded mb-3 mb-md-0" src="images/HIIT.jpg"height="300" alt="">'+
    '              </a>'+
    '            </div>'+
    '            <div class="col-md-5">'+
    '              <h3>HIIT</h3>'+
    '              <p>Trening visokog intenziteta u trajanju od oko 20 minuta</p>'+
    '              <a class="btn btn-primary" href="HIITList.html">Pogledaj Termine'+
    '                <span class="glyphicon glyphicon-chevron-right"></span>'+
    '              </a>'+
    '            </div>'+
    '          </div>'+
    '          <!-- /.row -->'+
    '      '+
    '          <hr>'+
    '      '+
    '      '+
    '        </div>'+
    '        <!-- /.container -->';
        
    
        
    
    container.innerHTML=myvar;


}

function sortbyName(x,y,z,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){

    var container = document.getElementById("content1");

     
     if ((y<z)&&(x<y)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
                x3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
            y3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

     }else if ((x<y)&&(z<x)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((y<x) && (y>z)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((x<z) && (y>z)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }
     else if ((x<z) && (y<x)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

    }
    else if ((x>z) && (y<z)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
y3+
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
x3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

    }
    

	

    container.innerHTML=myvar;


}

function sortbyDuration(x,y,z,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){

    var container = document.getElementById("content1");
    let x11=parseFloat(x1.substring(15,18));
    let y11=parseFloat(y1.substring(15,18));
    let z11=parseFloat(z1.substring(15,18));
  
     
     if ((y11<z11)&&(x11<y11)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
                x3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
            y3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

     }else if ((x11<y11)&&(z11<x11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((y11<x11) && (y11>z11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((x11<z11) && (y11>z11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }
     else if ((x11<z11) && (y11<x11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

    }
    else if ((x11>z11) && (y11<z11)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
y3+
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
x3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

    }
    

	

    container.innerHTML=myvar;


}
function sortbyDifficulty(x,y,z,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){

    var container = document.getElementById("content1");
    let x11=parseInt(x2.charAt(15));
    let y11=parseInt(y2.charAt(15));
    let z11=parseInt(z2.charAt(15));
  
     
     if ((y11<z11)&&(x11<y11)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
                x3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
            y3+ 
            '" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

     }else if ((x11<y11)&&(z11<x11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((y11<x11) && (y11>z11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }else if ((x11<z11) && (y11>z11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

     }
     else if ((x11<z11) && (y11<x11)){
        var myvar = '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        y3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    y+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    y1+
                    '</h4> <br>'+
        '              <h4>'+
                        y2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '             <img class="img-fluid rounded" src="'+
        x3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    x+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    x1+
                    '</h4> <br>'+
        '              <h4>'+
                        x2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   '+
        ''+
        '<!-- Blog Post -->'+
        '    <div class="card mb-4">'+
        '      <div class="card-body">'+
        '        <div class="row">'+
        '          <div class="col-lg-6">'+
        '            <a href="#">'+
        '              <img class="img-fluid rounded" src="'+
        z3+ 
    '" alt="">'+
        '            </a>'+
        '          </div>'+
        '          <div class="col-lg-6">'+
        '            <h2 class="card-title">'+
                    z+
                    '</h2>'+
        '            <hr>'+
        '            <p class="card-text"><h4>'+
                    z1+
                    '</h4> <br>'+
        '              <h4>'+
                        z2+
                    '</h4>'+
        '            </p>'+
        '            <br>'+
        '            <br>'+
        '            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    <br>   ';

    }
    else if ((x11>z11) && (y11<z11)){
        var myvar = '<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
y3+
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            y+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            y1+
            '</h4> <br>'+
'              <h4>'+
                y2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
y4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
z3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            z+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            z1+
            '</h4> <br>'+
'              <h4>'+
                z2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
z4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   '+
''+
'<!-- Blog Post -->'+
'    <div class="card mb-4">'+
'      <div class="card-body">'+
'        <div class="row">'+
'          <div class="col-lg-6">'+
'            <a href="#">'+
'              <img class="img-fluid rounded" src="'+
x3+ 
'" alt="">'+
'            </a>'+
'          </div>'+
'          <div class="col-lg-6">'+
'            <h2 class="card-title">'+
            x+
            '</h2>'+
'            <hr>'+
'            <p class="card-text"><h4>'+
            x1+
            '</h4> <br>'+
'              <h4>'+
                x2+
            '</h4>'+
'            </p>'+
'            <br>'+
'            <br>'+
'            <a href="'+
x4+
'" class="btn btn-primary">Detalji →</a>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'    <br>   ';

    }
    

	

    container.innerHTML=myvar;


}


function init(){
    var today = new Date();
    var dd = String(today.getDate()+1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var res=0;
    var comm=0;
    var hata=[45];
    var klasik=[55];
    var reformator=[45];
    var gornji=[35];
    var donji=[45];
    var bocni=[45];
    var bicikl=[45];
    var trcanje=[45];
    var hiit=[45];
    var viniasa=[45];
    var restorativna=[45];
    var stot=[45];

        if (sessionStorage.getItem('Ohata')==null){
         sessionStorage.setItem('Ohata',hata);
         sessionStorage.setItem(400,4.5);
        }

        if (sessionStorage.getItem('Oklasik')==null){
         sessionStorage.setItem('Oklasik',klasik);
         sessionStorage.setItem(401,5);
        }

         if (sessionStorage.getItem('Oreformator')==null){
         sessionStorage.setItem('Oreformator',reformator);
         sessionStorage.setItem(402,4.5);
         }

         if (sessionStorage.getItem('Ogornji')==null){
         sessionStorage.setItem('Ogornji',gornji);
         sessionStorage.setItem(403,4);
         }

         if (sessionStorage.getItem('Odonji')==null){
         sessionStorage.setItem('Odonji',donji);
         sessionStorage.setItem(404,4.5);
         }

         if (sessionStorage.getItem('Obocni')==null){
         sessionStorage.setItem('Obocni',bocni);
         sessionStorage.setItem(405,4.5);
         }

         if (sessionStorage.getItem('Obicikl')==null){
         sessionStorage.setItem('Obicikl',bicikl);
         sessionStorage.setItem(406,4.5);
         }

         if (sessionStorage.getItem('Otrcanje')==null){
         sessionStorage.setItem('Otrcanje',trcanje);
         sessionStorage.setItem(407,4.5);
         }

         if (sessionStorage.getItem('Ohiit')==null){
         sessionStorage.setItem('Ohiit',hiit);
         sessionStorage.setItem(408,4.5);
         }

         if (sessionStorage.getItem('Oviniasa')==null){
         sessionStorage.setItem('Oviniasa',viniasa);
         sessionStorage.setItem(409,4.5);
         }

         if (sessionStorage.getItem('Orestorativna')==null){
         sessionStorage.setItem('Orestorativna',restorativna);
         sessionStorage.setItem(410,4.5);
         }

         if (sessionStorage.getItem('Ostot')==null){
         sessionStorage.setItem('Ostot',stot);
         sessionStorage.setItem(411,4.5);
         }


    if (sessionStorage.getItem('commnum')==null)
         sessionStorage.setItem('commnum',res);

    if (sessionStorage.getItem('reserved')==null)
         sessionStorage.setItem('reserved',res);

    sessionStorage.setItem('dd', dd);
    sessionStorage.setItem('mm', mm);
    sessionStorage.setItem('yyyy', yyyy);



    
    let x=0;
  
    let y=0;
    
    let z=0;
    
    
    

    for (i=400;i<412;i++){

        if (parseFloat(sessionStorage.getItem(i))>x){
            z=y;
            y=x;
            x=parseFloat(sessionStorage.getItem(i));
            
        }
        else if(parseFloat(sessionStorage.getItem(i))>y){
            z=y;
            y=parseFloat(sessionStorage.getItem(i));
            
        }
        else if (parseFloat(sessionStorage.getItem(i))>z){
            z=parseFloat(sessionStorage.getItem(i));
           
        }

    }

    for(var i=0, len=sessionStorage.length; i<len; i++) {
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);
        if(value==x){
        var x1=key;
        break;
        }
    }
    for(var i=0, len=sessionStorage.length; i<len; i++) {
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);
        if((value==y)&&(key!=x1)){
        var y1=key;
        break;
        }
    }
    for(var i=0, len=sessionStorage.length; i<len; i++) {
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);
        if((value==z)&&(key!=x1)&&(key!=y1)){
        var z1=key;
        break;
        }
    }

    let ime="";
    let slika="";
    let ocena="";
    let id="";

    switch(x1){
            case '400' : 
                 ime="Hata Joga";
                 slika="images/hatha.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;

            case '401' : 
                 ime="Klasični Pilates";
                 slika="images/classical.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break; 
            case '402' : 
                 ime="Pilates Reformator";
                 slika="images/reformer.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break; 
                case '403' : 
                 ime="Gornji Trbušnjaci";
                 slika="images/upper.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '404' : 
                 ime="Donji Trbušnjaci";
                 slika="images/lower.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '405' : 
                 ime="Bočni Trbušnjaci";
                 slika="images/side.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '406' : 
                 ime="Bicikl";
                 slika="images/cycling.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '407' : 
                 ime="Trčanje";
                 slika="images/running.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '408' : 
                 ime="HIIT";
                 slika="images/hiit.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '409' : 
                 ime="Viniasa Joga";
                 slika="images/vinyasa.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '410' : 
                 ime="Restorativna Joga";
                 slika="images/restorative.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;
                case '411' : 
                 ime="Stot Pilates";
                 slika="images/stott.jpg"
                 ocena=x;
                 id="1";
                featured3(ime,slika,ocena,id);
                break;



    }
    switch(y1){
        case '400' : 
             ime="Hata Joga";
             slika="images/hatha.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;

        case '401' : 
             ime="Klasični Pilates";
             slika="images/classical.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break; 
        case '402' : 
             ime="Pilates Reformator";
             slika="images/reformer.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break; 
            case '403' : 
             ime="Gornji Trbušnjaci";
             slika="images/upper.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '404' : 
             ime="Donji Trbušnjaci";
             slika="images/lower.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '405' : 
             ime="Bočni Trbušnjaci";
             slika="images/side.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '406' : 
             ime="Bicikl";
             slika="images/cycling.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '407' : 
             ime="Trčanje";
             slika="images/running.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '408' : 
             ime="HIIT";
             slika="images/hiit.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '409' : 
             ime="Viniasa Joga";
             slika="images/vinyasa.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '410' : 
             ime="Restorativna Joga";
             slika="images/restorative.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;
            case '411' : 
             ime="Stot Pilates";
             slika="images/stott.jpg"
             ocena=y;
             id="2";
            featured3(ime,slika,ocena,id);
            break;



}
switch(z1){
    case '400' : 
         ime="Hata Joga";
         slika="images/hatha.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;

    case '401' : 
         ime="Klasični Pilates";
         slika="images/classical.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break; 
    case '402' : 
         ime="Pilates Reformator";
         slika="images/reformer.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break; 
        case '403' : 
         ime="Gornji Trbušnjaci";
         slika="images/upper.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '404' : 
         ime="Donji Trbušnjaci";
         slika="images/lower.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '405' : 
         ime="Bočni Trbušnjaci";
         slika="images/side.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '406' : 
         ime="Bicikl";
         slika="images/cycling.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '407' : 
         ime="Trčanje";
         slika="images/running.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '408' : 
         ime="HIIT";
         slika="images/hiit.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '409' : 
         ime="Viniasa Joga";
         slika="images/vinyasa.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '410' : 
         ime="Restorativna Joga";
         slika="images/restorative.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;
        case '411' : 
         ime="Stot Pilates";
         slika="images/stott.jpg"
         ocena=z;
         id="3";
        featured3(ime,slika,ocena,id);
        break;



}

        
    




}

function featured3(ime,slika,ocena,id){
    
var myvar = '<div class="card h-100">'+
'          <h4 class="card-header navbarcolor" style="color:white;">'+
ime+
'</h4>'+
'          <div class="card-body navbarcolor">'+
'            <a href="#"></a><img class="card-img-top" src="'+
slika+
'" height="200">'+
'</a>'+
'          </div>'+
'          <div class="card-footer gradecolor" style="font-family:geneva; font-size:160%;"><center>'+
'            Ocena: '+
ocena+
'          </center></div>'+
'        </div>';
document.getElementById(id).innerHTML=myvar;

}

function YogaViniasaLoad(){

    let ret="t0";
    let but="b0";
    let time="16:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyV="bodyViniasa";
    
    if (sessionStorage.getItem(bodyV)!=null){   
        let telo=sessionStorage.getItem(bodyV); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "19:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';

        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyV+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)  
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
   
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyV,body.innerHTML);


}

function YogaHataLoad(){
    let ret="t0";
    let but="b0";
    let time="17:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyH="bodyHata";
    
    if (sessionStorage.getItem(bodyH)!=null){   
        let telo=sessionStorage.getItem(bodyH); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
        
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "20:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyH+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
   
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyH,body.innerHTML);


}

function YogaRestLoad(){
    let ret="t0";
    let but="b0";
    let time="18:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyR="bodyRest";
    
    if (sessionStorage.getItem(bodyR)!=null){   
        let telo=sessionStorage.getItem(bodyR); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "21:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyR+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)  
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
   
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyR,body.innerHTML);


}

function KlasicniPilatesLoad(){
    let ret="t0";
    let but="b0";
    let time="11:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyCP="bodyClassic";
    
    if (sessionStorage.getItem(bodyCP)!=null){   
        let telo=sessionStorage.getItem(bodyCP); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "13:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyCP+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)  
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
  
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyCP,body.innerHTML);


}
function ReformatorPilatesLoad(){
    let ret="t0";
    let but="b0";
    let time="12:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyRP="bodyReformator";
    
    if (sessionStorage.getItem(bodyRP)!=null){   
        let telo=sessionStorage.getItem(bodyRP); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "14:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyRP+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)    
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
   
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyRP,body.innerHTML);


}
function StotPilatesLoad(){
    let ret="t0";
    let but="b0";
    let time="11:00";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodySP="bodyStot";
    
    if (sessionStorage.getItem(bodySP)!=null){   
        let telo=sessionStorage.getItem(bodySP); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
        
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "20:00";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodySP+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
 
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodySP,body.innerHTML);


}

function GornjiABSLoad(){
    let ret="t0";
    let but="b0";
    let time="08:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyGC="bodyGornji";
    
    if (sessionStorage.getItem(bodyGC)!=null){   
        let telo=sessionStorage.getItem(bodyGC); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "09:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyGC+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1) 
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
    
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyGC,body.innerHTML);


}

function DonjiABSLoad(){
    let ret="t0";
    let but="b0";
    let time="08:00";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyDC="bodyDonji";
    
    if (sessionStorage.getItem(bodyDC)!=null){   
        let telo=sessionStorage.getItem(bodyDC); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "09:00";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyDC+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
  
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyDC,body.innerHTML);


}

function BocniABSLoad(){
    let ret="t0";
    let but="b0";
    let time="07:30";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyBC="bodyBocni";
    
    if (sessionStorage.getItem(bodyBC)!=null){   
        let telo=sessionStorage.getItem(bodyBC); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "10:30";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyBC+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (availableSlots!=0)
        if((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
   
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyBC,body.innerHTML);


}

function TrcanjeLoad(){
    let ret="t0";
    let but="b0";
    let time="22:00";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyT="bodyTrcanje";
    
    if (sessionStorage.getItem(bodyT)!=null){   
        let telo=sessionStorage.getItem(bodyT); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "23:00";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;
      
    


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyT+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
 
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyT,body.innerHTML);


}

function BiciklLoad(){
    let ret="t0";
    let but="b0";
    let time="15:00";
    let cnt=0;
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");

    let bodyCY="bodyBicikl";
    
    if (sessionStorage.getItem(bodyCY)!=null){   
        let telo=sessionStorage.getItem(bodyCY); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);
       

        if (i>3)
             time = "16:15";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;
       


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyCY+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
    }
    
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyCY,body.innerHTML);


}

function HIITLoad(){
    let ret="t0";
    let but="b0";
    let time="12:15";
    let dd=sessionStorage.getItem("dd");
    let mm=sessionStorage.getItem("mm");
    let yyyy=sessionStorage.getItem("yyyy");
    let cnt=0;

    let bodyHIIT="bodyHIIT";
    
    if (sessionStorage.getItem(bodyHIIT)!=null){   
        let telo=sessionStorage.getItem(bodyHIIT); 
        document.getElementsByTagName('body')[0].innerHTML=telo;
        cnt=1;
    }


    for (i=0;i<7;i++){
        let novi=ret.charCodeAt(0);
        let novii=ret.charCodeAt(1);
        novii=novii+1;
        ret=String.fromCharCode(novi)+String.fromCharCode(novii);
        let bu=but.charCodeAt(1);
        bu+=1;
        but=but.charAt(0)+String.fromCharCode(bu);


        
       

        if (i>3)
             time = "23:15";
        
        let add=dd.charCodeAt(1);
        if (add==57){
            add=48;
        }else{add+=1;}
        
        dd=dd.charAt(0)+String.fromCharCode(add);

        let dd1=dd.charCodeAt(0);
        let dd2=dd.charCodeAt(1);
        let mm1=mm.charCodeAt(0);
        let mm2=mm.charCodeAt(1);

        if (dd1==51 && dd2==50){

            dd1=48;
            dd2=49;
            if (mm2==57){
                mm1=49;
                mm2=48;
            }
            if (mm1==49 && mm2==50) {
                mm1=48;
                mm2=49;
                let y=yyyy.charCodeAt(3);
                y=y+1;
                yyyy=yyyy.charAt(0)+yyyy.charAt(1)+yyyy.charAt(2)+String.fromCharCode(y);
            }
        }

        if (dd2==48 && (dd1==48 || dd1==49 || dd1==50)){
            dd1+=1;
        }

        dd=String.fromCharCode(dd1)+String.fromCharCode(dd2);
        mm=String.fromCharCode(mm1)+String.fromCharCode(mm2);


        let date = dd + "/" + mm + "/" + yyyy + "   " + time;

       
                


        let availableSlots= Math.round(Math.random() * 5);



        let addition='</div>';
        
        
        var myvar = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
        '           Slobodnih Mesta:'  +
                    availableSlots+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
        '          </div>';  
       
        if (availableSlots!=0){
            addition = '<div class="card-footer">'+
           ' <input type="submit"value="Rezervisi Termin" class="btn btn-primary" id="'+
           but+
           '"onclick="reserve(\''+
           date+    
           '\''+
           ',\''+
           bodyHIIT+    
           '\''+
           ',\''+
           but+
           '\''+
          ' )">'+
           '</input>'+
           '</div>';
        }
        myvar=myvar+addition;
        
        if (cnt!=1)
        document.getElementById(ret).innerHTML=myvar;

        if (document.getElementById(but))
        if ((document.getElementById(but).disabled==true) && (sessionStorage.getItem(date)==1)){
            document.getElementById(but).disabled=false;
            sessionStorage.setItem(date,0);
    }
 }
    
    let body=document.getElementsByTagName('body')[0];
    sessionStorage.setItem(bodyHIIT,body.innerHTML);


}

function reserve(date,bodyType,idbtn) {
    
    let due=date;
    let bodyT=bodyType;
    let u=1;
    let name = document.getElementById("name").innerHTML;
    document.getElementById(idbtn).disabled=true;
    let res= sessionStorage.getItem('reserved');

 
    var x = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
                    name+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
                   ' </div>'+
                    '<div class="card-footer">'+
                    ' <input type="submit"value="Otkazi Termin" class="btn btn-primary" onclick="remove(\''+
                    name+    
                    '\''+
                    ',\''+
                    date+    
                    '\''+
                   ' )">'+                                  
                     '</input>'+
                     '</div>'+
                  
        '</div>';  

    let body=document.getElementsByTagName('body')[0];
    
    if (sessionStorage.getItem(name)){
    u=sessionStorage.getItem(name);
    u=parseInt(u);
    u+=1;
    }
    
    
    
    
    sessionStorage.setItem(name,u);
    sessionStorage.setItem(res,x);
    sessionStorage.setItem(bodyT,body.innerHTML);
    res++;
    sessionStorage.setItem('reserved',res);

}

function remove (name,date) {


    var x = '<div class="card h-100">'+
        '           <h5 class="card-header">'+
                    name+
        '           </h5>'+
        '          <div class="card-body">'+
                    date  +
                   ' </div>'+
                    '<div class="card-footer">'+
                    ' <input type="submit"value="Otkazi Termin" class="btn btn-primary" onclick="remove(\''+
                    name+    
                    '\''+
                    ',\''+
                    date+    
                    '\''+
                   ' )">'+                                  
                     '</input>'+
                     '</div>'+
                  
        '</div>';  

    let m=0;
    while (sessionStorage.getItem(m)!=x){
        m=m+1;
    }
    while (sessionStorage.getItem(m+1)!=null){
        let n=sessionStorage.getItem(m+1);
        sessionStorage.setItem(m,n);
        m+=1;
    }
    sessionStorage.setItem(m,null);
    sessionStorage.setItem(date,1);
    let u=sessionStorage.getItem(name);
    u=parseInt(u);
    u-=1;
    sessionStorage.setItem(name,u);
    location.reload();
}
function myTrainings(){
    let res= sessionStorage.getItem('reserved');
    let pos=0;
    for (i=0; i<res;i++){
        if(sessionStorage.getItem(i)!="null"){
        let info = sessionStorage.getItem(i);

        
        
        document.getElementById("z"+pos++).innerHTML=info;

        }

    }

}

function initHata(niz,storage,grade){
    
    let x= sessionStorage.getItem(niz);
    let c=0;
    for (i=0; i<x.length;i++){
        let ch=parseInt(x[i]);
        c=c+ch;
    }
    c=c/(x.length);


    document.getElementById("mark").innerText=c;
    sessionStorage.setItem(grade,c);
    

    if (sessionStorage.getItem(storage)!=null)
        document.getElementById("4").innerHTML=sessionStorage.getItem(storage);

}
function addComment(id,id2,storage){

    let p=document.getElementById("name").innerText;
    if (parseInt(sessionStorage.getItem(p))>=1){
    
    let c=document.getElementById("ocena").value;
    let array=document.getElementById("niz").innerText;
    let temp=sessionStorage.getItem(array);
    temp=temp+c;
    sessionStorage.setItem(array,temp);
    
    let num=sessionStorage.getItem("commnum");
    let y=document.getElementById('3').value;  
    let x = document.getElementById('4');
    x.innerHTML += '<div class="media mb-4"> <img class="d-flex mr-3 rounded-circle" src="images/commentimg.png" alt=""> <div class="media-body">  <h5 class="mt-0">Korisnik '+num + ' je ostavio ocenu '+c+'</h5> '+y+' </div> </div>';
    sessionStorage.setItem(storage,x.innerHTML);
    num++;
    sessionStorage.setItem("commnum",num);
    location.reload();
    }

}