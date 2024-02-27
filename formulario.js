function submitForm() {
    // Obtener los valores de los campos
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;

    var newWindow = window.open();
    newWindow.document.write("<h1>Información del Formulario</h1>");
    newWindow.document.write("<p>First Name: " + firstName + "</p>");
    newWindow.document.write("<p>Last Name: " + lastName + "</p>");
    newWindow.document.write("<p>Phone: " + phone + "</p>");
    newWindow.document.close();

    clearFormData();
}
function clearFormData() {
    // Limpiar los campos del formulario
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";

    // Eliminar los parámetros de la URL
    var urlWithoutParams = window.location.href.split('?')[0];
    history.replaceState(null, null, urlWithoutParams);
}