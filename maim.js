

const localeUrl = "https://tarmeezacademy.com/api/v1" 
axios.get(`${localeUrl}/posts`)
.then((response)=>{
    console.log("the response is :")
    console.log(response)
    const posts = response.data.data
    console.log("the post is :") 
    console.log(posts) //just to try.

    //سويت لوب عشان يمشي على البوستات ورى بعض ويعبيها
    for ( post of posts){
    let author = post.author

    let postTitle = ""
    if (post.title != null) {
        postTitle = post.title
    }
     //Create cards bu HTML

     let content = `
         <div ">
           <div class="card shadow">
               <div class="card-header">
                    <img  class="rounded-circle border border-3" src="${author.profile_image}" alt="profile image " style="width:40px;  height:40px" >
                       <bold>${author.username}</bold>
                   </div>
         <img src="${post.image}" class="card-img-top w-100 " alt="post here" style=" height: 400px;">
          <div class="card-body">
           <h6 id="time-post">${post.created_at}</h6>
           <h5>${postTitle}</h5>
           <p class="card-text">${post.body}</p>
           <hr>
           <div>
            
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                 <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
               </svg>
               <span>(2)</span>
           </div>
          </div>
        </div>
     `

       //contact card from html to js by dev id
    document.getElementById("posts").innerHTML += content
    
    }
  


})


   function loginOnclick(){

    const username = document.getElementById("username-input").value
    const password = document.getElementById("password-input").value
    const para = {
                 "username": username,
                  "password": password 
                   }
     const url = `${localeUrl}/login`              
    axios.post(url,para)
    .then((response)=>{
        console.log(response.data)
    })
   // console.log(username,password)

   }