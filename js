//alert("hola");

var personas = [
  {
    nombre: "Cristina Del Rio",
    img: "img/1.jpeg",
    practicas: [10, 8, 7, 10, 8, 6, 8, 9, 8, 10],
    examenes: [8, 8],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Francisco Paco",
    img: "img/2.jpg",
    practicas: [1, 8, 4, 5, 9, 6, 8, 10, 7, 10],
    examenes: [5, 10],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Oriana Tardanza",
    img: "img/3.jpg",
    practicas: [10, 0, 6, 7, 8, 7, 6, 1, 5, 7],
    examenes: [5, 5],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Virgina de los Llanos",
    img: "img/4.jpg",
    practicas: [10, 8, 7, 10, 8, 6, 8, 9, 8, 10],
    examenes: [8, 8],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Thomas Turbado",
    img: "img/5.jpg",
    practicas: [1, 8, 4, 3, 9, 6, 8, 0, 7, 10],
    examenes: [5, 0],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Ana Conda",
    img: "img/6.jpg",
    practicas: [0, 0, 6, 7, 8, 7, 6, 1, 5, 7],
    examenes: [5, 5],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Bernardo del Valle",
    img: "img/7.jpg",
    practicas: [10, 10, 6, 7, 8, 7, 6, 1, 5, 7],
    examenes: [8, 5],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Angela Moreno",
    img: "img/8.jpg",
    practicas: [10, 10, 6, 7, 8, 7, 6, 10, 5, 7],
    examenes: [10, 10],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  },
  {
    nombre: "Gabriela Fiestera",
    img: "img/9.jpg",
    practicas: [10, 0, 6, 7, 8, 7, 6, 1, 5, 7],
    examenes: [0, 5],
    practicatotal: 0,
    examentotal: 0,
    total: 0
  }
];

var tamaño = personas.length;
var aprobados = 0;
var suspensos = 0;
var sumatotal = 0;

for (x = 0; x < personas.length; x++) {
  for (z = 0; z < personas[x].practicas.length; z++) {
    personas[x].practicatotal += personas[x].practicas[z];
  }
  for (a = 0; a < personas[x].examenes.length; a++) {
    personas[x].examentotal = personas[x].examentotal + personas[x].examenes[a];
  }

  personas[x].practicatotal = Math.round(0.7 * (personas[x].practicatotal / personas[x].practicas.length));

  //personas[x].practicatotal = personas[x].practicatotal;

  personas[x].examentotal = 0.3 * (personas[x].examentotal / personas[x].examenes.length);

  personas[x].total = personas[x].practicatotal + personas[x].examentotal;

  sumatotal = personas[x].total + sumatotal;

  if (personas[x].total >= 5) {
    aprobados++;
  }
  else if (personas[x].total < 5) {
    suspensos++;
  }
}

mediatotal = sumatotal / personas.length;
mediatotal = mediatotal.toFixed(2);

//DIBUJA LOS ALUMNOS
document.write('<div class="margenSuperior">');
document.write('<div class="contCuerpo">');
for (y = 0; y < personas.length; y++) {
  document.write(
    '<section class="cajaCuerpo">' +
    '<div class="cuerpo1"><img class="fotoI" src="' + personas[y].img + '" alt=""></div>' +
    '<div class="txt2">' +
    '<div class="nombres"><p id="nombreS">' + personas[y].nombre + '</p></div>' +
    '<div class="flex">' +
    '<div class="practicas">' +
    '<p class="txtNomb">Practicas</p>' +
    '<p id="practRes">' + personas[y].practicatotal + '</p>' +
    '</div>' +
    '<div class="practicas">' +
    '<p class="txtNomb">Examenes</p>' +
    '<p id="practResEx">' + personas[y].examentotal + '</p>' +
    '</div>' +
    '<div class="practicas">' +
    '<p class="txtNomb">Nota final</p>' +
    '<p id="practResN">' + personas[y].total + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="fondo"></div>' +
    '</section>'
  );
}
document.write('</div>');
document.write('</div>');

/* DIBUJA EL NAV
document.write(
    '<div class="sticky">' +
    '<div class="contNav">' +
      '<div class="envuelve">' +
        '<div class="navNivel1">' +
          '<div class="bars"><i class="fas fa-bars"></i></div>' +
          '<div class="cursosIFP">' +
            '<div id="cursosTXT">' +
              '<div class="flechaS"><i class="fas fa-caret-left"></i></div>' +
              '<div class="filtro">' +
                '<p>1 - daw </p>' +
              '</div>' +
              '<div class="flechaS"><i class="fas fa-caret-right"></i></div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="navNivel2">' +
          '<div class="circulo">' +
            '<div class="pruGre">' +
              '<p id="aproTXT">'+aprobados+'</p>' +
            '</div>' +
            '<div class="caja11">' +
              '<p class="txt1">Aprobados</p>' +
            '</div>' +
          '</div>' +

          '<div class="circulo">' +
            '<div class="pruBlu">' +
              '<p id="aproTXT2">'+mediatotal+'</p>' +
            '</div>' +
            '<div class="caja11">' +
              '<p class="txt1">Media de la clase</p>' +
            '</div>' +
          '</div>' +

          '<div class="circulo">' +
            '<div class="pruRed">' +
              '<p id="aproTXT3">'+suspensos+'</p>' +
            '</div>' +
            '<div class="caja11">' +
              '<p class="txt1">Suspensos</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>'
    );*/



/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClass("contNav").style.padding = "30px 10px";
  } else {
    document.getElementByClass("contNav").style.padding = "80px 10px";
  }
}*/

function f1(id) {
  ocultar(id);
}

function f2(id) {
  mostrar(id);
}


function ocultar(id) {
  var x = document.getElementById(id);
    //alert("hello");
    x.classList.remove("mostrar");
    x.classList.add("ocultar");   
  //document.getElementById("b1").addEventListener("click", function () {
    //alert("hello");
  //});
}

function mostrar(id) {
  var x = document.getElementById(id);
    x.classList.remove("ocultar");
    x.classList.add("mostrar"); 
}
