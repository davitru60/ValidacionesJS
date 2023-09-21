# ValidacionesJS
Crear las pantallas de login y de datos de un usuario utilizando html y js para las validaciones de los campos.
Las ventanas tienen que tener las siguientes características:

1 Una pantalla de login donde el usuario introduzca un correo electrónico, una contraseña y un botón con el texto "Entrar".
	1.1 Validaciones de la pantalla
		1.1.1 El campo correo y la constraseña no pueden estar vacíos cuando se pulsa el botón Entrar
		1.1.2 El campo contraseña debe tener mínimo 8 caracteres.
		1.1.3 El campo correo debe contener mínimo la letra @ pero no debe ser ni en el primer caracter ni en los últimos 3 			      caracteres
		1.1.4 Todas las validaciones que fallen en el momento de pulsar el botón deben mostrarse en un único alert con el mensaje
		      completo concatenado.

2 En la pantalla de los datos del usuario inicialmente tiene que encontrase vacía. Tiene que contenere los campos: Nombre, Primer Apellido
  Segundo Apellido, DNI, fecha de nacimiento y dos botones, Guardar y Limpiar.
	2.1 En el momento que se pulse el botón Guardar se realizarán las siguientes validaciones.
		2.1.1 Que el nombre contenga entre 3 y 30 caracteres si no se informará de error.
		2.1.2 Que el primer apellido contenga entre 2 y 30 caracteres si no se informará del error.
		2.1.3 Que el segundo apellido contenga entre 2 y 30 caracteres si no se informará del error. 
		2.1.4 Que el campo fecha de nacimiento tiene que tener el siguiente formato dd/mm/AAAA si no se informará del error
		2.1.5 El campo DNI tiene que validarse para que sea correcto. Para validar el dni se utilizan las siguientes letras 				TRWAGMYFPDXBNJZSQVHLCKE. Para validad si el dni introducido el correcto es el resto del número introducido entre
			23. El resultado mira la posición de la letra en texto del conjunto de letras, y si es la introducida por el usuario
			el dni es correcto. Tened en cuenta que el dni tiene que tener 8 números si no el formato es incorrecto de primeras.
		2.1.6 Cuando se pulse el botón Guardar los campos del formulario deben guardarse en un objeto llamado persona siempre y 		       cuando se pasen todas las validaciones si no debe mostrarse en un único alert con el mensaje completo concatenado.
		2.1.7 Cuando se pulse el botón Limpiar se deben borrar los datos de los campos del formulario pero no del objeto persona.

