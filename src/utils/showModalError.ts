import Swal from 'sweetalert2'

function showModalError(text: string): Promise<unknown> {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${text}`,
    showConfirmButton: true,
    confirmButtonText: 'Ok',
    footer: '<a href="/">I want to go home</a>',
  })
}

export { showModalError }
