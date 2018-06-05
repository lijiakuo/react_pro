var gulp=require('gulp');
var webserver=require('gulp-webserver');
var url=require('url');
var qs=require('qs');
gulp.task('webserver',function(){
    gulp.src('.')
    .pipe(webserver({
        port:3000,
        middleware:function(req,res,next){
            var method=req.method;
            var pathname=url.parse(req.url).pathname;
            console.log(method)
            res.setHeader('Access-Control-Allow-Origin','*');
            if(method==='GET'){
                switch(pathname){
                    case '/dls':
                        var json=[
                            {id:0,src:'images/kele.png',tit:'可乐鸡翅',pf:['评分8.1','123213做过']},
                            {id:1,src:'images/pg.png',tit:'糖醋排骨',pf:['评分8.1','123213做过']},
                            {id:2,src:'images/dx.png',tit:'油焖大虾',pf:['评分8.1','123213做过']},
                            {id:3,src:'images/cc.png',tit:'五个月宝宝五维彩超',pf:['评分8.1','123213做过']},
                            {id:4,src:'images/cele.png',tit:'可乐鸡翅',pf:['评分8.1','123213做过']}
                        ]
                        res.setHeader('content-type','application/json;charset=utf-8');
                        res.write(JSON.stringify(json));
                        res.end();
                }
            }else if(method==='POST'){
                console.log('jinru');
                var obt=[
                    {
                        src:'images/1.png',
                        name:'可乐鸡翅',
                        con:['8.1评分','123123人做过'],
                        writor:{name:"ljk",src:"images/1.png"},
                        list:[
                            {tit:['用料']},
                            {tit:['鸡翅(翅中最佳)','8个','>']},
                            {tit:['可乐','易拉罐一罐','>']},
                            {tit:['盐','适量','>']}
                        ]
                    },
                    {
                        src:'images/pg.png',
                        name:'可乐鸡翅',
                        con:['8.1评分','123123人做过'],
                        writor:{name:"ljk",src:"images/1.png"},
                        list:[
                            {tit:['用料']},
                            {tit:['鸡翅(翅中最佳)','8个','>']},
                            {tit:['可乐','易拉罐一罐','>']},
                            {tit:['盐','适量','>']}
                        ]
                    },
                ]
                var str='';
                req.on('data',function(trunk){
                    str+=trunk
                })
                req.on('end',function(){
                    var obb={};
                    if(str.indexOf('{')!=-1 && str.indexOf('}')!=-1){
                        obb=JSON.parse(str);
                        console.log(obb);
                    }else{
                        obb=qs.parse(str);
                    }
                    switch(pathname){
                        case '/a':
                        console.log('kl');
                        console.log(obb.id);
                            res.setHeader('content-type','application/json;charset=utf-8');
                            // res.setHeader('content-type','application/json;charset=utf-8');
                            console.log(JSON.stringify(obt[obb.id]));
                            res.write(JSON.stringify(obt[obb.id]));
                            res.end();
                        break;
                    }
                })
            }else if (method === 'OPTIONS') {
                res.writeHead(200, {
                    'content-type': 'application/json;charset=utf-8',
                    'access-control-allow-origin': '*',
                    'access-control-allow-methods': 'GET,PUT,POST,DELETE',
                    'access-control-allow-headers': 'origin,x-requested-with,content-type,accept'
                })
                res.end();
            }
            
        }
    }))
})
gulp.task('default',['webserver']);