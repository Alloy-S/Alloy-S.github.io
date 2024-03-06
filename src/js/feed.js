var contentExercise = document.querySelector("#ContentExercise")
var intallBtn = document.querySelector("#btn-install");


function install() {
  // createPostArea.style.display = 'block';
  if (deferredPrompt) {

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === 'dismissed') {
        console.log('User cancelled installation');
      } else {
        console.log('User added to home screen');
      }
    });

    deferredPrompt = null;
  }

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.getRegistrations()
  //     .then(function(registrations) {
  //       for (var i = 0; i < registrations.length; i++) {
  //         registrations[i].unregister();
  //       }
  //     })
  // }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}


intallBtn.addEventListener('click', install);

function clearCards() {
  while(contentExercise.hasChildNodes()) {
    contentExercise.removeChild(contentExercise.lastChild);
  }
}

function createCard(data) {

  const exerciseElement = document.createElement('div');
    exerciseElement.classList.add('col-md-4', 'col-sm-6','col-12', 'd-flex', 'justify-content-center', 'mb-3');

    exerciseElement.innerHTML = `
      <div class="content">
        <a href="detail.html?id=${data.id}">
          <div class="content-overlay"></div>
          <img class="content-image" src="${data.image}">
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">${data.name}</h3>
          </div>
        </a>
      </div>
    `;

    // Append the exercise element to the exercise container
    contentExercise.appendChild(exerciseElement);
}

function updateUI(data) {
  clearCards();
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

var url = 'https://test1-pwa-alloy-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
var networkDataReceived = false;

fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    networkDataReceived = true;
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}
