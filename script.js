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

//Script para el modal con changelogs
document.getElementById('verCambiosSST').addEventListener('click', function () {
    Swal.fire({
        title: '<strong>Changelog de Actualizaciones</strong>',
        icon: 'info',
        html: `
            <div style="text-align: left;">
                <h3>📅 18 de diciembre de 2024</h3>
                <ul>
                    <li>🧾 Se implementó un módulo para subir el comprobante de pago de reparaciones.</li>
                    <li>📤 Los clientes pueden cargar comprobantes en formato PDF, JPG o PNG desde la consulta del estado del equipo.</li>
                    <li>👨‍🔧 Los trabajadores y administradores pueden visualizar el comprobante y cambiar el estado de pago o rechazarlo desde la lista de órdenes.</li>
                </ul>
                <hr>

                <h3>📅 19 de noviembre de 2024</h3>
                <ul>
                    <li>💳 Se implementó API de Mercado Pago para que los clientes puedan pagar desde casa usando tarjetas o la billetera de la app.</li>
                </ul>
                <hr>

                <h3>📅 15 de noviembre de 2024</h3>
                <ul>
                    <li>🏷️ El proyecto cambió de nombre: <strong>Fix Phones</strong> ahora es <strong>Service Fix</strong> o <strong>Sistema de Servicios Técnicos</strong>.</li>
                    <li>🔧 Enfoque más orientado a la reparación de smartphones y computadoras.</li>
                </ul>
                <hr>

                <h3>📅 16 de agosto de 2024</h3>
                <ul>
                    <li>➕ Se agregó un modal para visualizar cambios por fecha.</li>
                    <li>🐛 Corrección de errores menores en la interfaz.</li>
                    <li>🚀 Mejoras en el rendimiento del formulario de pedidos.</li>
                </ul>
                <hr>

                <h3>📅 10 de agosto de 2024</h3>
                <ul>
                    <li>🔒 Implementación de validaciones en formularios.</li>
                    <li>✅ Se añadió verificación de tokens CSRF.</li>
                </ul>
            </div>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#6f42c1'
    });
});