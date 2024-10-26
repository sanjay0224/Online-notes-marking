    var bt = document.querySelector('.bt')
    var dt=document.querySelector('.dt')
    var cont=document.querySelector('.content')
    var popback=document.querySelector('.popback')
    var pop = document.querySelector('.pop')
    var page=document.querySelector('.page')

    /* buttons in pop*/
    var a=document.querySelector('.a')
    var c=document.querySelector('.c')


    /* inputs*/
    var t=document.getElementById('1')
    var n=document.getElementById('2')
    var d=document.getElementById('3')

    /* input values */
    a.addEventListener('click', (e)=>{
        e.preventDefault()

        var div=document.createElement('div')
        div.setAttribute('class','content')
        div.innerHTML=`<h2>${t.value}</h2>
        <h3>${n.value}</h3>
        <p>${d.value}</p>
        <button onclick="del(event)">Delete</button>`
        page.append(div)
    })


    function del(event){
        event.target.parentElement.remove()

    }

    /* cancel button */
    c.addEventListener('click', (e)=>{
        e.preventDefault();
        popback.style.display="none";
        pop.style.display = "none";

    })

    /* + button option*/
    bt.addEventListener('click', () => {
        popback.style.display="block";
        pop.style.display = "block";

    })



    /* Delete button */
    dt.addEventListener('click', (e) => {
        e.preventDefault()
       
            cont.style.display="none"

        })