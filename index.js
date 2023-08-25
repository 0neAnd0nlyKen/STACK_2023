fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        lahir: 'Cikarang/19 Juni 2003',
        pendidikan:'SMA Negeri 21 Jakarta (lupa tahunnya - 2022)<br>Universitas Udayana S1 Informatika (2022 - sekarang tapi lupa isi krs jadi bakal dikeluarin kekny)',
        pengalaman: 'peserta Kompetisi Debat Mahasiswa Indonesia 2023 (ga lulus)<br>peserta Gemastik Divisi Pemrograman 2023 (ga lulus)<br>peserta STACK 2023 (kemungkinan ga lulus) ',
        skills:'berbicara bahasa inggris<br>berbicara bahasa Indonesia<br>ngoding',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => {
    let lahirJSON = document.createElement('div');
    lahirJSON.innerHTML = json.lahir;
    let lahir=document.getElementById('lahir');
    lahir.appendChild(lahirJSON);

    let pendidikanJSON = document.createElement('div');
    pendidikanJSON.innerHTML = json.pendidikan;
    let pendidikan=document.getElementById('pendidikan');
    pendidikan.appendChild(pendidikanJSON);

    let pengalamanJSON = document.createElement('div');
    pengalamanJSON.innerHTML = json.pengalaman;
    let pengalaman=document.getElementById('pengalaman');
    pengalaman.appendChild(pengalamanJSON);

    let skillsJSON = document.createElement('div');
    skillsJSON.innerHTML = json.skills;
    let skills=document.getElementById('skills');
    skills.appendChild(skillsJSON);    
});


