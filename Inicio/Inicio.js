// Abrir y cerrar el menú deslizante
const menuBtn = document.getElementById('menuBtn');
const slidingMenu = document.getElementById('slidingMenu');
const plomoRectangle = document.getElementById('plomoRectangle');

// Abrir y cerrar el menú
menuBtn.addEventListener('click', () => {
    if (slidingMenu.style.left === '0px') {
        slidingMenu.style.left = '-250px'; // Si el menú está visible, lo oculta
        // Restaurar tamaño original del rectángulo rojo cuando el menú se oculta
        plomoRectangle.style.width = '90%';
    } else {
        slidingMenu.style.left = '0'; // Si el menú está oculto, lo muestra
        // Reducir tamaño del rectángulo rojo cuando el menú está visible
        plomoRectangle.style.width = '70%';
        plomoRectangle.style.transition = 'width 0.3s ease';      
    }
});

// Obtener el input de archivos y el contenedor de los archivos subidos
const fileInput = document.getElementById('fileInput');
const pdfList = document.getElementById('pdfList');

// Función para manejar los archivos cargados
fileInput.addEventListener('change', (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Crear tarjeta solo si el archivo es PDF o Word
        const fileType = file.type;
        let fileIcon = '';
        let fileLinkText = 'Ver archivo';
        
        // Verificar si el archivo es PDF
        if (fileType === 'application/pdf') {
            fileIcon = '/Inicio/Imagen_inicio/PDF.png';  // Reemplaza con la ruta de tu ícono de PDF
        }
        // Verificar si el archivo es Word
        else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType === 'application/msword') {
            fileIcon = '/Inicio/Imagen_inicio/word.png';  // Reemplaza con la ruta de tu ícono de Word
        }
        else {
            continue;  // Si el archivo no es PDF ni Word, lo omite
        }

        const fileCard = document.createElement('div');
        fileCard.classList.add('pdf-card');

        const fileImage = document.createElement('img');
        fileImage.src = fileIcon;
        fileImage.alt = 'File Icon';
        
        const fileName = document.createElement('p');
        fileName.textContent = file.name;

        const fileLink = document.createElement('a');
        fileLink.href = URL.createObjectURL(file);  // Crea un enlace temporal al archivo
        fileLink.textContent = fileLinkText;
        fileLink.target = '_blank';  // Abre el archivo en una nueva pestaña

        // Añadir los elementos al contenedor de la tarjeta
        fileCard.appendChild(fileImage);
        fileCard.appendChild(fileName);
        fileCard.appendChild(fileLink);

        // Agregar la tarjeta al listado de archivos
        pdfList.appendChild(fileCard);
    }
});
