
/*-------------------------slider---------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("song_time_stamp");
    rangeslide(slider.value);
    slider.addEventListener("input", function() {
        const percentage = (this.value / this.max) * 100;
        this.style.background = `linear-gradient(to right, red ${percentage}%, transparent ${percentage}%)`;
    });
    
    // Adding hover effect
    slider.addEventListener("mouseover", function() {
        const percentage = (this.value / this.max) * 100;
        this.style.background = `linear-gradient(to right, red ${percentage}%, transparent ${percentage}%)`;
    });

    slider.addEventListener("mouseout", function() {
        const percentage = (this.value / this.max) * 100;
        this.style.background = `linear-gradient(to right, white ${percentage}%, transparent ${percentage}%)`;
    });
});
async function rangeslide(value) {
    const max = document.getElementById("song_time_stamp").max;
    const percentage = (value / max) * 100;
    document.getElementById("song_time_stamp").style.background = `linear-gradient(to right, white ${percentage}%, transparent ${percentage}%)`;
    console.log(percentage);
}
/*-------------------------slider---------------------------*/