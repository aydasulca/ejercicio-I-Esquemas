
  var cajaGrande = document.createElement("div");
  cajaGrande.setAttribute("id","cajaGrande");
  document.body.appendChild(cajaGrande);

  var cajaMediana = document.createElement("div");
  cajaMediana.setAttribute("id","cajaMediana");
  document.body.appendChild(cajaMediana);
  document.getElementById('cajaGrande').appendChild(cajaMediana);

  var cajaPeque = document.createElement("div");
  cajaPeque.setAttribute("id","cajaPeque");
  document.body.appendChild(cajaPeque);
  document.getElementById('cajaMediana').appendChild(cajaPeque);

  var cajaGrande1 = document.createElement("div");
  cajaGrande1.setAttribute("id","cajaGrande-1");
  document.body.appendChild(cajaGrande1);

  var cajaPeque1 = document.createElement("div");
  cajaPeque1.setAttribute("id","cajaPeque-1");
  document.body.appendChild(cajaPeque1);
  document.getElementById('cajaGrande-1').appendChild(cajaPeque1);

  var cajaMediana1 = document.createElement("div");
  cajaMediana1.setAttribute("id","cajaMediana-1");
  document.body.appendChild(cajaMediana1);
  document.getElementById('cajaGrande-1').appendChild(cajaMediana1);
