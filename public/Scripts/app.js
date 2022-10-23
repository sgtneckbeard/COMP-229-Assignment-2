(function(){
    function start()
    {
        console.log("App.js has started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for(button of deleteButton)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm ("Confirm Delete?"))
                {
                    event.preventDefault();
                    window.location.assign("/contactList");
                }
            });
        }
    }
    window.addEventListener("load",start);
})();