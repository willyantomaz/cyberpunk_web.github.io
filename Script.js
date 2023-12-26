function validarPontos() {
        let soma = 0;
        const pontos = parseInt(document.getElementById('pontos').value);
        const atributos = ['inteligencia', 'reflexo', 'habilidade_tecnica','autocontrole','atratividade','sorte','capacidade_de_movimento','tipo_corporal','empatia']

        for(let campo of atributos){
        soma += parseInt(document.getElementById(campo).value);
        }
        if (soma > pontos) {
                        alert('A soma dos atributos não pode ser maior que a quantidade de pontos.');
                        return false;
        }





          document.getElementById('formulario').addEventListener('submit', function(e) {
      e.preventDefault();

      // Enviar a solicitação POST
      fetch(this.action, {
       method: this.method,
       body: new FormData(this)
      })
      .then(response => {
       if (!response.ok) {
         throw new Error('Erro na solicitação POST');
       }
       return response.json();  // Adicionado o retorno aqui
      })
      .then(data => {
       const novoPersonagemId = data.id; // Supondo que o ID retornado esteja na propriedade 'id'

       // Armazena o ID do novo personagem no localStorage
       localStorage.setItem('novoPersonagemId', novoPersonagemId);
       // Redirecionar para a página GET após a solicitação POST ser bem-sucedida
       window.location.href = 'ListaPost.html';
      })
      .catch(error => {
       console.error('Erro:', error);
      });
      });
    }
