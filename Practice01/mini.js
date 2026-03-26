let songs = [
  {
    id: 1,
    title: "Nơi này có anh",
    artist: "Sơn Tùng M-TP"
  },
  {
    id: 2,
    title: "See Tình",
    artist: "Hoàng Thùy Linh"
  },
  {
    id: 3,
    title: "Bước Qua Mùa Cô Đơn",
    artist: "Vũ."
  },
  {
    id: 4,
    title: "Waiting For You",
    artist: "MONO"
  },
  {
    id: 5,
    title: "Hôm nay tôi buồn",
    artist: "Phùng Khánh Linh"
  },
  {
    id: 6,
    title: "Hoàn hảo",
    artist: "Bray",
  },
  {
    id: 7,
    title: "Em ơi là em",
    artist: "BuiTruongLinh"
  }
];

let nextId = 8;
let idUpdate = null;

const formTitle = document.querySelector("#formTitle");
const form = document.querySelector(".form");
const btnSubmit = document.querySelector("#submitBtn");
const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const searchInput = document.querySelector("#search");
const songTable = document.querySelector("#songTable");
const emptyState = document.querySelector("#emptyState");

const init=() => {
    loadData();
    renderSongs(songs);
};

let STORAGE_KEY = "songs";
const saveData=() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
};

const loadData=() => {
    let data = localStorage.getItem(STORAGE_KEY);
    if(data){
        songs = JSON.parse(data);
    } else {
        songs = [];
    }
};

const renderSongs=(songs) => {
    if(songs.length===0){
        songTable.innerHTML="";
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";
    
    songTable.innerHTML = songs.map((song) => `
        <tr>
            <td>${song.id}</td>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editSong(${song.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteSong(${song.id})">Xóa</button>
                </div>
            </td>
        </tr>
    `).join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = titleInput.value.trim();
    let artist = artistInput.value.trim();

    if(!title || !artist){
        Swal.fire({
            title: "Tên bài hát hoặc tên ca sĩ ko được phép để trống",
            icon: "warning"
        });
        return;
    }
    
    if(idUpdate){
        updateSong(title, artist);
    } else {
        let newSong={
            id: nextId++,
            title,
            artist,
        };

        songs.push(newSong);
        Swal.fire({
            title: "Thêm Thành công một bài hát",
            text: "Click để bỏ qua!",
            icon: "success"
        });
    }
    saveData();
    form.reset();
    renderSongs(songs);
});

const editSong = (id) => {
    const found = songs.find((song) => song.id===id);

    if (!found) return;

    idUpdate = id;

    titleInput.value = found.title;
    artistInput.value = found.artist;

    btnSubmit.textContent = "Cập nhật";
};

const updateSong=(title, artist) => {
    const found = songs.find((song) => song.id===idUpdate);
    if(!found) return;

    found.title=title;
    found.artist=artist;

    idUpdate = null;
    btnSubmit.textContent = "Thêm";
    saveData();
    renderSongs(songs);
    form.reset();
};

const deleteSong=(id) => {
    const found = songs.find((song) => song.id===id);
    if(!found) return;

    Swal.fire({
        title: "Are u sure?",
        text: `Bạn muốn xóa "${found.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Chan đê",
        cancelButtonText: "Hủy",
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#6c757d"
    }).then((result) => {
        if (result.isConfirmed) {
            songs = songs.filter((song) => song.id !== id);

            saveData();
            renderSongs(songs);

            Swal.fire({
                title: "Đã xóa!",
                text: "Bài hát đã bị xóa.",
                icon: "success"
            });
        }
    });
};

const searchSong=() => {
    const keyword = searchInput.value.toLowerCase().trim();

    const result=songs.filter((song) => {
        const match=song.title.toLowerCase().trim().includes(keyword);
        return match;
    });
    renderSongs(result);
}
searchInput.addEventListener("input", searchSong);

init();
