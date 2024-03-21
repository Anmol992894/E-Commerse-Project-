// Function to dynamically access the header and footer 
function yes(){ 
    document.getElementById('header').innerHTML=`<nav class="navbar navbar-expand-sm sticky-top border-1" style=" background-color:#FAB301">
    <div class="container-fluid mb-auto" >
        <a class="navbar-brand" href="#"><img src="fashion.png" alt="logo" style="width: 100px; height: 60px;" class="rounded-pill"></a>
        <button class="navbar-toggler-sm border border-3 bg-secondary border-dark headerbutton rounded collapsehead" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex justify-content-center me-5">
            <input type="search" class="form-control border-3 text-warning border-dark" style="width: 50%;" placeholder="Product name, category name etc,."><button class="btn btn-secondary border-3 border-dark shadow-sm headerbutton" style="width:150px;" type="button" onmouseover="searchimgs()" onmouseout="searchout()"><img id="searchimg" src="loupe.png" class="ms-2 me-1 float-start" style="width:20px; height:25px;">Search</button>
        </div>
        <div class="d-flex align-self-end">
        <ul class="navbar-nav ">
            <li class="nav-item my-2"><a class="nav-link " href="Login.html"><button class="btn btn-sm btn-secondary border-3 border-dark headerbutton" type="button" onmouseover="loginimgin()" onmouseout="loginimgout()"><img id="loginimg" src="login.png" class="ms-2 me-3 float-start" style="width:20px; height:25px;">LOGIN</button></a></li>
            <li class="nav-item my-2 border border-3 rounded border-dark bg-secondary" style="width: 40px; height:45px"><a class="btn btn-lg nav-link headerbutton" style="width:100%" href="cart.html" onmouseover="cartimgin()" onmouseout="cartimgout()">
                <img id="cartimg" src="shopping-cart (2).png" class="mx-auto " id="cart" width="100%" height="100%">
            </a>
            </li>
        </ul>
        </div>
    </div>
</nav>
<div id="navbarSupportedContent" class="collapse navbar-expand navbar-collapse show bg-secondary fw-bolder text-center border border-black border-2">
    <ul class="navbar-nav d-flex justify-content-center align-items-around" >
        <div class="row gx-3" style="width:100%">
            <div class="col-2 ms-0 ">
                <li class="nav-item " style="width:100%;"><a class="text-decoration-none nav-link headerbutton" href="frontpage.html" onmouseover="homeimgin()" onmouseout="homeimgout()"><img id="homeimg" src="home.png"  id="cart" style="width:20px; height:25px;">Home</a></li>
            </div>
            <div class="col-2 ms-2">
                <li class="nav-item " style="width:100%;"><a class="nav-link text-decoration-none headerbutton" href="product.html" onmouseover="productimgin()" onmouseout="productimgout()"><img id="productimg" src="gift.png" id="cart" style="width:20px; height:25px;">AllProduct</a></li>
            </div>
            <div class="col-2 ms-3">
                <li class="nav-item dropdown " style="width:100%;">
                    <a class="nav-link dropdown-toggle headerbutton" data-bs-toggle="dropdown" href="#" onmouseover="womenimgin()" onmouseout="womenimgout()"><img id="womenimg" src="woman-avatar.png" id="cart" style="width:20px; height:25px;">Women</a>
                    <ul class="dropdown-menu  bg-secondary text-dark" style="border: 2px solid black">
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold" href="womenallproduct.html">All</a></li>
                        <li class="dropdown-divider" style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="womendress.html">Dresses</a></li>
                        <li class="dropdown-divider" style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="womenpants.html">Pant</a></li>
                        <li class="dropdown-divider" style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="womenskirt.html">Skirt</a></li>
                    </ul>
                </li>
            </div>
            <div class="col-2 ms-4">
                <li class="nav-item dropdown" style="width:100%;">
                    <a class="nav-link dropdown-toggle headerbutton" data-bs-toggle="dropdown" href="#" onmouseover="menimgin()" onmouseout="menimgout()"><img id="menimg" src="avatar.png" id="cart" style="width:20px; height:25px;">Men</a>
                    <ul class="dropdown-menu border-2 bg-secondary text-dark " style="border: 2px solid black">
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="menallproduct.html">All</a></li>
                        <li class="dropdown-divider" style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="menshirt.html">Shirts</a></li>
                        <li class="dropdown-divider" style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="menpants.html">Pant</a></li>
                        <li class="dropdown-divider " style="border: 1px solid black"></li>
                        <li class="dropdown-item "><a class="dropdown-link text-decoration-none text-dark p-2 fw-bold"  href="menhoodies.html">Hoodies</a></li>
                    </ul>
                </li>
            </div>                    
        <div class="col-2 "><li class="nav-item " style="width:100%;"><a class="nav-link text-decoration-none headerbutton" href="kidsallproduct.html" onmouseover="kidsimgin()" onmouseout="kidsimgout()"><img id="kidsimg" src="jumping-man.png" id="cart" style="width:20px; height:25px;">Kids</a></li></div> 
        <div class="col mx-auto"><li class="nav-item " style="width:100%;"><a class="nav-link text-decoration-none headerbutton" href="Contact.html" onmouseover="contactimgin()" onmouseout="contactimgout()"><img id="contactimg" src="call.png" id="cart" style="width:20px; height:25px;">Contact</a></li></div>
    </ul>
</div>`
// It will change the footer div from the pages
document.getElementById('footer').innerHTML=`<div class="container-fluid text-dark mt-0 text-center" style="border: 3px solid black; background-color:#FAB301">
<div class="row mb-0">
    <div class="col-sm-3 m-0">
        <ul class="list-unstyled mt-0">
            <li><h3><a class="text-dark text-decoration-none footerhover" href="womenallproduct.html"> Women</a></h3></li>
            <li><a class="text-dark text-decoration-none footerhover" href="womendress.html">Dresses</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="womenpants.html">Pants</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="womenskirt.html">Skirts</a></li>
        </ul>
    </div>
    <div class="col-sm-3 m-0">
        <ul class="list-unstyled mt-0">
            <li><h3><a class="text-dark text-decoration-none footerhover" href="menallproduct.html">Men</a></h3></li>
            <li><a class="text-dark text-decoration-none footerhover" href="menshirt.html">Shirts</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="menpants.html">Pants</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="menhoodies.html">Hoodies</a></li>
        </ul>
    </div>
    <div class="col-sm-3 m-0">
        <h3><a class="text-dark text-decoration-none footerhover" href="kidsallproduct.html">Kids</a></h3>
    </div>
    <div class="col-sm-3 m-0">
        <ul class="list-unstyled mt-0">
            <li><h3>Links</h3></li>
            <li><a class="text-dark text-decoration-none footerhover" href="frontpage.html">Home</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="Login.html">Login</a></li>
            <li><a class="text-dark text-decoration-none footerhover" href="Contact.html">Contact</a></li>
        </ul>
    </div>  
</div>
<hr class="mt-1">
<p class="mt-0" id="copyright">Copyright @Ecommerse Designed By " Anmol Verma "<span class="badge bg-secondary rounded-pill">2023-2024</span></p>
</div>`
   }


