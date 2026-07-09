let project=null,icon=null,bin=null;
const status=document.querySelector('#status');
projectInput=document.querySelector('#project');
iconInput=document.querySelector('#icon');
projectInput.onchange=e=>{project=e.target.files[0];status.textContent='已選:'+project.name};
iconInput.onchange=e=>{icon=e.target.files[0];status.textContent='Icon:'+icon.name};
document.querySelector('#build').onclick=()=>{
 if(!project){alert('請先上傳檔案');return;}
 bin=new Blob([JSON.stringify({project:project.name,icon:icon?icon.name:null,type:'AmazFaces BIN package'},null,2)]);
 document.querySelector('#download').disabled=false;
 status.textContent='打包完成';
};
document.querySelector('#download').onclick=()=>{
 let a=document.createElement('a');a.href=URL.createObjectURL(bin);a.download='watchface.bin';a.click();
};
document.querySelector('#qr').onclick=()=>{
 QRCode.toCanvas(document.querySelector('#canvas'),location.href);
};
