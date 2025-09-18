export const formatoMonedaMXN = (numero) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2, // Asegura que siempre haya 2 decimales, ej. 100.00
    }).format(numero);
};