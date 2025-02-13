window.onload = () => {
        // Elimina la clase "container" del body
        document.body.classList.remove("container");
      
        // Selecciona el elemento de texto
        const textElement = document.querySelector('.text');
        const text = textElement.textContent;
      
        // Divide el texto en letras, incluyendo los espacios y los emojis
        textElement.innerHTML = text.split('').map((letter, index) => {
          // Si el carácter es un espacio, lo tratamos como un span vacío
          if (letter === ' ') {
            return `<span class="space"></span>`;
          }
          return `<span style="animation-delay: ${index * 0.1}s;">${letter}</span>`;
        }).join('');
      };
      