const button_discord = document.getElementById("button_discord");

button_discord.addEventListener("click", () =>{
    window.open(
        "https://discord.com/api/oauth2/authorize?client_id=955148388666605598&permissions=8&scope=bot"
        , '_blank');
})