function fetchDetails(){
    const url='https://jsonplaceholder.typicode.com/posts';
    const information=fetch(url)
    .then( (response) =>(response.json()))
    .then( (data)=>{
        const posts=data;
        console.log(posts)
        for(const post of posts){
            
            const mainContainer=document.getElementById("container");

            const headingDiv=document.createElement("h1");
            const paragraph=document.createElement("p");

            headingDiv.classList.add("headings");
            headingDiv.innerHTML=`${post.id}. ${post.title}`;
            paragraph.innerHTML=`${post.body}`;

            mainContainer.appendChild(headingDiv);
            mainContainer.appendChild(paragraph);

        }

    });

}
fetchDetails();