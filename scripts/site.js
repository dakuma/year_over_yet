let stopit = document.getElementById("stopArea");

function iToldYouNotTo() {
    alert("I TOLD YOU NOT TO PUSH THE BUTTON!")
    let video = document.createElement("iframe");
    video.setAttribute('width', '1268');
    video.setAttribute('height', '713');
    video.setAttribute('src', 'https://www.youtube.com/embed/9Deg7VrpHbM?autoplay=1');
    video.setAttribute('title', 'YouTube video player' );
    video.setAttribute('frameborder', '0');
    video.setAttribute('allow', 'autoplay');
    stopit.appendChild(video);
}
