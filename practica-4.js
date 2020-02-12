// Vamos a presuponer que odavía no se utilizar bucles, puesto que no hemos llegado a esa sección del curso.

var dias = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo";
var ciudades = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti";
var arrayDias = dias.split(",");
var arrayCiudades = ciudades.split(".");
var conciertos = [[arrayDias[0],arrayCiudades[0]],[arrayDias[1],arrayCiudades[1]],[arrayDias[2],arrayCiudades[2]],[arrayDias[3],arrayCiudades[3]],[arrayDias[4],arrayCiudades[4]],[arrayDias[5],arrayCiudades[5]],[arrayDias[6],arrayCiudades[6]]];
console.log(conciertos);