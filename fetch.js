const btn = document.querySelector("button");
const section = document.querySelector("section");
const input = document.querySelector(".input");
const darkMode = document.querySelector('dark-mode');
const body = document.querySelector('body');
const link = "https://api.github.com/users/";
const user = async (username) => {
  const response = await fetch(link + username);
  const data = await response.json();
  console.log(data);
  const card = `
  <div class="card">

    <div class="avatar">
      <a href="https://avatars.githubusercontent.com/u/126646499?v=4">
        <img src="${data.avatar_url}">
      </a>
    </div>

    <div class="card-info">
      <div class="login">Login: ${data.login}</div>
      <div class="login">Name: ${data.name}</div>
      <div class="bio">bio: ${data.bio}</div>
      <div class="card-info-2">
        <div class="id">id: ${data.id}</div>

        <a href="${data.followers_url}">
          <div class="followers">followers: ${data.followers}</div>
        </a>

        <a href="${data.following_url}">
          <div class="following">following: ${data.following}</div>
        </a>
      </div>

      <div class="card-info-3">
        <div class="konum"><i class="bi bi-geo-alt-fill"></i> ${data.location}</div>

        <a href="${data.html_url}">
          <div class="url"><i class="bi bi-link-45deg"></i> ${data.url}</div>
        </a>
      </div>
    </div>
  </div>   
    `;

  section.innerHTML = card;
};
user('Farhad-Abbasov2003');


