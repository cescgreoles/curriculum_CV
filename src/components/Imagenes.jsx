// import React, { useState } from "react";
// const Prueba = () => {
//   /*     let numero = 0; */
//   const [numero, setNumero] = useState(0);
//   const arrayImagenes = [
//     "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg",
//     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//     "https://cdn.pixabay.com/photo/2022/07/02/17/24/abstract-7297671__480.jpg",
//     "https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628",
//     "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
//     "https://www.myposter.es/web/img/toolbox/optimize-example.jpg",
//     "https://img.freepik.com/foto-gratis/forma-corazon-partir-dos-manos-fondo-salida-sol_1150-9249.jpg?w=360",
//     "https://static.nationalgeographic.es/files/styles/image_3200/public/01-hubble-heic1501a.jpg?w=1190&h=1242",
//   ];
//   const [imagen, setImagen] = useState(arrayImagenes[0]);
//   const cambiarNombre = () => {
//     const posicionRandom = Math.floor(Math.random() * arrayImagenes.length);
//     if (arrayImagenes[posicionRandom] === imagen && posicionRandom !== 0) {
//       setImagen(arrayImagenes[posicionRandom - 1]);
//     } else if (
//       arrayImagenes[posicionRandom] === imagen &&
//       posicionRandom === 0
//     ) {
//       setImagen(arrayImagenes[posicionRandom + 1]);
//     } else {
//       setImagen(arrayImagenes[posicionRandom]);
//     }
//   };
//   const sumar = () => {
//     /* numero++; */
//     setNumero(numero + 1);
//     /* console.log(numero); */
//   };
//   const restar = () => {
//     /* numero--; */
//     setNumero(numero - 1);
//     /* console.log(numero); */
//   };
//   console.log("HOLA ME RENDERIZO DESDE PRUEBA.JSX!");
//   return (
//     <div>
//       <button onClick={sumar}>+</button>
//       {numero}
//       <button onClick={restar}>-</button>
//       <button onClick={cambiarNombre}>CAMBIAR IMAGEN ALEATORIO</button>
//       <img width="200px" src={imagen} alt="imagen aleatoria" />
//     </div>
//   );
// };
// export default Prueba;
