const newcolor=document.getElementById('newcolor');
const currentcolor=document.getElementById('currentcolor');

const hexvalue = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getrandomhexvalue(){
    const randomindexposition = Math.floor(
        Math.random()*hexvalue.length
    );

    const randomhexvalue = hexvalue[randomindexposition]
    return randomhexvalue ;
}

function getrandomhexstring (stringLength){
    let hexstring ='';
    for(let i =0 ; i<stringLength;i++){
        hexstring += getrandomhexvalue();
    }

    return hexstring ;
   
}

newcolor.addEventListener('click',()=>{
  const randomhexString = '#'+ getrandomhexstring(6);
  document.body.style.setProperty(
    'background-color',
    randomhexString
  );

  currentcolor.textContent=randomhexString;
      
});