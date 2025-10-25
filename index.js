import Swal from 'sweetalert2'

// or via CommonJS
function request() {
  Swal.fire({
    title: 'Appointment Request',
    text: 'Please contact our reception to book your appointment.',
    icon: 'info',
    confirmButtonText: 'Okay'
  });
}