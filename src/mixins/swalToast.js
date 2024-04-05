import Swal from 'sweetalert2';

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  background: '#f4f9f3',
  color: '#505843',
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const question = Swal.mixin({
  background: '#f4f9f3',
  color: '#505843',
  confirmButtonText: '確定',
  confirmButtonColor: '#7d8b72',
  showCancelButton: true,
  cancelButtonText: '取消',
  customClass: {
    cancelButton: 'cancelBtn'
  }
});
