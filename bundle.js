async function t(){try{const t=new URLSearchParams({email:"n.noskov@innopolis.university"}),e=await fetch(`https://fwd.innopolis.app/api/hw2?${t}`),n=await e.json();console.log("res:",n);const a=new URLSearchParams(n.toString()),o=await fetch(`https://getxkcd.vercel.app/api/comic?${a}`).then((t=>t.json())),c=document.getElementById("image"),i=document.getElementById("text1"),r=document.getElementById("text2");c.src=o.img,i.innerText=o.title,r.innerText=new Date(o.year,o.month-1,o.day).toLocaleDateString(),c.alt=o.alt}catch(t){console.error(t)}}document.getElementById("button-comic").addEventListener("click",t),t();
