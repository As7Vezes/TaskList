document.addEventListener("DOMContentLoaded", function () {
    const btnAdicionarTarefa = document.getElementById("btnAdicionarTarefa");
    const popUp = document.createElement("div");
    popUp.className = "pop-up";
    popUp.innerHTML = `
          <div class="pop-up-content">
            <button class="close-btn" onclick="fecharPopUp()">&times;</button>
            <label for="novaTarefa">Nova Tarefa:</label>
            <input type="text" id="novaTarefa" />
            <button onclick="adicionarTarefa()">Adicionar</button>
            <label for="checkboxDia">
              <input type="checkbox" id="checkboxDia" value="dia"> Dia
            </label>
            <label for="checkboxNoite">
              <input type="checkbox" id="checkboxNoite" value="noite"> Noite
            </label>
          </div>
        `;
  
    btnAdicionarTarefa.addEventListener("click", function () {
      document.body.appendChild(popUp);
    });
  
    window.fecharPopUp = function () {
      document.body.removeChild(popUp);
    };
  
    window.adicionarTarefa = function () {
      const novaTarefaInput = document.getElementById("novaTarefa");
      const novaTarefa = novaTarefaInput.value;
      const checkboxDia = document.getElementById("checkboxDia");
      const checkboxNoite = document.getElementById("checkboxNoite");
  
      if (novaTarefa.trim() !== "") {
        const novaTarefaItem = document.createElement("li");
        novaTarefaItem.textContent = novaTarefa;
  
        const containerListDia = document.querySelector(
          ".container-list_items .dia ul"
        );
        const containerListNoite = document.querySelector(
          ".container-list_items .noite ul"
        );
  
        if (checkboxDia.checked && containerListDia) {
          const listItemDia = document.createElement("li");
          listItemDia.appendChild(document.createTextNode(novaTarefa));
          containerListDia.appendChild(listItemDia);
        }
  
        if (checkboxNoite.checked && containerListNoite) {
          const listItemNoite = document.createElement("li");
          listItemNoite.appendChild(document.createTextNode(novaTarefa));
          containerListNoite.appendChild(listItemNoite);
        }
  
        novaTarefaInput.value = "";
        fecharPopUp();
      }
    };
  });
  