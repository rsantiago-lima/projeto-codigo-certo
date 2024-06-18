console.log('Connected')

// Condição para desbloquear o botão de confirmação do termo de responsabilidade.

const checa = document.getElementsByName('toggle')
const numElementos = checa.length
const bt = document.getElementById('aplica')
for (let x = 0; x < numElementos; x++) {
  checa[x].onclick = function () {
    // "input[name='toggle']:checked" conta os checkbox checados
    let cont = document.querySelectorAll("input[name='toggle']:checked").length
    // ternário que verifica se há algum checado.
    // se não há, retorna 0 (false), logo desabilita o botão
    bt.hidden = cont ? false : true
  }
}

// Condição para abrir o Modal

function openModal() {
  const modal = document.querySelector('#modal')
  modal.style.display = 'block'
}

function closeModal() {
  const modal = document.querySelector('#modal')
  modal.style.display = 'none'
}
// ===================================================
// Verificação dos Inputs no front end

const fields = document.querySelectorAll('[required]')

// console.log(fields)

function customValidation(event) {
  event.preventDefault()
  const field = event.target

  // logica para verificar se tem erros
  function verifyErrors() {
    let foundError = false
    for (let error in field.validity) {
      if (field.validity[error] && !field.validity.valid) {
        foundError = true
      }
    }
    console.log(foundError)
    return foundError
  }
  const error = verifyErrors()
  console.log('Error Exists: ', error)

  const spanError = field.parentNode.querySelector('.span.span-required')

  if (error) {
    spanError.classList.add('active')
    spanError.innerHTML = 'Campo Obrigatório'
  } else {
    spanError.classList.remove('active')
    spanError.innerHTML = ''
  }
}

for (let f of fields) {
  f.addEventListener('invalid', customValidation)
  f.addEventListener('blur', customValidation)
}

document.querySelector('#form').addEventListener('submit', (event) => {
  alert('Formulario Enviado')
  event.preventDefault()
})
