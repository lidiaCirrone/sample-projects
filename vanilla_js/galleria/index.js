const SERVERURL = 'http://localhost:3000/';
const USERSURL = 'users/';
const ALBUMSURL = 'albums/';
const PHOTOSSURL = 'photos/';

async function getPhotos(albumID, albumTitle) {
   let photos$ = await fetch(`${SERVERURL}${ALBUMSURL}${albumID}/${PHOTOSSURL}`).then((res) => res.json());

   document.getElementById('album-title').innerHTML = albumTitle;

   let colTag = '';
   
   photos$.forEach((photo) => {

      colTag += `
      <div class="col-3">
         <img src="${photo.thumbnailUrl}" class="img-fluid">
      </div>
      `;

      document.getElementById('photo-content').innerHTML = colTag;
   });
}

async function getAlbum() {

   let selectedUser = document.getElementById('users');
   let userID = selectedUser.value;
   let name = selectedUser.options[selectedUser.options.selectedIndex].innerText;
   document.getElementById('selected-user').innerHTML = name;

   let albums$ = await fetch(`${SERVERURL}${USERSURL}${userID}/${ALBUMSURL}`).then((res) => res.json());
   let colTag = '';
   albums$.forEach(async (album) => {

      let imgs$ = await fetch(`${SERVERURL}${ALBUMSURL}${album.id}/${PHOTOSSURL}`).then((response) => response.json());
      let thumbnailUrl = imgs$[0].thumbnailUrl;

      let photoNumber = imgs$.length;

      colTag += `
      <div class="col-3">
         <div class="albums" style="background-image: url('${thumbnailUrl}')" onclick="getPhotos(${album.id},'${album.title}')"><span class="photoNumber">${photoNumber}</span></div>
         <p>${album.title}</p>
      </div>
      `;

      document.getElementById('album-content').innerHTML = colTag;
   });
}

async function getUsers() {
   let users$ = await fetch(`${SERVERURL}${USERSURL}`).then(response => response.json());
   return users$;
}

function initialization() {

   let users = getUsers();
   optionTag = '<option disabled selected>-- Seleziona un utente --</option>';
   users.then((usr) => {
      usr.forEach(user => {
         optionTag += `<option value="${user.id}">${user.name}</option>`;
      });
      document.getElementById('users').innerHTML = optionTag;
   });
}

window.onload = function () {
   initialization();
}