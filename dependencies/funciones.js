function validar_inicio_sesion(){
    var errores="";
    if (document.frm_login.nombre.value.length===0) 
        errores+="Falta el nombre de usuario\n"; 
    if (document.frm_login.password.value.length===0) 
        errores+="Falta la contraseñas de usuario\n"; 
    if(errores!=="")
        alert(errores);
    else
        alert('ok');
}
function validar_registro(){
    var errores="";
    if (document.frm_registro.nombre.value.length===0) 
        errores+="Falta el nombre de usuario\n"; 
    if (document.frm_registro.password.value.length===0) 
        errores+="Falta la contraseñas de usuario\n";
    if (document.frm_registro.password.value!==document.frm_registro.r_password.value) 
        errores+="Las contraseñas no coinciden\n";
    if(errores.length>=1)
        alert(errores);
    else
        alert('ok');
}