import './style.css'
const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  showspinner()
  const data = new FormData(form)
  const res = await fetch('http://localhost:8080/dream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
      }),
    });
    if (res.status == 200) {
      const { image } = await res.json()
      // let image = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-dMeZPZjpxGsuqXXpDH63ImyY/user-hrzBrZfnfBc3Q7gbj3yWdAEP/img-KguSl7hjtzX6RgPc3q7XSq9B.png?st=2023-04-05T05%3A18%3A13Z&se=2023-04-05T07%3A18%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-05T00%3A50%3A14Z&ske=2023-04-06T00%3A50%3A14Z&sks=b&skv=2021-08-06&sig=UElIuUapCem5qA7/WIWxuxCu9jAqMvngeUEKibe2nBc%3D'
      document.getElementById('result').innerHTML = `<img src = "${image}" />`
    }
    else{
      // console.log('hii');
      const err = await res.text()
      alert(err)
      console.log(err);
    }
    hidespinner()
})


function showspinner(){
const button = document.querySelector('button')
button.disabled = true
button.innerHTML = 'Dreaming ... <span class="spinner" >🧠</span>'
}
function hidespinner(){
  const button = document.querySelector('button')
  button.disabled = false
button.innerHTML = 'Dream'
}