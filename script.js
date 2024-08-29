const galleryImages = [
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-home.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-body.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-login.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-botonConsultar.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-detallesConsulta.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-diagnosticoOrden.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-generarOrden.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-ordenGenerada.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-preguntaImpresion.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-imprimir.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-listadoOrdenes.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-editarOrden.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-generarUsuario.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-editarUsuario.png',
    './assets/img/proyectos_img/fixPhones_gallery/fixPhone-listadoUsuario.png'

];

document.getElementById('verFotos_fixPhone').addEventListener('click', () => {
    Swal.fire({
        title: 'Galería de Fotos',
        html: `
            <div class="custom-gallery">
                ${galleryImages.map(imgSrc => `<img src="${imgSrc}" onclick="showImageModal('${imgSrc}')" />`).join('')}
            </div>`,
        showCloseButton: true
    });
});

function showImageModal(imageSrc) {
    Swal.fire({
        imageUrl: imageSrc,
        imageAlt: 'Imagen Ampliada',
        showCloseButton: true,
        confirmButtonText: 'Regresar a la Galería',
        customClass: {
            container: 'custom-image-modal'
        },
        didOpen: () => {
            // Puedes personalizar la imagen aquí si es necesario
        },
        preConfirm: () => {
            // Cuando el usuario presione "Regresar a la Galería"
            document.getElementById('verFotos_fixPhone').click();
        }
    });
}