// Login  validation
function validate() {
    const email= document.getElementById('Email').value;
    const password=document.getElementById('password').value;
    if (email=="" && password==""){
        alert("Enter Detail Correctly...");
    }
    else if (email==""){
        alert("Enter Email...")
    }
    else if (password==""){
        alert("Enter Password...")
    }
    else if (email!="admin@admin.com"){
        alert("Incorrect Email...");
    }
    else if(password!="123456"){
        alert("Incorrect Password...");
    }
    else if(email=="admin@admin.com"){
        if (password==""){
            alert("Password Missing...")
        }
        else if (password!="123456"){
            alert("Incorrect Password...");
        }
        else{
            alert("Login Successfull...");
            document.getElementById('Email').value="";
            document.getElementById('password').value="";
        }
    }

    console.log(typeof(password));
}

// To increase the quantity of the product in cart page
function increment() {
    let incre=Number(document.getElementById('quantity').value);
    incre+=1
    document.getElementById('quantity').value=incre;
    if (incre>9){
        document.getElementById('alert').innerHTML=`<div class="alert alert-secondary alert-dismissible fade show" >You have reached your order limit.</div>`;
        document.getElementById('quantity').value=10;
        setTimeout(()=>document.getElementById('alert').remove(),3000);
        setTimeout(()=>document.getElementById('alertcontain').innerHTML=`<div id="alert"> </div>`,3000);
    }

}
// To decrease the quantity of the product in cart page
function decrement() {
    let decre=Number(document.getElementById('quantity').value);
    decre-=1
    document.getElementById('quantity').value=decre;
    if (decre<0){
        document.getElementById('alert').innerHTML=`<div class="alert alert-secondary alert-dismissible fade show">You have reached your order limit.</div>`;
        document.getElementById('quantity').value=0;
   
    }
    setTimeout(()=>document.getElementById('alert').remove(),3000);
    setTimeout(()=>document.getElementById('alertcontain').innerHTML=`<div id="alert"> </div>`,3000);
}

// Functions to dynamically change the image of the buttons
function searchimgs() {
    document.getElementById("searchimg").src="people.png";
}
function searchout() {
    document.getElementById("searchimg").src="loupe.png";
}
function cartimgin(params) {
    document.getElementById("cartimg").src="shopping-bag.png";
}

function cartimgout() {
    document.getElementById("cartimg").src="shopping-cart (2).png";
}

function loginimgin() {
    document.getElementById("loginimg").src="security.png";
}
function loginimgout() {
    document.getElementById("loginimg").src="login.png";
}

function contactimgin() {
    document.getElementById("contactimg").src="customer-service.png";
}
function contactimgout() {
    document.getElementById("contactimg").src="call.png";
}
function kidsimgin() {
    document.getElementById("kidsimg").src="baby-clothes.png";
}
function kidsimgout() {
    document.getElementById("kidsimg").src="jumping-man.png";
}
function menimgin() {
    document.getElementById("menimg").src="shirt.png";
}
function menimgout() {
    document.getElementById("menimg").src="avatar.png";
}
function womenimgin() {
    document.getElementById("womenimg").src="dress.png";
}
function womenimgout() {
    document.getElementById("womenimg").src="woman-avatar.png";
}
function productimgin() {
    document.getElementById("productimg").src="product.png";
}
function productimgout() {
    document.getElementById("productimg").src="gift.png";
}
function homeimgin() {
    document.getElementById("homeimg").src="home-icon-silhouette.png";
}
function homeimgout() {
    document.getElementById("homeimg").src="home.png";
}