/* este fichero de configuracion de luego de instalar los paquetes
de tailwindcss, postcss , y autoprefix ,
se crea este fichero con el comando .-
npx tailwindcss init -p */
/** @type {import('tailwindcss').Config} */
export default {
  /* esta linea modificada en el content es para que .-
  lea desde el index y ponga los estilos a toda la carpeta src 
  dentro de la carpeta src va buscar todos los elementos con extension js y jsx, es necesario para pasar los estilos a los componentes  */
  content: ["./index.html" , "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

