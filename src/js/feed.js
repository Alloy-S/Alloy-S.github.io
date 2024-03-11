var contentExercise = document.querySelector("#ContentExercise")
var intallBtn = document.querySelector("#btn-install");
var dataLength = 0;
var notif = false;
var myInterval;

if (localStorage.lastData) {
  dataLength = localStorage.lastData;
}

function install() {
  if (deferredPrompt) {

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function (choiceResult) {
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


intallBtn.addEventListener('click', install);

function clearCards() {
  while (contentExercise.hasChildNodes()) {
    contentExercise.removeChild(contentExercise.lastChild);
  }
}

function createCard(data) {

  const exerciseElement = document.createElement('div');
  exerciseElement.classList.add('col-md-4', 'col-sm-6', 'col-12', 'd-flex', 'justify-content-center', 'mb-3');

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

function checkData() {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {

      console.log("jumlah old data:", dataLength);
      console.log("jumlah new data:", data.length);
      if (parseInt(localStorage.lastData) !== data.length && !notif) {
        Toastify({
          text: "Data diperbarui, Harap Refresh",
          duration: -1,
          close: true,
          gravity: "bottom",
          position: "right"

        }).showToast();
        notif = true;
      }
    });
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
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
    console.log('From web', data);
    localStorage.lastData = data.length;
    // dataLength = data.length;
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
    clearAllData('posts')
      .then(function () {
          return data;
      })
      .then(function (data) {
        for (var key in data) {
          // console.log('write data', data[key]);
          if (data[key].hasOwnProperty('id')) {
            writeData('posts', data[key])
          } else {
            // console.error("Object doesn't have a valid key path.");
          }
        }
      });
  });

  console.log('idb: ', ('indexedDB' in window));
if ('indexedDB' in window) {
  readAllData('posts')
    .then(function (data) {
      console.log('From cache awal ', data);
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}

if (navigator.onLine) {
  myInterval = setInterval(checkData, 5000);
} 

self.addEventListener('online', function (event) {
  console.log('Klien kembali online');
  myInterval = setInterval(checkData, 5000);
});

self.addEventListener('offline', function (event) {
  console.log('Klien kembali offline');
  clearInterval(myInterval);
});
