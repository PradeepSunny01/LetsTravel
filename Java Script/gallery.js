function colo()
{
    var col=["a.jfif","b.jfif","c.jfif","d.jfif","e.jfif","f.jfif","g.jfif","h.jfif"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}
function color()
{
    var colo=["i.png","j.jfif","k.jfif","l.jfif","m.jfif","n.jfif","o.jfif","p.jfif"]
    var len=colo.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/images/"+colo[rannum]+")"
    var updatethetime=setTimeout(function(){color()},5000)
}
function colorr()
{
    var colo=["q.jpg","r.jpg","s.jfif","t.jfif","u.jfif","v.jfif","w.jfif","x.jfif"]
    var len=colo.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/images/"+colo[rannum]+")"
    var updatethetime=setTimeout(function(){colorr()},5000)
}
function colorrr()
{
    var colo=["aa.jfif","bb.jfif","cc.jfif","dd.jfif","ee.jfif","ff.jfif","gg.jfif","hh.jfif"]
    var len=colo.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/images/"+colo[rannum]+")"
    var updatethetime=setTimeout(function(){colorrr()},5000)
}
function colorrrr()
{
    var colo=["ii.jfif","jj.jfif","kk.jfif","ll.jfif","mm.jfif","nn.jfif","oo.jfif","pp.webp"]
    var len=colo.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/images/"+colo[rannum]+")"
    var updatethetime=setTimeout(function(){colorrrr()},5000)
}