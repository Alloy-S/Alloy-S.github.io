var contentExercise = document.querySelector("#ContentExercise")
const searchParams = new URLSearchParams(window.location.search);
var intallBtn = document.querySelector("#btn-install");
const id = searchParams.get('id');
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


intallBtn.addEventListener('click', openCreatePostModal);


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

var urlDetail = `https://test1-pwa-alloy-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
var networkDataReceived = false;
var networkStatus = false;


// if (!networkStatus) {
//     console.log('Browser is offline');
//     // kalo mau pake local
//     // let dataPost = JSON.parse(localStorage.data);
//     // let data = dataPost[id];
//     // fillData(data);
//     if ('indexedDB' in window) {
//         readAllData('posts')
//             .then(function (data) {
//                 if (!networkDataReceived) {
//                     console.log('From cache', data);
//                     fillData(data[id]);
//                 }
//             });
//     }
// } else {
//     console.log('Browser is online');
//     fetchData();
// }

if (navigator.onLine) {
    networkStatus = true;
} else {
    networkStatus = false;
}

self.addEventListener('online', function (event) {
    console.log('Klien kembali online');
    networkStatus = true;
    myInterval = setInterval(checkData, 5000);
});

self.addEventListener('offline', function (event) {
    console.log('Klien kembali offline');
    networkStatus = false;
    clearInterval(myInterval);
});

fetchData();



function fetchData() {
    if (networkStatus) {
        fetch(urlDetail)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                networkDataReceived = true;
                console.log('From web', data);

                // jika ingin pake local
                // if (localStorage.data == undefined) {
                //     console.log('new save to local');
                //     var dataPost = {};
                //     dataPost[data.id] = data;
                //     // dataPost.push(data);

                //     let json = JSON.stringify(dataPost);
                //     localStorage.data = json;
                // } else {
                //     console.log('save to local');
                //     var dataPost = JSON.parse(localStorage.data);
                //     if (!dataPost[id]) {
                //         dataPost[data.id] = data;
                //     } else {
                //         console.log('data sudah di save');
                //     }
                //     console.log(dataPost);
                //     let json = JSON.stringify(dataPost);
                //     localStorage.data = json;
                // }

                fillData(data);
            });
    } else {
        if ('indexedDB' in window) {
            readAllData('posts')
                .then(function (data) {
                    if (!networkDataReceived) {
                        console.log('From cache', data);
                        fillData(data[id]);
                    }
                });
        }
    }
}



