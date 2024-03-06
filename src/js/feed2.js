var contentExercise = document.querySelector("#ContentExercise")
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id'); // price_descending
console.log(id);

function openCreatePostModal() {
    // createPostArea.style.display = 'block';
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

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}


// intallBtn.addEventListener('click', openCreatePostModal);
// shareImageButton.addEventListener('click', openCreatePostModal);

// closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

// Currently not in use, allows to save assets in cache on demand otherwise
function onSaveButtonClicked(event) {
    console.log('clicked');
    if ('caches' in window) {
        caches.open('user-requested')
            .then(function (cache) {
                cache.add('https://httpbin.org/get');
                cache.add('/src/images/sf-boat.jpg');
            });
    }
}

function clearCards() {
    while (contentExercise.hasChildNodes()) {
        contentExercise.removeChild(contentExercise.lastChild);
    }
}

function fillData(data) {

    const imageElement = document.createElement('div');
    imageElement.classList.add('d-flex', 'justify-content-center');

    imageElement.innerHTML = `
        <img src="${data.image}"
        class="img-fluid " alt="${data.name}">
    `;



    // Append the exercise element to the exercise container
    contentExercise.appendChild(imageElement);

    const detailElement = document.createElement('div');
    detailElement.classList.add('mt-2', 'border-top');

    detailElement.innerHTML = `
    <div class="ms-3">
        <nav aria-label="breadcrumb mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>
            </ol>
        </nav>
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        </div>
    <div class="ms-5 me-5">

    </div>
    `;

    contentExercise.appendChild(detailElement);
}

// function updateUI(data) {
//   clearCards();
//   for (var i = 0; i < data.length; i++) {
//     createCard(data[i]);
//   }
// }

var urlDetail = `https://test1-pwa-alloy-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
var networkDataReceived = false;

if (!navigator.onLine) {
    console.log('Browser is offline');
    // Perform actions for offline mode
    // For example, load data from localStorage
    let dataPost = JSON.parse(localStorage.data);
    let data = dataPost[id];
    fillData(data);
} else {
    // If online, fetch data
    console.log('Browser is online');
    fetchData();
}

function fetchData() {
    fetch(urlDetail)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            networkDataReceived = true;
            console.log('From web', data);

            if (localStorage.data == undefined) {
                console.log('new save to local');
                var dataPost = {};
                dataPost[data.id] = data;
                // dataPost.push(data);

                let json = JSON.stringify(dataPost);
                localStorage.data = json;
            } else {
                console.log('save to local');
                var dataPost = JSON.parse(localStorage.data);
                if (!dataPost[id]) {
                    dataPost[data.id] = data;
                } else {
                    console.log('data sudah di save');
                }
                console.log(dataPost);
                let json = JSON.stringify(dataPost);
                localStorage.data = json;
            }

            fillData(data);
        });
}


// if ('indexedDB' in window) {
//   readAllData('posts')
//     .then(function(data) {
//       if (!networkDataReceived) {
//         console.log('From cache', data);
//         updateUI(data);
//       }
//     });
// }