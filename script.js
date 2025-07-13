fetch('materias.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('malla-container');
    data.forEach(materia => {
      const div = document.createElement('div');
      div.className = `materia ${materia.estado.replace(" ", "\\ ")}`;
      div.innerHTML = `<strong>${materia.nombre}</strong><br>Año: ${materia.año}`;
      container.appendChild(div);
    });
  });
