document.addEventListener("DOMContentLoaded", function () {
    const btnAdicionarTarefa = document.getElementById("btnAdicionarTarefa");
    const popUp = document.createElement("div");
    popUp.className = "pop-up";
    popUp.innerHTML = `
        <div class="pop-up-content">
          <span class="close-btn" onclick="fecharPopUp()">&times;</span>
          <label for="novaTarefa" id="novaTarefaLabel">Nova Tarefa:</label>
          <input type="text" id="novaTarefa" />
          <button id="btnAdicionar" onclick="adicionarTarefa()">Adicionar</button>
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
  
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = function () {
          novaTarefaItem.remove();
        };
  
        novaTarefaItem.appendChild(btnExcluir);
  
        const containerListItemsDia = document.querySelector(".dia ul");
        const containerListItemsNoite = document.querySelector(".noite ul");
  
        if (checkboxDia.checked && containerListItemsDia) {
          containerListItemsDia.appendChild(novaTarefaItem);
        } else if (checkboxNoite.checked && containerListItemsNoite) {
          containerListItemsNoite.appendChild(novaTarefaItem);
        }
        else {
          alert("Selecione em que parte do dia será a tarefa!!");
        }
  
        novaTarefaInput.value = "";
        checkboxDia.checked = false;
        checkboxNoite.checked = false;
        fecharPopUp();
      }
    };
  });
  