function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function search(username){
    loadJSON('https://api.github.com/users', function(data){
        for(var i = 0; i < Object.keys(data).length; i++){
            if(data[i].login == username){
                loadJSON(data[i].url, function(data){
                    document.getElementById("avatar").src=data.avatar_url;
                    document.getElementById("name").innerHTML=data.name;
                    document.getElementById("username").innerHTML=data.login;
                    document.getElementById("email").innerHTML=data.email;
                    document.getElementById("location").innerHTML=data.location;
                    document.getElementById("gist").innerHTML=data.public_gists;

                    loadJSON(data.repos_url, function(data){
                        for(var i = 0; i < 6;i++){
                            document.getElementById("name"+(i+1)).innerHTML=data[i].name;
                            document.getElementById("desc"+(i+1)).innerHTML=data[i].description;
                        }
                    },function(xhr){console.error(xhr)});
                },function(xhr){console.error(xhr);});
            }
        }
    },function(xhr){console.error(xhr);});
}
